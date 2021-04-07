import { formHandler } from "./formHandler";
import { arrow, createPopper, start } from "@popperjs/core";
import { keypressed } from "./keypressed";



const dataStore = [];
let suggestedCities = {
    config: {},
    data: {},
    headers: {}
};
//object for storing geonames search resutls
let searchResults = {};
// console.log("suggested cities is ", suggestedCities);
//object placeholder for current HTML user entered 'trip'
let currentInput = {
    startLocation: "", //
    startCountry: "",
    startLong: 0.0,
    startLat: 0.0,
    finalLocation: "",
    finalCountry: "",
    dateDep: new Date(),
    dateRet: new Date(),
    pixaStartCity: "",
    pixaStartCountry: "",
    pixaFinalCity: "",
    pixaFinalCountry: "",
    completed: false
};

const dateDep = document.getElementById("dateDep");
const dateRet = document.getElementById("dateRet");
const startLocationCountry = document.getElementById("startLocation-Country");
const finalLocationCountry = document.getElementById("finalLocation-Country");
const citySearch = document.getElementById("citySearch");
const userActiveElement = document.activeElement.id;


function popCreator(element, tooltip) {

}



function createPopups () {
    const startLocation = document.getElementById("startLocation");
    const finalLocation = document.getElementById("finalLocation");
    const dateD1 = document.getElementById("dateDep");
    const dateD2 = document.getElementById("inputRet");
    const messageSL = document.querySelector("#tooltipSL");
    const messageFL = document.querySelector("#tooltipFL");
    const messageD1 = document.querySelector("#tootipD1");
    const messageD2 = document.querySelector("#tootipD2");
    createPopper(startLocation, messageSL,{
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    element: arrowSL,
                    offset: [0,8]
                }
            }
        ]
    });
    createPopper(finalLocation, messageFL,{
        placement: "top",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0,8]
                }
            }
        ]
    });
    createPopper(dateD1, messageD1,{
        placement: "top",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0,8]
                }
            }
        ]
    });
    createPopper(dateD2, messageD2,{
        placement: "top",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0,8]
                }
            }
        ]
    });
}

function hidePopups () {
    document.getElementById("tooltipSL").setAttribute("style", "display:none;");
    document.getElementById("tooltipFL").setAttribute("style", "display:none;");
    document.getElementById("tooltipD1").setAttribute("style", "display:none;");
    document.getElementById("tooltipD2").setAttribute("style", "display:none;");
}


//returns current event target of document
const getClickTarget = () => {
    // event.preventDefault();
    console.log("getClickTarget event is")
    return event.target;
}

function checkDateSupported() {
    let element = document.createElement('input');
    try {
        element.type = "date";
    } catch(element) {}
    return element.type == "date";
}

const setCountryValue = () => {
    //set country value stub
}

const getPossibleCities = async (idOfCurrentElement) => {
    let searchLocation = idOfCurrentElement;
    console.log("searchLocation is", searchLocation);
    let searchRef;
    if( getClickTarget().id != "startLocation") {
        searchLocation = finalLocation;
        searchRef = "tooltipFL";
    } else {
        searchLocation = startLocation;
        searchRef = "tooltipSL";
    }
    addLoadingGraphic(searchLocation.id);
    suggestedCities = await getGeoNamesCitySuggestions(searchLocation.value);
    // console.log("suggested cities is ", suggestedCities);
    showSuggestedCities(suggestedCities, searchLocation.id);
}

function interpretMouseClick() {
    //TODO take the input slot, check for at least 3 characters and then when a click (touch) event occurs make a search.
}


//TODO store search results when user does something else to save on API calls
function storeSelectedCity( currentSelectedItem, suggestedCities) {
    console.log("StoreSelectedCity", currentSelectedItem);
    console.log("StoreSelectedCity", currentSelectedItem.value);
    console.log("StoreSelectedCity suggested cities", suggestedCities);
    console.log("StoreSelectedCity searchResults", searchResults);
}

const getPixaBayImage = async (cityName, countryName) => {
    let returnedData = await Client.axiosPost('/getPix', {city: cityName, country: countryName});    
    // TODO: check for portrait image, skip to next (to first landscape image)
    console.log("getpixaimage first link", returnedData.data.hits[0].largeImageURL);
    //get first URL for image and return
    return returnedData.data.hits[0].largeImageURL;
}
function setBackgroundImage(url, inputFieldToCheck) {
    console.log("setBackgrounImage Line 158", url);
    // const imageBackground = url;
    const inputForm = document.getElementById('background');
    console.log("setBackgroundImage ", inputForm);
    // inputForm.setAttribute("style","background: url("+url+")"+ (inputFieldToCheck =='startLocation'? "left ": "right ")+" center no-repeat;");
    inputForm.setAttribute("style","background: url("+url+")"+ "center center / cover  no-repeat;overflow: hidden;");
}

//Calls endpoint on server app to get list of cities from Geonames API
const getGeoNamesCitySuggestions = async (cityName) => {

    //TODO preliminary code to save API calls with reference to storeSelectedCity()
    // console.log("SuggestdCities ", suggestedCities);
    // if(suggestedCities != {}) console.log("suggestedCities.config.data",suggestedCities.config.data);
    // if(suggestedCities.config.data. != {})
    let returnedData =  await Client.axiosPost('/cityName', {location: cityName});
    console.log("getGeoNamesCitySuggestions, Data from server recieved", returnedData);
    return returnedData;
}
    

//creates HTML fragment drop-down list of user inputted city hits, removes previous searches, updates DOM
function showSuggestedCities (returnedData, inputFieldToShowList) {
    console.log("in showsuggestedcities", inputFieldToShowList, returnedData);
    const searchResponse = document.createDocumentFragment();
    const searchList = document.getElementById(inputFieldToShowList+"-searchList");
    //creates list items in a fragrment of cities found beginning with user search
    for (let i = 0; i < returnedData.data.geonames.length; i++) {
        const listElement = document.createElement('li');                   
        listElement.value = i;
        listElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+") "+returnedData.data.geonames[i].adminName1+".";
        listElement.className = "searchList";
        listElement.id = inputFieldToShowList+"-"+i;
        listElement.dataset.obj = JSON.stringify(returnedData.data.geonames[i]);//listElement.dataset.id = "The obj";//stringify(returnedData.data.geonames[i]);
        searchResponse.appendChild(listElement);
    }
    //remove list elements of searchlist from previous searches
    while(searchList.firstChild){
        searchList.removeChild(searchList.firstChild);
        }
        removeLoadingGraphic(inputFieldToShowList);
        searchList.appendChild(searchResponse);
        searchList.setAttribute('style', 'width: 350px; position: absolute; display: block; background-color: white; outline: 1px;');
}

//Removes search list if user clicks away or has selected city from Geonames suggested list
function hideSuggestedCities (inputFieldToCheck) {
    console.log("hideSuggestedCities()", inputFieldToCheck);
    const idToHide = inputFieldToCheck+'-searchList';
    document.getElementById(idToHide).setAttribute('style', 'display: none;');
}

//adds a loading graphic in user input fields as interactive UI feedback
function addLoadingGraphic (location) {
    const loadingIcon = document.getElementById(location);
    loadingIcon.classList.add("loadingIcon");
}
//removes loading graphic in user input fields when GeoNames API responds and city list is created 
function removeLoadingGraphic (location) {
const loadingIcon = document.getElementById(location);
loadingIcon.classList.remove("loadingIcon")
}
//Collects all data and submits to 
function storeSelectedUserData (startLocation,  finalLocation, dateOfDeparture, duration ) {

}

//Simple checking. Checks user input for errors and checks if fields are not empty
function checkInput() { 
    if((startLocation.value == "" || finalLocation.value == "" || dateDep.value == "" || dateRet.value == "") ) {
        // Client.errorHandling(errData);
        return false;
    } else {
        return true;
    }
}

//INFO 24-3-21 Supposed to be autosearching and find city based on what is typed so far->delete/find alternative 
    //TODO: 15-2-21 Create function onCitySearchChange() such that it requests city search data once three
    //characters have been typed. 
function onCitySearchChange (){
    if(checkCityInputIsActive()){
        if (citySearch.value.length >= 3){
            processCitySearch();
        } else if (citySearch.value.length < 3) {
            alert("Please input at least 3 characters");
        }
    }
}

const processSubmitData = async () => {
    // document.getElementById("errors").value = "";
    Client.clearError();
    console.log("in processsubmitData");
    // validateFormInput();
    // saveData();
    console.log("Full details from processSubmitData",startLocation, startCountry, startLong, startLat, finalLocation, finalCountry, dateDep, dateRet, pixStartCity, pixaStartCountry, pixaFinalCity, pixaFinalCountry, completed);
    const errData = {
        code: "998",
        msg: "Check all inputs are correctly entered and filled out. "
    }

    if( checkInput() ) {
        // let returnedData =  await Client.axiosPost('/cityName', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        // console.log("Data from server request", returnedData);
        // let returnedData =  await Client.axiosPost('/process', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        console.log("Data from server request", returnedData);
    } else {
        console.log("input error on submit search");
        Client.errorHandling(errData);
    }
    console.log("checkInput() =",checkInput());

}



//INFO when run will reference clicked City from GeoNames API listed on screen and update input fields
function updateCityName (geonamesCityObject, inputFieldToCheck) {
    getPixaBayImage(geonamesCityObject.name, geonamesCityObject.countryCode)
    .then( function(data) {
        if(data){
            console.log("Data was returned", data);
            return data;
        }
        console.log("Data was not returned")
    })
    .then( function(data) {
        setBackgroundImage(data, inputFieldToCheck);

    });
    const inputLocation = document.getElementById(inputFieldToCheck);
    const countryLocation = inputFieldToCheck+"Country";
    const inputCountry = document.getElementById(countryLocation);
    inputLocation.value = geonamesCityObject.name;
    inputCountry.value = geonamesCityObject.countryName+", "+geonamesCityObject.countryCode;
    // hideSuggestedCities(inputFieldToCheck);
    
        
    //Save city data to object.
    
}

//INFO Created as alternative for search method to find city based on user input
function addSearchButton() {
    return;
    const searchButton = document.createDocumentFragment();
    const searchElement = document.createElement('button');
    const placeTag = document.createElement('div');
    const inputTag = document.getElementById('inputArea');
    searchElement.innerText = "Search";
    searchButton.appendChild(searchElement);
    placeTag.setAttribute('style', 'z-index: 100; display: block;');
    placeTag.appendChild(searchButton)
    inputTag.appendChild(placeTag);
}

function eventDeleg() {
    // console.log("inside eventDeleg");
    const clickNodeName = getClickTarget().nodeName;
    const clickValue = getClickTarget().value;
    // console.log("eventDeleg, nodename, clickValue, type", clickNodeName, clickValue, getClickTarget().type);
    // const keyNodeName = getClickTarget().
    
    if (clickNodeName == "BUTTON") {
        if (clickValue == "submit") processSubmitData();
        // else if (clickValue == "citySearch") processCitySearch();
        else if (clickValue == "addTrip") addTrip();//button adds a new trip
        else if (clickValue == "deleteTrip") deleteTrip();//button deletes trip from store
        
    } else if (clickNodeName == "LI") {
        // console.log("eventDeleg updateCityName will run");
        updateCityName(JSON.parse(getClickTarget().dataset.obj), getClickTarget().id.slice(0,13));
    } else if (clickNodeName == "INPUT") {
        if(getClickTarget().type == "#startLocation") {
            if(keypressed(ev) === "Enter")getPossibleCities();
        }

        if(getClickTarget().type == "date") {
            // console.log("Yes, we're in teh date clause");
            showDateInput();//automatically shows the calendar on the date input)
            }
        }
    }

//INFO Checks where the user input is currently focussed and hides the GeoNames list of suggested cities
function cityClickChecker(inputFieldToCheck) {
    if (getClickTarget().id != undefined && getClickTarget().id != null && getClickTarget().id == "startLocation" || getClickTarget().id == "finalLocation") {
        return true;
    } else {
        hideSuggestedCities();
        return false;
    }
}

    //INFO adds todays date for departure date input field
    function setupDateInput() {
        const now = new Date().toISOString().slice(0,10);
        document.getElementById("dateDep").setAttribute("value", now);
        document.getElementById("dateRet").setAttribute("value", now);
        // console.log(now);
    }
function checkKeypress (ev) {
    console.log("checkKeypress event passed to it is:",ev);
    eventDeleg();    
    // let delay; 
    const inputLocation = getClickTarget();
    
    // console.log("in checkkeypress value of keypress is", keypressed());
    console.log("checkkeypress inputLocation", inputLocation);

    // console.log("checkkeypress getClickTarget().id.slice(0,13)",getClickTarget().id.slice(0,13));
        
        //TODO 24-3-21 FIX THIS it adds an event listenter to every object/item cliecked on screen
        // inputLocation.addEventListener('keypress', function(event) {
            // function checkKey(event) {
            // if (event.key === "Enter" && (startLocation.value.length >= 3 || finalLocation.value.length >=3)) {
                console.log("keypressed(ev) value", keypressed(ev));
                console.log("inputLocation.value.length", inputLocation.value.length);
                // if(keypressed(ev)) getPossibleCities();
            //     if ( keypressed(ev) && (inputLocation.value.length >= 3)) {
            //     console.log("in checkkeypress value of keypress is", keypressed(ev));
            //     // clearTimeout(delay);    
            //     // delay = setTimeout( () => {
            //     //     console.log("checkKeyPress ok running getPossibleCities()->" )
            //     //     console.log("checkkeypress inputlocattion.value", inputLocation.value);
                    
            //     //     // cityClickChecker();
            //     //     // if(cityClickChecker() !=)
            //     // }, 500);
            //     console.log("checkKeyPress ok running getPossibleCities()->" )
            //     getPossibleCities();
            // } 
            // else if (inputLocation.value.length < 3 && inputLocation.value.length != 1) {       
            //     document.getElementById("tooltipFL").setAttribute("style", "position: absolute; display: block;");
            // }
        // };
        // checkKey(event);
    }
function clickHandler(event) {
    event.preventDefault();
    const ev = event;

    //create search city list closure
    function isSuggestedCitiesListViewable() {

    }

    function checkClickedCity() {
        if (getClickTarget().nodeName == 'li') {
            console.log("The item with the value ", getClickTarget().value)   
        }
    }
    //INFO checks current input state and 
    // function checkKeypress(event)
        console.log("in checkkeypress value of formhandler is", formHandler(event));

    function checkLocation () {

    }
        

        if (getClickTarget().id != undefined && getClickTarget().id != null && getClickTarget().id != "startLocation" || getClickTarget().id != "finalLocation" ) {
        // if (getClickTarget().id)
            hideSuggestedCities("startLocation");
            hideSuggestedCities("finalLocation");
        
        }
        
        let repeatRun;
        
        
        // console.log("inside Main, startlocation")
        // const startLocation = document.getElementById("startLocation");


    function addKeypress () {

        const startLocation = document.getElementById("startLocation");
        const finalLocation = document.getElementById("finalLocation");
        startLocation.addEventListener('keypress', checkKeypress);
        finalLocation.addEventListener('keypress', checkKeypress);
    }


    function main (event) {
        addSearchButton();
        // addKeypress();
        //one time setup of web app
        function setup () {
            setupDateInput();
            createPopups();
            
            // hidePopups();
            

        }

        function repeat(event) {
            console.log("inside repeat");
            checkKeypress(event); 
            cityClickChecker();
            // eventDeleg();
            // if(startLocation.value.length >=3) getPossibleCities();
            // checkCityInputIsActive();//TODO: 9-3-21 Send this userActiveElement directly to checkCityInputIsActive.
        }   

    // repeatRun = repeat;
        
    setup();
    // repeatRun();
    
    }

// const startLocation = document.getElementById("startLocation");
//     const finalLocation = document.getElementById("finalLocation");
//     startLocation.addEventListener('keypress', checkKeypress);
//     finalLocation.addEventListener('keypress', checkKeypress);
// checkKeypress();
main();

}


//TODO HIDE SUBMIT BUTTON UNTIL ALL FIELDS ARE COMPLETED
//TODO HIDE INPUT ELEMENTS UNTIL EACH IS FILLED OUT.
//TODO SET STARTING LOCATION AS DEFAULT/PROVIDE DROP DOWN OF POSSIBILITIES/SOME OTHER TYPE OF SOLUTION

window.addEventListener("load", (event) => {
    // addKeypress();
    // document.main;
    // document.repeatRun;
})
// document.body.addEventListener('click', clickHandler);
export { clickHandler }
// export { getPossibleCities }