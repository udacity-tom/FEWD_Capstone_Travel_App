import { getCurrentTrip } from './getCurrentTrip';
import { checkError } from './checkError';
import { addTrip } from './addTrip';
import { clearUI } from './clearUI';
import { getAllTripData } from './getAllTripData';
import { createAllTripFrag } from './createAllTripFrag';
import { openAllTrips } from './openAllTrips';
import { closeAllTrips } from './closeAllTrips';
import { clearCurrentTrip } from './clearCurrentTrip';
import { deleteTrip } from './deleteTrip';
import { eraseAllTrips } from './eraseAllTrips';
import { getGeonames } from './getGeonames';
import { updateUI } from './updateUI';
import { currentTripObject } from './currentTripObject';

function formHandler(event) {
    //INFO: collects form click event. 
    //TODO: change this into a switch/case function? 
    //TODO: add C/F temperatures switch
    const clickTarget = event.target;
    const activeElement = document.activeElement;
    const clickNodeName = clickTarget.nodeName;
    if (clickNodeName == "BUTTON") {
        if (clickTarget.value == "submit" && checkError(getCurrentTrip()) == true) {
            if(checkError()){ //activate once everything is working
                addTrip(getCurrentTrip());
                clearUI();
                createAllTripFrag();
                openAllTrips();
                clearCurrentTrip();
            }
        } else if (activeElement.value.slice(0,10) == "deleteTrip") {
            //button, deletes trip from store
            if(deleteTrip(activeElement.value.slice(11))){
                createAllTripFrag();
                openAllTrips();
                //TODO: notify deletion with modal
            } else {
                //TODO: notify non-deletion with modal
            }
        } else if (activeElement.value=="eraseAllData" ){
            eraseAllTrips();
        } else if (activeElement.id=="openTrips" ){
         if(getAllTripData()){
                createAllTripFrag();
         }
            openAllTrips();
        }
    //Note: 6-5-21 thinking about making overlay UL more obvious for each trip so user knows which trip is open. arrow change for open or close/color background, etc
    } else if (clickNodeName == "LI" && clickTarget.parentNode.id != "tripsPlannedUL") {
        updateUI(JSON.parse(clickTarget.dataset.obj), clickTarget.id.slice(0,13));
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
        //This handler interprets the mobile version functionality for city name searching
    } else if ( activeElement.value != undefined && activeElement.value != null && (activeElement.id == "startLocation" || activeElement.id == "finalLocation")) {
        if (activeElement.value.length >= 3) { 
            getGeonames(activeElement)};        
        return true;
    }  else if (activeElement.className =="closebtn"){
            closeAllTrips();
        } else {
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
        return false;
    }
    return event;
}

function hideSuggestedCities(inputFieldToCheck) {
    const idToHide = inputFieldToCheck+'-searchList';
    document.getElementById(idToHide).setAttribute('style', 'display: none;');
}

document.body.addEventListener('click', formHandler);

const dateField = document.getElementById("dateField");
dateField.addEventListener('change', (event) => {
    const dateInput = document.getElementById(event.target.id);
    dateInput.classList.remove("inputIncomplete");
    dateInput.classList.add("inputComplete");
    currentTripObject({[dateInput.id]: dateInput.value});
});

export { formHandler }