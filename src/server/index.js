//Safely store the API keys
const dotenv = require('dotenv');
dotenv.config();

//Add store for collected data
const dataStore = [];
const currentInput = {};

//API keys for axios requests
const geo_key = process.env.API_KEY_GEO;
const pix_key = process.env.API_KEY_PIX;
const wbit_key = process.env.API_KEY_WBIT;

//API URL construction elements
// const geoPrefixURL = "http://api.geonames.org/searchJSON?q=";
// const pixPrefixURL = "https://pixabay.com/api/?q=";
const wbitDailyPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const wbitCurrentPrefixURL = "https://api.weatherbit.io/v2.0/current/city?"; //current->city 
const wbit16dayPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
// https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY

const geoSuffixURL = "";
const pixSuffixURL = "";
const wbitSuffixURL = "";

//Server configs 
var path = require('path');
const https = require('follow-redirects').https;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

//setup server to use express, json, cors
const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

//setup home page
const port = 8081;
app.get('/', function(req, res) {
    res.sendFile(path.resolve('src/client/views/index.html')); //TODO:need to change path to dist when ready
    console.log('Homepage delivered');
})

//set server port to liten to
app.listen(port, function() {
    console.log(`Travel App listening on ${port}`);
})

//Endpoint for data submission for weatherbit API request
app.post('/getWbit', getWbit);
// app.post('/wbit', getWbit);
//Endpoint for city search parameters GeoNames API (uses axiosGet)
app.post('/getCityName', getCityName);

app.post('/getPix', getPixaBayImage);




// wbit example URLs
// const country = '&country=ch';
// const country = '';
// const city = 'city=winterthur';
// const wbit16URL = `${wbit16dayPrefixURL}${city}${country}&key=${wbit_key}`;
// console.log("16day", wbit16URL);


//gets weather for 16days, current weatehr, historical weather, daily weather?
//uses axiosGet as three seperate requests
//gets weather at current location
function getWbitURL(longtitude, lattitude, cityName, countryCode, dateDep) {
    const wbitDailyPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
    const wbitCurrentPrefixURL = "https://api.weatherbit.io/v2.0/current/city?"; //current->city 
    const wbit16dayPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
    // TODO: 26-1-21 setup the results as eitehr SI Units or Imperiel ->const units = SI or Imperial;
    const country = '&country='+countryCode;
    // let wbit16URL = "";
// TODO: Put a switch in here to get a daily hour by hour weather as well, finish getGeoURL
    const lon = 'lon='+longtitude;
    const lat = 'lat='+lattitude;
    let wbit16URL = `${wbit16dayPrefixURL}${lat}&${lon}&key=${wbit_key}`;    
    console.log("Wbit 16day URL", wbit16URL);
    return wbit16URL;
};

function getGeoURL(location){
    const geoPrefixURL = "http://api.geonames.org/searchJSON?";
    const geoSuffixURL = "&maxRows=10";
    const geoExtraParam = "name_startsWith=";
    const geoURLStart = `${geoPrefixURL}${geoExtraParam}${location}&username=${geo_key}${geoSuffixURL}`;
    // console.log("(server line110) Geo URL is: ",geoURLStart);
    return geoURLStart;
}

function getPixaURL(city, country) {
    const pixPrefixURL = "https://pixabay.com/api?";
    const pixSuffixURL = "&q=";
    const pixExtraParam = "&image_type=photo&per_page=10";
    const pixaURL = `${pixPrefixURL}key=${pix_key}${pixSuffixURL}${city}`;
    return pixaURL+pixExtraParam;

}
// https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo

const axiosGet = async (req, res, getRequestType) => {
    //TODO: CLEAR THE UI INPUT
    res = await axios.get(req)
    try {
        const response = await res;
        console.log(`(server) API ${getRequestType} Response received!`)
        console.log("(server) axiosGet response is: ", response.data);
        return response.data;
    } catch(error) {
        console.log(`Data error on ${getRequestType} API request`, error);
        return error;
    }
}

// function getWeatherbitInfo(finalLocation){
    const weatherAtFinalLoc = async (finalLocation) => {
        const response = await axiosGet(wbit16URL);
        // console.log("wbit response", response);
        console.log("wbit response for objects", response.data.data[0])
        return response.data;
    }
// }
// https://api.weatherbit.io/v2.0/current?city=london&country=uk&units=S&key=303a4822c70643128b8e41ecf09670f0

//Processes the request from the client for all data submitted for trip
function getWbit(req, res) {
    // console.log("(Server:Line 155)Request for new Travel Plans recieved, in the form of:", typeof(req.body), req.body);
    const {longtitude, lattitude, cityName, countryCode, dateDep} = req.body;
    // const {req.startLocationGeoObj.lng, req.startLocationGeoObj.lat, req.startLocationGeoObj.name,req.startLocation.countryCode, req.dateDep}  = req.body;
    console.log("(Server:Line 157)Destructured req.body", "long:",longtitude, "lattitude:", lattitude, "city name:",cityName, "Country Name:", countryCode, "dateDep", dateDep);
    const wbit16URL = getWbitURL(longtitude, lattitude, cityName, countryCode, dateDep);
    // const response = await weatherAtFinalLoc();
    req = wbit16URL;
    axiosGet(req, res, String(req))
    .then(function(data) {
        res.send(data);
    })
}

//Will create the data set to send to the three APIs

function getWbitCurret(req, res) {

}

function getWbitForecast(req, res) {
    
}


//function to query current city location uses geonames API
function getCityName(req, res) {
    // console.log("(Server: Line 184) City name request for", req.body.location );
    // console.log("(Server: Line 185)req.body is: ", req.body);
    const {location}  = req.body;
    // if(location.length < 3) return;
    req = getGeoURL(location);
    // console.log("req before axios function is",req);
    axiosGet(req, res, String(req))
    .then(function(data) {
        res.send(data);
    })

}

async function getPixaBayImage(req, res) {
    // console.log("(Server: line 198) data submitted", req.body);
    let {city, country} = req.body;
    req = await getPixaURL(city, country);
    // console.log("URL Submittied",req);
    axiosGet(req, res, String(req))
    .then(function(data) {
        // console.log("(server: line209)getPixBayImage() res.send");
        res.send(data);
    })
}


function createDataSet(dataRecieved){


}

//Gets the data from the APIs based on the data set created.
function getAllData(dataService, dataSet) {

}

function returnDataToClient(dataToReturn){

}

