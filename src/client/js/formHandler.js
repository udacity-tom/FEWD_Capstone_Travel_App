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
        // console.log("clicknodename", clickNodeName);
        // console.log("clickNodeName.value", clickNodeName.value);
        // console.log("activeElement", activeElement);
        // console.log("event.Target", event.target);
        if (clickTarget.value == "submit") {
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
        //handles 'click' search of city name on geonames
    } else if (activeElement.value.length >= 3 && activeElement.id != undefined && activeElement.id != null && activeElement.id == "startLocation" || activeElement.id == "finalLocation") {
        console.log("current length of activeElement", activeElement.value.length);
        Client.getGeonames(document.activeElement);
        
        return true;
    } else if(activeElement.id == "dateDep" || activeElement.id == "dateRet") {
            const dateInputID = activeElement.id;
            const dateInput = document.getElementById(activeElement.id);
            // dateRet = document.getElementById("dateRet");
            if (dateInput.value != "") {
                dateInput.classList.remove("inputIncomplete");
                dateInput.classList.add("inputComplete");

                Client.currentTripObject({dateInputID: dateInput.value})
                }
            
            console.log("Date is active!!");
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
    return ev;
}


function hideSuggestedCities(inputFieldToCheck) {
    console.log("formHandler function hideSuggestedCities()", inputFieldToCheck);
    const idToHide = inputFieldToCheck+'-searchList';
    document.getElementById(idToHide).setAttribute('style', 'display: none;');
}

document.body.addEventListener('click', formHandler);

export { formHandler }