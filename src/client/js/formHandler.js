function formHandler(event) {
    //INFO: collects form click event. returns event
    //TODO: change this into a switch/case function? 
    const clickTarget = event.target;
    const activeElement = document.activeElement;
    const clickNodeName = clickTarget.nodeName;
    if (clickNodeName == "BUTTON") {
        if (clickTarget.value == "submit" && Client.checkError(Client.getCurrentTrip()) == true) {
            console.log("Submit button pressed, ", activeElement.value);
            // Client.checkError();
            Client.addTrip(Client.getCurrentTrip());
            Client.clearUI();
            Client.sortAllTrips();
            Client.createAllTripFrag();
            Client.openAllTrips();
            // Client.clearCurrentTrip();
        }
        else if (activeElement.value.slice(0,10) == "deleteTrip") {
            // console.log("Value of slice(11)", activeElement.value.slice(11));
            Client.deleteTrip(activeElement.value.slice(11));//button deletes trip from store
            Client.createAllTripFrag();
            Client.openAllTrips();
        }
    // } else if(clickTarget.parentNode.id != "tripsPlannedUL") {
    //     console.log("Line 25 formhandler.js, clickTarget id, element parent ", clickTarget.id, clickTarget.parentNode, clickTarget.parentNode.id);
    //Note: 6-5-21 thinking about making overlay UL more obvious which is open. JS arrow 
    } else if (clickNodeName == "LI" && clickTarget.parentNode.id != "tripsPlannedUL") {
        Client.updateUI(JSON.parse(clickTarget.dataset.obj), clickTarget.id.slice(0,13));
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
    } else if ( activeElement.value != undefined && activeElement.value != null && (activeElement.id == "startLocation" || activeElement.id == "finalLocation")) {
        // console.log("formHandler.js current activeElement is", activeElement.id, "and it has a length of ", activeElement.value.length);
        if (activeElement.value.length >= 3) { 
            Client.getGeonames(document.activeElement)};        
        return true;
    } else if(activeElement.id == "dateDep" || activeElement.id == "dateRet") { 
     //TODO: 6.5.21 add onChange event listener for changes on date inputs and run onDateChange
        Client.onDateChange(activeElement.id);
    }
    else {
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

export { formHandler }