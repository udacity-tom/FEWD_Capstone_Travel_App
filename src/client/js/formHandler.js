function formHandler(event) {
    //INFO: collects form click event. returns event
    //TODO: change this into a switch/case function? 
    const clickTarget = event.target;
    const activeElement = document.activeElement;
    const clickNodeName = clickTarget.nodeName;
    if (clickNodeName == "BUTTON") {
        if (clickTarget.value == "submit" && Client.checkError(Client.getCurrentTrip()) == true) {
            console.log("Submit button pressed (activeElement.value), ", activeElement.value);
            if(Client.checkError()){ //activate once everything is working
                Client.addTrip(Client.getCurrentTrip());
                Client.clearUI();
                Client.sortAllTrips();
                Client.createAllTripFrag();
                Client.openAllTrips();
                Client.clearCurrentTrip(); //activate once everything is working
            }
        }
        else if (activeElement.value.slice(0,10) == "deleteTrip") {
            // console.log("Value of slice(11)", activeElement.value.slice(11));
            Client.deleteTrip(activeElement.value.slice(11));//button deletes trip from store
            Client.createAllTripFrag();
            Client.openAllTrips();
        }
    //Note: 6-5-21 thinking about making overlay UL more obvious for each trip so user knows which trip is open. arrow change for open or close/color background, etc
    } else if (clickNodeName == "LI" && clickTarget.parentNode.id != "tripsPlannedUL") {
        Client.updateUI(JSON.parse(clickTarget.dataset.obj), clickTarget.id.slice(0,13));
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
    } else if ( activeElement.value != undefined && activeElement.value != null && (activeElement.id == "startLocation" || activeElement.id == "finalLocation")) {
        if (activeElement.value.length >= 3) { 
            Client.getGeonames(activeElement)};        
        return true;
    } else if(activeElement.id == "dateDep" || activeElement.id == "dateRet") { 
        Client.onDateChange(activeElement);
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

export { formHandler }