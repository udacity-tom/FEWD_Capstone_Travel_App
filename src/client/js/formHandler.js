function formHandler(ev) {
    //INFO: collects form click event. returns event
    // console.log("FormHandler event", ev);
    // event.preventDefault();
    const clickTarget = ev.target;
    // console.log("clickTarget ", clickTarget);
    // console.log("event ", ev);
    const activeElement = document.activeElement;
    // console.log("formhandler, activeelement length")
    const clickNodeName = clickTarget.nodeName;
    const inputId = (clickNodeName == "INPUT" ? clickTarget.id : undefined);
    // console.log("clickNodeName ", clickNodeName);
    if (clickNodeName == "BUTTON") {
        if (clickValue == "submit") {
            Client.checkError();
            Client.addTrip(); //processSubmitData()
        }
        // else if (clickValue == "citySearch") processCitySearch();
        else if (clickValue == "addTrip") addTrip();//button adds a new trip
        else if (clickValue == "deleteTrip") deleteTrip();//button deletes trip from store
        
    } else if (clickNodeName == "LI") {
        // console.log("formhandler li clicked updateUI will run");
        // const inputId = (clickNodeName == "INPUT" ? clickTarget.id : undefined);
        Client.updateUI(JSON.parse(clickTarget.dataset.obj), clickTarget.id.slice(0,13));
        console.log("formhandler after updating UI, going to hide the li's", inputId);
        // hideSuggestedCities(inputId);
        hideSuggestedCities("startLocation");
        hideSuggestedCities("finalLocation");
    } else if (activeElement.value.length >= 3 && activeElement.id != undefined && activeElement.id != null && activeElement.id == "startLocation" || activeElement.id == "finalLocation") {
        Client.getGeonames(document.activeElement);
        
        return true;
    } else {
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
    return ev;
}


function hideSuggestedCities(inputFieldToCheck) {
    console.log("formHandler function hideSuggestedCities()", inputFieldToCheck);
    const idToHide = inputFieldToCheck+'-searchList';
    document.getElementById(idToHide).setAttribute('style', 'display: none;');
}

document.body.addEventListener('click', formHandler);

export { formHandler }