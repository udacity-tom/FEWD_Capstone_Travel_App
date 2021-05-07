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

//gets weather at current input location
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

const axiosGet = async (req, res, getRequestType) => {
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

    const weatherAtFinalLoc = async (finalLocation) => {
        const response = await axiosGet(wbit16URL);
        // console.log("wbit response", response);
        console.log("wbit response for objects", response.data.data[0])
        return response.data;
    }

//Processes the request from the client for all data submitted for trip
function getWbit(req, res) {
    const {longtitude, lattitude, cityName, countryCode, dateDep} = req.body;
    console.log("(Server:Line 157)Destructured req.body", "long:",longtitude, "lattitude:", lattitude, "city name:",cityName, "Country Name:", countryCode, "dateDep", dateDep);
    const wbit16URL = getWbitURL(longtitude, lattitude, cityName, countryCode, dateDep);
    req = wbit16URL;
    axiosGet(req, res, String(req))
    .then(function(data) {
        res.send(data);
    })
}

//function to query current city location uses geonames API
function getCityName(req, res) {
    const {location}  = req.body;
    req = getGeoURL(location);
    axiosGet(req, res, String(req))
    .then(function(data) {
        res.send(data);
    })

}

async function getPixaBayImage(req, res) {
    let {city, country} = req.body;
    req = await getPixaURL(city, country);
    axiosGet(req, res, String(req))
    .then(function(data) {
        res.send(data);
    })
}


function createDataSet(dataRecieved){
//TODO: Store browser created data on server

}

//Gets the data from the APIs based on the data set created.
function getAllData(dataService, dataSet) {
//TODO: Retrieve browser created data on server
}

function returnDataToClient(dataToReturn){
//TODO: Send browser created data on server back to browser
}

