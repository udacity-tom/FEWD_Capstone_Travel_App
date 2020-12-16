//Safely store the API keys
const dotenv = require('dotenv');
dotenv.config();

//Add stored collected data
const dataStore = [];

//API keys for axios requests
const geo_key = process.env.API_KEY_GEO;
const pix_key = process.env.API_KEY_PIX;
const wbit_key = process.env.API_KEY_WBIT;

const geoPrefixURL = "http://api.geonames.org/searchJSON?q=";
const pixPrefixURL = "https://pixabay.com/api/?q=";
const wbitPrefixURL = "https://api.weatherbit.io/v2.0/forecast/daily?";

const geoSuffixURL = "";
const pixSuffixURL = "";
const wbitSuffixURL = "";

//Server configs 
var path = require('path');
const https = require('follow-redirects').https;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fetch = require('node-fetch');
// const axios = require('node-axios');


//setup server to use express, json, cors
const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

//setup home page
const port = 8081;
app.get('/', function(req, res) {
    resolve.sendFile(path.resolve('src/client/views/index.html')); //TODO:need to change to dist when ready
    console.log('Homepage delivered');
})

//set server port to liten to
app.listen(port, function() {
    console.log(`Travel App listening on ${port}`);
})

//Endpoint for data submission for new API request
app.post('/process', processRequest);

//Processes the request from the client for data
function processRequest(req, res) {
    console.log("Request for new Travel Plans recieved.", req.body)
    // const sLocation = req.
    // const dataDestination = createDataSet(req);
    // getAllData(geo,dataDestination);
}

//Will create the data set to send to the three APIs
function createDataSet(dataRecieved){


}

//Gets the data from the APIs based on the data set created.
function getAllData(dataService, dataSet) {

}

function returnDataToClient(dataToReturn){

}

