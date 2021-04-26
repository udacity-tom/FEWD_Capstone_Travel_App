// Get geonames infos
const getGeonames = async (activeElement) => {
    let suggestedCities = {
        config: {},
        data: {},
        headers: {}
    };
    
    let searchRef="tooltipSL";
    if(activeElement.id != "startLocation") {
        searchRef = "tooltipFL";
    } 
    addLoadingGraphic(activeElement);
    suggestedCities = await getGeoNamesCitySuggestions(activeElement.value);
    console.log("getGeoNames.j SuggestedCities", suggestedCities);
    showSuggestedCities(suggestedCities, activeElement.id);
}

const getGeoNamesCitySuggestions = async (cityName) => {
    let returnedData = await Client.axiosPost('/getCityName', {location: cityName});
    if(returnedData.data.geonames.length == 0){
        console.log("Yes! returnedData.data.geonames.length does equal zero");
        // let returnedData = new Object();
        returnedData = {
            data:
            { geonames:
            [
                {
                name: "No data",
                countryCode: " Please search again.",
                toponymName: "The search term was not recognised",
                adminName1: ""
            }
            ] }
        }
        console.log( "Returned data is now->", returnedData);
        // returnedData.data.geonames[0].name = "No data.";
        // returnedData.data.geonames[0].countryCode = " Please search again.";
        // returnedData.data.geonames[0].toponymName = " The search term was not recognised.";
        // returnedData.data.geonames[0].adminName1 = "";
        
        // return "No data, please search again."
    }
    //TODO: if returneData.data.geonames.length = 0 set li as 'No data'
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
        // searchList.className = "searchList";
        searchList.setAttribute('style', 'max-width: 400px; position: absolute; display: block;margin-left: -20px; background-color: white;font-size: 1.2em;line-height: 120%;z-index: 2;');
}

function addLoadingGraphic (location) {
    const loadingIcon = document.getElementById(location.id);
    loadingIcon.classList.add("loadingIcon");
}
//removes loading graphic in user input fields when GeoNames API responds and city list is created 
function removeLoadingGraphic (location) {
const loadingIcon = document.getElementById(location);
loadingIcon.classList.remove("loadingIcon")
}


export { getGeonames }