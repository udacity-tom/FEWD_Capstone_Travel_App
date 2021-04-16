function formHandler(event) {
    if(Client.getAllTripData()){
//TODO: get all trips, pass to function to add overlay of existing trips & funcitonality.
        
        //display the stored data
    }
    console.log("Line 9 formHandler.js Current allTrips object array is", Client.getAllTripData());

    //INFO: collects form click event. returns event
    // console.log("FormHandler event", ev);
    // event.preventDefault();

//TODO: change this into a switch/case function?    
    const clickTarget = event.target;
    const activeElement = document.activeElement;
    const clickNodeName = clickTarget.nodeName;
    const inputId = (clickNodeName == "INPUT" ? clickTarget.id : undefined);
    if (clickNodeName == "BUTTON") {
        if (clickTarget.value == "submit") {
            console.log("Submit button pressed");
            Client.checkError();
            Client.addTrip(Client.getCurrentTrip()); //processSubmitData()
        }
        // else if (clickValue == "citySearch") processCitySearch();
        else if (activeElement.value == "addTrip") addTrip();//button adds a new trip
        else if (activeElement.value == "deleteTrip") deleteTrip();//button deletes trip from store
    } else if (clickNodeName == "LI") {
        Client.updateUI(JSON.parse(clickTarget.dataset.obj), clickTarget.id.slice(0,13));
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
        //Put update current object here? Client.currentTripObject(geoObj);//update current trip object 
        //handles 'click' search of city name on geonames
    } else if ( activeElement.value != undefined && activeElement.value != null && (activeElement.id == "startLocation" || activeElement.id == "finalLocation")) {
        console.log("Line 51 formHandler.js current activeElement is", activeElement.id, "and it has a length of ", activeElement.value.length);
        if (activeElement.value.length >= 3) { 
            Client.getGeonames(document.activeElement
                )};        
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
    // else if (activeElement == "INPUT" && )
    // else if (clickNodeName == "INPUT") {
    //     if(getClickTarget().type == "#startLocation") {
    //         if(keypressed(ev) === "Enter")getPossibleCities();
    //     }

    //     if(getClickTarget().type == "date") {
    //         // console.log("Yes, we're in teh date clause");
    //         showDateInput();//automatically shows the calendar on the date input)
    //         }
    //     }
    // console.log("In formHandler(), clickTarget",clickTarget);
    return event;
}

function hideSuggestedCities(inputFieldToCheck) {
    // console.log("formHandler function hideSuggestedCities()", inputFieldToCheck);
    const idToHide = inputFieldToCheck+'-searchList';
    document.getElementById(idToHide).setAttribute('style', 'display: none;');
}

document.body.addEventListener('click', formHandler);

export { formHandler }