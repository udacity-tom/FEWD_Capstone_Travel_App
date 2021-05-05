const updateUI = async (geonamesCityObject, inputFieldToCheck) => {
// function updateUI(geonamesCityObject, inputFieldToCheck) {
    // console.log("updateUI says...", geonamesCityObject, inputFieldToCheck);
    const geoObj = {[inputFieldToCheck+"GeoObj"]: geonamesCityObject};
    Client.currentTripObject(geoObj);//update current trip object 
    Client.getPixaBay(geonamesCityObject.name, geonamesCityObject.countryCode)
    .then( function(data) {
        if(data.total == 0 ){
            // console.log("Data was not returned");
            // Client.getPixaBay(geonamesCityObject.countryCode, geonamesCityObject.countryCode)
            // .then( function(data){
            //     return data;
            // })
        }
        // console.log("Data was returned", data);
            return data;
        
    })
    .then( function(data) {
        const tripObj = {[inputFieldToCheck+"PixaURL"]: data};
        Client.currentTripObject(tripObj);
        setBackgroundImage(data, inputFieldToCheck);
        const property = inputFieldToCheck+"PixaURL";
        // console.log("updateUI property ", property);
    });

    // const wbitStuff = Client.getWeatherbit(Client.getCurrentTrip())
    Client.getWeatherbit(geonamesCityObject,inputFieldToCheck)
    .then( function(data) {
        if(data.total == 0 ){
            // console.log("WBit Data was not returned");
            // Client.getPixaBay(geonamesCityObject.countryCode, geonamesCityObject.countryCode)
            // .then( function(data){
            //     return data;
            // })
        }
        // console.log("WBIT Data was returned");
            return data;
    })
    .then( function(data){
        // console.log("inputfieldfor WBit", inputFieldToCheck);
    const wbitObj = {[inputFieldToCheck+"WbitForecastObj"]: data};
    // console.log("updateUI wbit data", data);
    Client.currentTripObject(wbitObj);
    })
    // await Client.getWeatherbit(Client.getCurrentTrip())
    // .then( function(data) {
    //     if(status != 200){
    //         alert("API error, no data recieved. Please try later!")
    //     }
    //     console.log("weatherbit data recieved,",data);
    //     return data;
    // })
    // .then ( function(data){
    //     const wbitObj = {[inputFieldToCheck+"WbitForecastObj"]: data};
    //     Client.currentTripObject(wbitObj);
    // })
    // .catch( (error) => {
    //     alert("Weatherbit API error-try again later");
    // });



    //TODo: tidy/eliminate/DRY stuff below
    const inputLocation = document.getElementById(inputFieldToCheck);
    const countryLocation = inputFieldToCheck+"Country";
    const inputCountry = document.getElementById(countryLocation);
    inputLocation.value = geonamesCityObject.name;
    inputCountry.value = geonamesCityObject.countryName+", "+geonamesCityObject.countryCode;
    inputLocation.classList.remove("inputIncomplete");
    inputCountry.classList.remove("inputIncomplete");
    inputLocation.classList.add("inputComplete");
    inputCountry.classList.add("inputComplete");
    // hideSuggestedCities(inputFieldToCheck);
    
    //TODO Add dissolve effect to make it more 'agreeable' when image changed.
    function setBackgroundImage(url, inputFieldToCheck) {
        const inputForm = document.getElementById('background');
        // inputForm.setAttribute("style","background: url("+url+")"+ (inputFieldToCheck =='startLocation'? "left ": "right ")+" center no-repeat;");
        // inputFieldToCheck.classList.add("fadeBackground");
        inputForm.setAttribute("style","background: url("+url+")"+ " center center / cover  no-repeat;overflow: hidden; transition: 1s");
    }




}

    
export { updateUI }