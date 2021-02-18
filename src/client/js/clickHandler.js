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
    const loadingIcon = document.getElementById("loading");
    // import loadingGif
    // const keybEvent = document.querySelector("input");

    // if (clickTarget.nodeName == "BUTTON" && clickTarget.value == "submit") {
    //     console.log("Yes, I'm the submit button, button value is:", clickTarget.value);
        console.log("ClickHandler.js: start, finish location and date: ", startLocation.value, finalLocation.value, date.value, startCountry.value, finalCountry.value);
    // }

    function checkDateSupported() {
        let element = document.createElement('input');
        try {
            element.type = "date";
        } catch(element) {}
        return element.type == "date";
    }

    function checkCityInputIsActive () {
            if(userActiveElement == "citySearch") {
            // TODO: 26.1.21 add event monitor to check the citysearch input is active and that there are 
            // some characters within there, once true and there are three characters, search at geonames
            console.log("Yes, citysearch is actively focussed!");
            return true;
        } else {
            console.log("No, citysearch focus is lost!");
            return false;
        }
        // TODO: 26-1-21 Checks user interaction and input for city citySearch. 
        // Check the current input is active and wait for keypress, then send a request
        // to geonames to get suggestion when 3 letters long
    }
    checkCityInputIsActive();

    // function processCitySearch() {
    //     if (citySearch != ''){
    //         console.log("in processCitySearch()");
    //         processCitySearch();
    //     }
    // }

    function checkInput() {
        // console.log("In checkInput() function");
        if((startLocation.value == "" || finalLocation.value == "" || date.value == "") ) {
            // Client.errorHandling(errData);
            return false;
        } else {
            return true;
        }
        // TODO: 26-1-21 this checks all inputs are correct, then returns permission (true/false) to process server request
        //TODO: 26-1-21 finish this request, then setup GUI update with list of selectable city names 
    }

    //TODO: 15-2-21 Create function onCitySearchChange() such that it requests city search data once three
    //characters have been typed. 
    function onCitySearchChange (){
        if(checkCityInputIsActive()){
            // processCitySearch();
            // console.log("function onCitySearchChange(): citySearch is active");
            // console.log("function onCitySearchChange(): input length is "+citySearch.value.length);
            if (citySearch.value.length >= 3){
                console.log("function onCtiySearchChange, yes citySearch.value.length is greater than 3");
                processCitySearch();
            } else if (citySearch.value.length < 3) {
                alert("Type at least three characters.");
            }
        // } else {
        //     console.log("function onCitySearch(): citySearch is NOT Active")
        }
    }
    
    const processCitySearch = async () => {
        // document.getElementById("errors").value = "";
        Client.clearError();
        // console.log("in processCitySearch");
        const errData = {
            code: "998",
            msg: "Check all inputs are correctly entered and filled out. "
        };
        // console.log("function processCitySearch(), checkCityInputIsActive(): "+checkCityInputIsActive());
        // if(checkCityInputIsActive()){
            if(checkCityInputIsActive()){
                console.log("submitting to endpoint /cityname");
                console.log("function processCitySearch, citySearch.innerHTML =  "+citySearch.innerHTML);
                // citySearch.value = citySearch.value + " Loading...";
                const newLoad = document.createDocumentFragment();
                const newImage = document.createElement('img');
                newImage.src = "./img/loading.gif";
                newImage.setAttribute('style', 'width: 50px; height:50px;');
                // console.log(newImage);
                // newImage.src = Client.loadingGif;
                newLoad.appendChild(newImage);
                loadingIcon.appendChild(newLoad);
                // loadingIcon.value = 
                let returnedData =  await Client.axiosPost('/cityName', {startLocation: citySearch.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
                console.log("Data from server request", returnedData);
                while(loadingIcon.firstChild) {
                    loadingIcon.removeChild(loadingIcon.firstChild)
                }
                
                
                // loadingIcon.removeChild(loadingIcon.firstChild);
                const searchResponse = document.createDocumentFragment();
                const searchList = document.getElementById('searchList');
                for (let i = 0; i < returnedData.data.geonames.length; i++) {
                    const newElement = document.createElement('option');
                    const listElement = document.createElement('li');
                    // const newButton = document.createElement('button');
                    // newElement.value = i;
                    // newElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";
                    
                    listElement.value = i;
                    listElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";
                    listElement.className = "searchList";
                    
                    // newElement.innerHTML = newButton;
                    // newElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";

                    // listItem.newButton;
                    // searchResponse.appendChild(newElement);
                    searchResponse.appendChild(listElement);
                }
                // while(geoNamesCitySearch.firstChild){
                //     geoNamesCitySearch.removeChild(geoNamesCitySearch.firstChild);
                //     }
                while(searchList.firstChild){
                    searchList.removeChild(searchList.firstChild);
                    }
                    searchList.appendChild(searchResponse);
                    searchList.setAttribute('style', 'position: absolute; display: block; background-color: white; outline: 1px;');
                    
                
                    // geoNamesCitySearch.appendChild(searchResponse);
                
                // geoNamesCitySearch.focus();
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
        //     // 21-01-19 DOING: re-write function to access get city endpoint working on geonames
        //     let returnedData =  await Client.axiosPost('/cityName', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        //     console.log("Data from server request", returnedData);
        //     //21-01-19 Weatherbit function returns 16 Day weather working. 
        //     //21-01-19 TODO: next step is to process and publish data on Homepage
        //     // let returnedData =  await Client.axiosPost('/process', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        //     // console.log("Data from server request", returnedData);
    }


    const processSubmitData = async () => {
        // document.getElementById("errors").value = "";
        Client.clearError();
        console.log("in processsubmitData");
        const errData = {
            code: "998",
            msg: "Check all inputs are correctly entered and filled out. "
        }
        // if(checkCityInputIsActive()){
            /*if(true){
                console.log("submitting to endpoint /cityname");
                let returnedData =  await Client.axiosPost('/cityName', {startLocation: citySearch.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
                console.log("Data from server request", returnedData);
                const searchResponse = document.createDocumentFragment();
                // const newElement = document.createElement('option');
                // geoNamesCitySearch.appendChild(newElement);
                // console.log("geonames array has",returnedData.data.geonames.length);
                for (let i = 0; i < returnedData.data.geonames.length; i++) {
                    const newElement = document.createElement('option');
                    const newButton = document.createElement('button');
                    newElement.value = i;
                    newElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";
                    const listItem = document.createElement('li');
                    // listItem.newButton;
                    searchResponse.appendChild(newElement);
                }
                while(geoNamesCitySearch.firstChild){
                    geoNamesCitySearch.removeChild(geoNamesCitySearch.firstChild);
                    }

                geoNamesCitySearch.appendChild(searchResponse);
                // geoNamesCitySearch.focus();
                // console.log(returnedData.data.geonames[0].countryCode)
            }*/
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
        //     // 21-01-19 DOING: re-write function to access get city endpoint working on geonames
        //     let returnedData =  await Client.axiosPost('/cityName', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        //     console.log("Data from server request", returnedData);
        //     //21-01-19 Weatherbit function returns 16 Day weather working. 
        //     //21-01-19 TODO: next step is to process and publish data on Homepage
        //     // let returnedData =  await Client.axiosPost('/process', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        //     // console.log("Data from server request", returnedData);
    }
    function showDateInput() {

    }
    onCitySearchChange();
    if (clickTarget.nodeName == "BUTTON") {
        if (clickTarget.value == "submit") processSubmitData();
        else if (clickTarget.value == "citySearch") processCitySearch();
        else if (clickTarget.value == "addTrip") addTrip();
        else if (clickTarget.value == "deleteTrip") deleteTrip();
        else if (clickTarget.value == "INPUT" && clickTarget.type == "date") showDateInput()
    }
}


document.body.addEventListener('click', clickHandler);

export { clickHandler }