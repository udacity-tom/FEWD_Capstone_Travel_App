// Get geonames infos
const getGeonames = async (activeElement) => {
    let suggestedCities = {
        config: {},
        data: {},
        headers: {}
    };
    addLoadingGraphic(activeElement);
    suggestedCities = await getGeoNamesCitySuggestions(activeElement.value);
    showSuggestedCities(suggestedCities, activeElement.id);
}
//Uses axiosPost to get geonames endpoint on server
const getGeoNamesCitySuggestions = async (cityName) => {
    let returnedData = await Client.axiosPost('/getCityName', {location: cityName});
    if(returnedData.data.geonames.length == 0){
        returnedData = {
            data:
            { geonames:
            [
                {
                name: "No data",
                countryCode: " Please search again.",
                toponymName: "The search term was not recognised",
                adminName1: " Please try another seach term Tom"
            }
            ] }
        }
        // console.log( "Returned data is now->", returnedData);
    }
    return returnedData;
}

function showSuggestedCities (returnedData, inputFieldToShowList) {
    const searchResponse = document.createDocumentFragment();
    const searchList = document.getElementById(inputFieldToShowList+"-searchList");
    //creates list items in a fragrment of cities found beginning with user search
    for (let i = 0; i < returnedData.data.geonames.length; i++) {
        const listElement = document.createElement('li');
        listElement.value = i;
        listElement.innerText = returnedData.data.geonames[i].name+", "+returnedData.data.geonames[i].countryCode+" ("+returnedData.data.geonames[i].toponymName+") "+returnedData.data.geonames[i].adminName1+".";
        listElement.className = "searchList";
        listElement.id = inputFieldToShowList+"-"+i;
        listElement.dataset.obj = JSON.stringify(returnedData.data.geonames[i]);//listElement.dataset.id = "The obj";//stringify(returnedData.data.geonames[i]);
        searchResponse.appendChild(listElement);
    }
    //remove list elements of searchlist from previous searches
    while(searchList.firstChild){
        searchList.removeChild(searchList.firstChild);
        }
        removeLoadingGraphic(inputFieldToShowList);
        searchList.appendChild(searchResponse);
        searchList.setAttribute('style', 'max-width: 400px; position: absolute; display: block; background-color: white;font-size: 1.2em;line-height: 120%;z-index: 2;');
}

//Adds loading graphic to user input field whilst we wait for the GeoNames API to respond
function addLoadingGraphic (location) {
    const loadingIcon = document.getElementById(location.id);
    loadingIcon.classList.add("loadingIcon");
}
//removes loading graphic in user input fields once GeoNames API responds and city list is created 
function removeLoadingGraphic (location) {
const loadingIcon = document.getElementById(location);
loadingIcon.classList.remove("loadingIcon")
}

export { getGeonames }