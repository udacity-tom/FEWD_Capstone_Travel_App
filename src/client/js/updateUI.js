function updateUI(geonamesCityObject, inputFieldToCheck) {
    console.log("updateUI says...", geonamesCityObject, inputFieldToCheck);
    // location.value
    Client.getPixaBay(geonamesCityObject.name, geonamesCityObject.countryCode)
    .then( function(data) {
        if(data.total == 0 ){
            console.log("Data was not returned")
            Client.getPixaBay(geonamesCityObject.countryCode, geonamesCityObject.countryCode)
            .then( function(data){
                return data;
            })
        }
        console.log("Data was returned", data);
            return data;
        
    })
    .then( function(data) {
        setBackgroundImage(data, inputFieldToCheck);

    });
    const inputLocation = document.getElementById(inputFieldToCheck);
    const countryLocation = inputFieldToCheck+"Country";
    const inputCountry = document.getElementById(countryLocation);
    inputLocation.value = geonamesCityObject.name;
    inputCountry.value = geonamesCityObject.countryName+", "+geonamesCityObject.countryCode;
    // hideSuggestedCities(inputFieldToCheck);
    
        
    //Save city data to object.
    function setBackgroundImage(url, inputFieldToCheck) {
        console.log("setBackgrounImage Line 158", url);
        // const imageBackground = url;
        const inputForm = document.getElementById('background');
        console.log("setBackgroundImage ", inputForm);
        // inputForm.setAttribute("style","background: url("+url+")"+ (inputFieldToCheck =='startLocation'? "left ": "right ")+" center no-repeat;");
        inputForm.setAttribute("style","background: url("+url+")"+ "center center / cover  no-repeat;overflow: hidden;");
    }// Get pixabay infos



}
    
export { updateUI }