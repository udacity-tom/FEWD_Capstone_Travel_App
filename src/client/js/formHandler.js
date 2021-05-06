function formHandler(event) {
    //INFO: collects form click event. returns event
    //TODO: change this into a switch/case function? 
    const clickTarget = event.target;
    const activeElement = document.activeElement;
    const clickNodeName = clickTarget.nodeName;
    if (clickNodeName == "BUTTON") {
        if (clickTarget.value == "submit" && Client.checkError(Client.getCurrentTrip()) == true) {
            console.log("Submit button pressed, ", activeElement.value);
            Client.addTrip(Client.getCurrentTrip());
            Client.clearUI();
            Client.sortAllTrips();
            Client.createAllTripFrag();
            Client.openAllTrips();
            // Client.clearCurrentTrip();
        }
        else if (activeElement.value == "addTrip") Client.addTrip();//button adds a new trip
        else if (activeElement.value.slice(0,10) == "deleteTrip") {
            console.log("Value of slice(11)", activeElement.value.slice(11));
            Client.deleteTrip(activeElement.value.slice(11));//button deletes trip from store
            Client.createAllTripFrag();
            Client.openAllTrips();
        }
    } else if(clickTarget.parentNode.id != "tripsPlannedUL") {
        console.log("Line 25 formhandler.js, clickTarget id, element parent ", clickTarget.id, clickTarget.parentNode, clickTarget.parentNode.id);
    
    
    
    
    } else if (clickNodeName == "LI" && clickTarget.parentNode.id != "tripsPlannedUL") {
        // console.log("Line 25 formhandler.js, clickTarget id, element parent ", clickTarget.id, clickTarget.parentNode, clickTarget.parentNode.id);
        Client.updateUI(JSON.parse(clickTarget.dataset.obj), clickTarget.id.slice(0,13));
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
        //Put update current object here? Client.currentTripObject(geoObj);//update current trip object 
        //handles 'click' search of city name on geonames
    } else if ( activeElement.value != undefined && activeElement.value != null && (activeElement.id == "startLocation" || activeElement.id == "finalLocation")) {
        console.log("formHandler.js current activeElement is", activeElement.id, "and it has a length of ", activeElement.value.length);
        if (activeElement.value.length >= 3) { 
            Client.getGeonames(document.activeElement)};        
        return true;
    } else if(activeElement.id == "dateDep" || activeElement.id == "dateRet") { 
        Client.onDateChange(activeElement.id);
            // if ()
    }
    else {
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
        return false;
    }
    return event;
}

function hideSuggestedCities(inputFieldToCheck) {
    // console.log("formHandler function hideSuggestedCities()", inputFieldToCheck);
    const idToHide = inputFieldToCheck+'-searchList';
    document.getElementById(idToHide).setAttribute('style', 'display: none;');
}

document.body.addEventListener('click', formHandler);

export { formHandler }