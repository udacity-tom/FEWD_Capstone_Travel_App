function clickHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    const startLocation = document.getElementById("startLocation");
    const finalLocation = document.getElementById("finalLocation");
    const date = document.getElementById("date");
    const startCountry = document.getElementById("startCountry-select");
    const finalCountry = document.getElementById("finalCountry-select");
    const citySearch = document.getElementById("citySearch");
    const userActiveElement = document.activeElement.id;
    const loadingIcon = document.getElementById("loading");
    
        console.log("ClickHandler.js: start, finish location and date: ", startLocation.value, finalLocation.value, date.value, startCountry.value, finalCountry.value);
    // }

    function checkDateSupported() {
        let element = document.createElement('input');
        try {
            element.type = "date";
        } catch(element) {}
        return element.type == "date";
    }

    const checkCityInputIsActive  = async () => { 
            if(userActiveElement == "citySearch") {
                if (citySearch.value.length >= 3){
                    // processCitySearch();
                    // Add loading graphic
                    addLoadingGraphic();
                    const suggestedCities = await getGeoNamesCitySuggestions(citySearch.value);
                    console.log("CheckCityInpoutIsActive, retunred Geo data", suggestedCities);
                    // removeLoadingGraphic();
                    showSuggestedCities(suggestedCities);
                    // waitForCityClick();
                } else if (citySearch.value.length < 3 && citySearch.value.length != 1) {
                    alert("Please input at least 3 characters");
                }
            // console.log("From checkCityInputIsActive() Yes, citysearch is actively focussed!");
            // return true;
        // } else if (userActiveElement == "loading") {
            
        } 
        // else {
        //     console.log("From checkCityInputIsActive() No, citysearch focus is lost!");
        //     return false;
        // }
    }

    const getGeoNamesCitySuggestions = async (cityName) => {
        let returnedData =  await Client.axiosPost('/cityName', {startLocation: cityName,finalLocation: finalLocation.value, date: date.value, startCountry: startCountry.value, finalCountry:finalCountry.value });
        console.log("getGeoNamesCitySuggestions, Data from server request", returnedData);
        return returnedData;
    }

    

    function showSuggestedCities (returnedData) {
        const searchResponse = document.createDocumentFragment();
        const searchList = document.getElementById('searchList');
        //creates list items in a fragrment of cities found beginning with user search
        console.log("showSuggestedCities",returnedData);
        for (let i = 0; i < returnedData.data.geonames.length; i++) {
            const newElement = document.createElement('option');
            const listElement = document.createElement('li');                   
            listElement.value = i;
            listElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";
            listElement.className = "searchList";
            searchResponse.appendChild(listElement);
        }  //html fragment is created
        //remove list elements of searchlist from previous searchs
        while(searchList.firstChild){
            searchList.removeChild(searchList.firstChild);
            }
            removeLoadingGraphic();
            searchList.appendChild(searchResponse);
            searchList.setAttribute('style', 'position: absolute; display: block; background-color: white; outline: 1px;');
    }


    function addLoadingGraphic () {
                const newLoad = document.createDocumentFragment();
                const newImage = document.createElement('img');
                newImage.src = "./img/loading.gif";
                newImage.setAttribute('style', 'width: 50px; height:50px;');
                newLoad.appendChild(newImage);
                loadingIcon.appendChild(newLoad);

    }

    function removeLoadingGraphic () {
        while(loadingIcon.firstChild) {
            loadingIcon.removeChild(loadingIcon.firstChild)
        }
    }




    function checkInput() {
        // console.log("In checkInput() function");
        if((startLocation.value == "" || finalLocation.value == "" || date.value == "") ) {
            // Client.errorHandling(errData);
            return false;
        } else {
            return true;
        }
    }

    function updateCitySelection () {

    }


    //TODO: 15-2-21 Create function onCitySearchChange() such that it requests city search data once three
    //characters have been typed. 
    function onCitySearchChange (){
        if(checkCityInputIsActive()){
            if (citySearch.value.length >= 3){
                processCitySearch();
            } else if (citySearch.value.length < 3) {
                alert("Please input at least 3 characters");
            }
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
            if(checkCityInputIsActive()){
                const newLoad = document.createDocumentFragment();
                const newImage = document.createElement('img');
                newImage.src = "./img/loading.gif";
                newImage.setAttribute('style', 'width: 50px; height:50px;');
                newLoad.appendChild(newImage);
                loadingIcon.appendChild(newLoad);
                
                while(loadingIcon.firstChild) {
                    loadingIcon.removeChild(loadingIcon.firstChild)
                }
                const searchResponse = document.createDocumentFragment();
                const searchList = document.getElementById('searchList');
                //creates list items in a fragrment of cities found beginning with user search
                for (let i = 0; i < returnedData.data.geonames.length; i++) {
                    const newElement = document.createElement('option');
                    const listElement = document.createElement('li');                   
                    listElement.value = i;
                    listElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+")";
                    listElement.className = "searchList";
                    searchResponse.appendChild(listElement);
                }  //html fragment is created

                //remove list elements of searchlist from previous searchs
                while(searchList.firstChild){
                    searchList.removeChild(searchList.firstChild);
                    }
                if(checkCityInputIsActive()){
                    searchList.appendChild(searchResponse);
                    searchList.setAttribute('style', 'position: absolute; display: block; background-color: white; outline: 1px;');
                }  else { 

                   searchList.setAttribute('style','position: absolute; display: none; background-color: white; outline: 1px;');

                }
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
    }


    const processSubmitData = async () => {
        // document.getElementById("errors").value = "";
        Client.clearError();
        console.log("in processsubmitData");
        const errData = {
            code: "998",
            msg: "Check all inputs are correctly entered and filled out. "
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

    }
    function showDateInput() {

    }

    function checkClickedCity() {
        if (clickTarget.nodeName == 'li') {
            console.log("The item with the value ", clickTarget.value)
            // const getSelectedCity();
        }
    
    }
    checkCityInputIsActive();
    // onCitySearchChange();
    if (clickTarget.nodeName == "BUTTON") {
        if (clickTarget.value == "submit") processSubmitData();
        else if (clickTarget.value == "citySearch") processCitySearch();
        else if (clickTarget.value == "addTrip") addTrip();
        else if (clickTarget.value == "deleteTrip") deleteTrip();
        else if (clickTarget.value == "INPUT" && clickTarget.type == "date") showDateInput();
        
    // } else if (clickTarget.nodeName == 'li') {
    //     console.log("The item with the value ", clickTarget.value)
    //     updateCitySelection();
    }



}


document.body.addEventListener('click', clickHandler);

export { clickHandler }