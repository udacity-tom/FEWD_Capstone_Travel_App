import { currentTripObject } from './currentTripObject';
import { getPixaBay } from './getPixabay';
import { getWeatherbit } from './getWeatherbit';
const updateUI = async (geonamesCityObject, inputFieldToCheck) => {
    currentTripObject({[inputFieldToCheck+"GeoObj"]: geonamesCityObject});//update current trip object 
    getPixaBay(geonamesCityObject.name, geonamesCityObject.countryName)
    .then( function(data) {
        const tripObj = {[inputFieldToCheck+"PixaURL"]: data};
        currentTripObject(tripObj);
        if(inputFieldToCheck == "startLocation" || "finalLocation"){
            modifyInput(geonamesCityObject,inputFieldToCheck);
            setBackgroundImage(data, inputFieldToCheck);
        }
    });

    getWeatherbit(geonamesCityObject,inputFieldToCheck)
    .then( function(data) {
        const wbitObj = {[inputFieldToCheck+"WbitForecastObj"]: data};
        currentTripObject(wbitObj);
    })

    //TODO: tidy/eliminate/DRY code below (//if input(not refresh) do the following,)
    
    //updates input fields showing their values ahve been accepted/will be used.
    
    function modifyInput() {   
        const inputLocation = document.getElementById(inputFieldToCheck);
        // const countryLocation = ;
        const inputCountry = document.getElementById(inputFieldToCheck+"Country");
        inputLocation.value = geonamesCityObject.name;
        inputCountry.value = geonamesCityObject.countryName+", "+geonamesCityObject.countryCode;
        inputLocation.classList.remove("inputIncomplete");
        inputCountry.classList.remove("inputIncomplete");
        inputLocation.classList.add("inputComplete");
        inputCountry.classList.add("inputComplete");   
    }

    function setBackgroundImage(url, inputFieldToCheck) {
        const inputForm = document.getElementById('background');
        inputForm.setAttribute("style","background: url("+url+")"+ " center center / cover ");
    }
}

    
export { updateUI }