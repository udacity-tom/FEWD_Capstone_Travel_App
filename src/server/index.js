//Safely store the API keys
const dotenv = require('dotenv');
dotenv.config();

//Add store for collected data
const dataStore = [];

//API keys for axios requests
const geo_key = process.env.API_KEY_GEO;
const pix_key = process.env.API_KEY_PIX;
const wbit_key = process.env.API_KEY_WBIT;

const geoPrefixURL = "http://api.geonames.org/searchJSON?q=";
const pixPrefixURL = "https://pixabay.com/api/?q=";
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

//Endpoint for data submission for new API request
app.post('/process', processRequest);

//Endpoint for city search parameters GeoNames API (uses axiosGet)
app.post('/cityName', checkCityName);

const getGeonames = async () => {
}

// wbit example URLs
// const country = '&country=ch';
// const country = '';
// const city = 'city=winterthur';
// const wbit16URL = `${wbit16dayPrefixURL}${city}${country}&key=${wbit_key}`;
// console.log("16day", wbit16URL);


//gets weather for 16days, current weatehr, historical weather, daily weather?
//uses axiosGet as three seperate requests
//gets weather at current location
function getWbitURL(location, countryCode, date, longtitude, lattitude) {
    const wbitDailyPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
    const wbitCurrentPrefixURL = "https://api.weatherbit.io/v2.0/current/city?"; //current->city 
    const wbit16dayPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
    // TODO: 26-1-21 setup the results as eitehr SI Units or Imperiel ->const units = SI or Imperial;
    const country = '&country='+countryCode;
    let wbit16URL = "";
// const country = ''
// TODO: Put a switch in here to get a daily hour by hour weather as well, finish getGeoURL
    if(location){
        const city = 'city='+location;
        wbit16URL = `${wbit16dayPrefixURL}${city}${country}&key=${wbit_key}`;
        console.log("location is true", wbit16URL);
    } else {
        const lon = 'lon='+longtitude;
        const lat = 'lat='>lattitude;
        wbit16URL = `${wbit16dayPrefixURL}${lat}&${lon}&key=${wbit_key}`;
    }
    
    
    console.log("Wbit 16day URL", wbit16URL);
    // console.log("the value is",String(city));
    // axiosGet(req, res, 

    // const wbit16Day = axiosGet(wbit16URL, res, "wbit16URL")
    // .then(function(wbit16Day){
    //     return wbit16Day;
    // })

    return wbit16URL;
};

function getGeoURL(startLocation, startCountry, finalLocation, finalCountry){
    const geoPrefixURL = "http://api.geonames.org/searchJSON?";
    const geoSuffixURL = "&maxRows=10";
    const geoExtraParam = "name_startsWith=";
    const geoURLStart = `${geoPrefixURL}${geoExtraParam}${startLocation}&username=${geo_key}${geoSuffixURL}`;
    console.log("Geo URL is: ",geoURLStart);
    return geoURLStart;
}

function getGeoURLCity(location, country){

}


const axiosGet = async (req, res, getRequestType) => {
    console.log("url in axiospost", req);
    //TODO: CLEAR THE UI INPUT
    res = await axios.get(req)
    console.log(`${getRequestType} Request made!`)
    try {
        const response = await res;
        console.log(`API ${getRequestType} Response received!`)
        console.log("axiosGet response is: ", response.data);
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

//Processes the request from the client for data
function processRequest(req, res) {
    console.log("Request for new Travel Plans recieved, in the form of:", typeof(req.body), req.body);
    const {startLocation, finalLocation, date, startCountry, finalCountry}  = req.body;
    console.log("Destructured req.body", "startLocation:",startLocation, "finalLocation:", finalLocation, "date:",date, "startCountry:", startCountry, "finalCountry", finalCountry);
   
    const wbit16URL = getWbitURL(finalLocation, finalCountry, date);
    // const response = await weatherAtFinalLoc();
    req = wbit16URL;
    axiosGet(req, res, String(req))
    .then(function(data) {
        res.send(data);
    })
    // getWbitURL(req,res)
    // res.send(getWbitURL(finalLocation, country, date));
}

//Will create the data set to send to the three APIs

//function to query current city location uses geonames API
function checkCityName(req, res) {
    console.log("City name request for", req.body.startLocation );
    console.log("req.body is: ", req.body);
    const {startLocation, finalLocation, date, startCountry, finalCountry}  = req.body;

    req = getGeoURL(startLocation, startCountry, finalLocation, finalCountry);
    console.log("req before axios function is",req);
    axiosGet(req, res, String(req))
    .then(function(data) {
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

