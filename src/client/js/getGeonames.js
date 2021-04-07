// Get geonames infos
const getGeonames = async (activeElement) => {
    let suggestedCities = {
        config: {},
        data: {},
        headers: {}
    };
    // console.log("idOfCurrentElement is", idOfCurrentElement);
    // let searchLocation = idOfCurrentElement;
    // console.log("searchLocation is", searchLocation);
    let searchRef="tooltipSL";
    if(activeElement.id != "startLocation") {
        searchRef = "tooltipFL";
    } 
    // searchLocation = 
    addLoadingGraphic(activeElement);
    suggestedCities = await getGeoNamesCitySuggestions(activeElement.value);
    console.log("getGeonames suggestedCities", suggestedCities);
    showSuggestedCities(suggestedCities, activeElement.id);


}

const getGeoNamesCitySuggestions = async (cityName) => {
    let returnedData = await Client.axiosPost('/cityName', {location: cityName});
    console.log("getGeoNamesCitySuggestions in getGeoNames data from Server revieved", returnedData);
    return returnedData;
}

function showSuggestedCities (returnedData, inputFieldToShowList) {
    console.log("in showsuggestedcities", inputFieldToShowList, returnedData);
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
        searchList.setAttribute('style', 'width: 350px; position: absolute; display: block; background-color: white; outline: 1px;');
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


// function getGeonames() {
// console.log("getGeonames called");


// }

export {getGeonames}