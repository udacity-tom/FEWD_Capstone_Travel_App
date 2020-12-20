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
    res.sendFile(path.resolve('src/client/views/index.html')); //TODO:need to change path to dist when ready
    console.log('Homepage delivered');
})

//set server port to liten to
app.listen(port, function() {
    console.log(`Travel App listening on ${port}`);
})

//Endpoint for data submission for new API request
app.post('/process', processRequest);
// const getGeonames = async () => {
// }

//wbit example URLs
const country = '&country=ch';
const city = 'city=winterthur';
const wbit16URL = `${wbit16dayPrefixURL}${city}${country}&key=${wbit_key}`;
console.log("16day", wbit16URL);

const axiosGet = async (req, res) => {
    // console.log("url in axiospost",url);
    //TODO: CLEAR THE UI INPUT
    res = await axios.get(req)
    try {
        const response = await res;
        return response;
    } catch(error) {
        console.log('Data error on Wbit', error);
        return error;
    }





    // .then(async function (res){
    //     const response = await res;
    //     // console.log("axios server call response to server request",response);
    //     console.log("wbit server call response for objects", response.data.data[0]);
    //     return response.data;
    // })
    // .catch( (error) => {
    //     console.log("Axios errror", error);
    // })
}


// function getWeatherbitInfo(finalLocation){
    const weatherAtFinalLoc = async (finalLocation) => {
        const response = await axiosGet(wbit16URL);
        // console.log("wbit response", response);
        // console.log("wbit response for objects", response.data.data[0]);
        return response;
    }
// }
// https://api.weatherbit.io/v2.0/current?city=london&country=uk&units=S&key=303a4822c70643128b8e41ecf09670f0

//Processes the request from the client for data
function processRequest(req, res) {
    // console.log("Request for new Travel Plans recieved, in the form of:", typeof(req.body), req.body);
    const {startLocation, finalLocation, date}  = req.body;
    // console.log("Destructured req.body", "startLocation:",startLocation, "finalLocation:", finalLocation, "date:",date);
    // const response = await weatherAtFinalLoc();
    axiosGet(wbit16URL)
    .then(function (response) {
        console.log("processREqust:wbit response", response)
    })
//     .then(function(response) {
//     console.log("processREqust:wbit response for objects", response.data.data[0])
// })
        

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

