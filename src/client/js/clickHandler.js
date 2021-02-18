function clickHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    // console.log("current event.target", clickTarget.nodeName, clickTarget);
    const startLocation = document.getElementById("startLocation");
    const finalLocation = document.getElementById("finalLocation");
    const date = document.getElementById("date");
    const startCountry = document.getElementById("startCountry-select");
    const finalCountry = document.getElementById("finalCountry-select");
    const citySearch = document.getElementById("citySearch");
    const userActiveElement = document.activeElement.id;
    // const keybEvent = document.querySelector("input");

    // if (clickTarget.nodeName == "BUTTON" && clickTarget.value == "submit") {
    //     console.log("Yes, I'm the submit button, button value is:", clickTarget.value);
        console.log("ClickHandler.js: start, finish location and date: ", startLocation.value, finalLocation.value, date.value, startCountry.value, finalCountry.value);
    // }

    function checkCityInputIsActive () {

        // console.log("keybEvent is", keybEvent);
        // console.log("keybEvent.onfocus ", keybEvent.onfocus);
        //         console.log("keybEvent.id ", keybEvent.id);
                // console.log("document.activeElement",document.activeElement);
        // if(keybEvent.id == "citySearch") {
            if(userActiveElement == "citySearch") {
                
            // TODO: 26.1.21 add event monitor to check the citysearch input is active and that there are 
            // some characters within there, once true and there are three characters, search at geonames
            console.log("Yes, citysearch is actively focussed!");

        } else {
            console.log("No, citysearch focus is lost!");
        }
        // TODO: 26-1-21 Checks user interaction and input for city citySearch. 
        // Check the current input is active and wait for keypress, then send a request
        // to geonames to get suggestion when 3 letters long
    }
    checkCityInputIsActive();

    function processCitySearch() {
        console.log("in processCitySearch()");

    }

    function checkInput() {
        // console.log("In checkInput() function");
        if((startLocation.value == "" || finalLocation.value == "" || date.value == "") ) {
            // console.log("Input Error: Data missing or incorrect!");
            // Client.errorHandling(errData);
            return false;
        } else {
            return true;
        }
        // TODO: 26-1-21 this checks all inputs are correct, then returns permission (true/false) to process server request
        //TODO: 26-1-21 finish this request, then setup GUI update with list of selectable city names 
    }

    const processSubmitData = async () => {
        // document.getElementById("errors").value = "";

        Client.clearError();
        console.log("in processsubmitData");
        const errData = {
            code: "998",
            msg: "Check all inputs are correctly entered and filled out. "
        }
        // console.log("Data from server request", returnedData);
        // if(checkCityInputIsActive()){
            if(true){
                console.log("submitting to endpoint /cityname");
                let returnedData =  await Client.axiosPost('/cityName', {startLocation: citySearch.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
                console.log("Data from server request", returnedData);
                const searchResponse = document.createDocumentFragment();
                // const newElement = document.createElement('option');
                // geoNamesCitySearch.appendChild(newElement);
                console.log("geonames array has",returnedData.data.geonames.length);
                for (let i = 0; i < returnedData.data.geonames.length; i++) {
                    // console.log("i is ",i);
                    console.log(returnedData.data.geonames[i].name,",",returnedData.data.geonames[i].countryCode);
                    // const optionBegin = "<option value=""
                    const newElement = document.createElement('option');
                    newElement.value = i;
                    newElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";
                    searchResponse.appendChild(newElement);
                }
                while(geoNamesCitySearch.firstChild){
                    geoNamesCitySearch.removeChild(geoNamesCitySearch.firstChild);
                    }
                geoNamesCitySearch.appendChild(searchResponse);
                // console.log(returnedData.data.geonames[0].countryCode)
            }
        if( checkInput() ) {
            
            // let returnedData =  await Client.axiosPost('/cityName', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
            // console.log("Data from server request", returnedData);
            let returnedData =  await Client.axiosPost('/process', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
            console.log("Data from server request", returnedData);
        } else {
            Client.errorHandling(errData);
        }
        console.log("checkInput() =",checkInput());

        // if((startLocation.value == "" | finalLocation.value == "" | date.value == "") ) {
        //     console.log("Input Error: Data missing or incorrect!");
        //     Client.errorHandling(errData);
        // } else {
        //     // 21-01-19 DOING: re-write cuntion to access get city endpoint working on geonames
        //     let returnedData =  await Client.axiosPost('/cityName', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        //     console.log("Data from server request", returnedData);
        //     //21-01-19 Weatherbit function returns 16 Day weather working. 
        //     //21-01-19 TODO: next step is to process and publish data on Homepage
        //     // let returnedData =  await Client.axiosPost('/process', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        //     // console.log("Data from server request", returnedData);


        //     // console.log("in the else condition of error checking.")
        //     // document.getElementById("errors").value = "";
        // }
        
    }
    if (clickTarget.nodeName == "BUTTON") {
        if (clickTarget.value == "submit") processSubmitData();
        else if (clickTarget.value == "citySearch") processCitySearch();
        else if (clickTarget.value == "addTrip") addTrip();
        else if (clickTarget.value == "deleteTrip") deleteTrip();
    }
}


document.body.addEventListener('click', clickHandler);

export { clickHandler }