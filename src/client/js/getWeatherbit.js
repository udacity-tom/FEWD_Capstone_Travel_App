// Get weatherdata infos
const getWeatherbit = async (object, inputFieldToCheck) => {
    let forecastObj = await getWeatherBitForecast(object);
    console.log("getWeatherbit() Wbit 16 Day ", forecastObj );
        return forecastObj;        
    }

const getWeatherBitForecast = async (object, inputFieldToCheck) => {
    let returnedData = await Client.axiosPost('/getWbit', {longtitude: object.lng, lattitude: object.lat, cityName: object.name, countryCode: object.countryCode, dateDep: object.dateDep});
        return returnedData;
    // if(inputFieldToCheck == "startLocation"){
    //     let returnedData = await Client.axiosPost('/getWbit', {longtitude: object.lng, lattitude: object.lat, cityName: object.name, countryCode: object.countryCode, dateDep: object.dateDep});
    //     return returnedData;
    // } else {
    //     let returnedData = await Client.axiosPost('/getWbit', {longtitude: object.finalLocationGeoObj.lng, lattitude: object.finalLocationGeoObj.lat, cityName: object.finalLocationGeoObj.name, countryCode: object.finalLocationGeoObj.countryCode, dateDep: object.dateRet});
    //     return returnedData;
    // }
    
}

export { getWeatherbit }


// if(inputFieldToCheck == "startLocation"){
//     date = "dateDep";
// }
// date = "dateRet";
// let returnedData = await Client.axiosPost('/getWbit', {longtitude: object[inputFieldToCheck+"GeoObj"+".lng"], lattitude: object[inputFieldToCheck+"GeoObj"+".lat"], cityName: object[inputFieldToCheck+"GeoObj"+".name"], countryCode: object[inputFieldToCheck+"GeoObj"+".countryCode"], dateDep: object[date]});
// return returnedData;
// }
