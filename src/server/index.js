const dotenv = require('dotenv');
dotenv.config();

//API keys for axios requests
const geo_key = process.env.API_KEY_GEO;
const pix_key = process.env.API_KEY_PIX;
const wbit_key = process.env.API_KEY_WBIT;



var path = require('path');
const https = require('follow-redirects').https;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fetch = require('node-fetch');
// const axios = require('node-axios');
const port = 8081;

const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

//setup home page
app.get('/', function(req, res) {
    resolve.sendFile(path.resolve('src/client/views/index.html'));
    console.log('Homepage delivered');
})

app.listen(port, function() {
    console.log(`Travel App listening on ${port}`);
})

//Endpoint for data submission for new API request
app.post('/process', processRequest);

//Processes the request from the client for data
function processRequest(req, res) {
    console.log("Request for new Travel Plans recieved.")
    const dataDestination = createDataSet(req);
    getAllData(geo,dataDestination);
}

//Will create the data set to send to the three APIs
function createDataSet(dataRecieved){


}

//Gets the data from the APIs based on the data set created.
function getAllData(dataService, dataSet) {

}

function returnDataToClient(dataToReturn){

}

