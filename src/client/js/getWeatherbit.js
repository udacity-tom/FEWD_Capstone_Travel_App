import { axiosPost } from './axiosPost';
// Get weatherdata infos
const getWeatherbit = async (object, inputFieldToCheck) => {
    let forecastObj = await getWeatherBitForecast(object);
        return forecastObj;        
    }

const getWeatherBitForecast = async (object, inputFieldToCheck) => {
    let returnedData = await axiosPost('/getWbit', {longtitude: object.lng, lattitude: object.lat, cityName: object.name, countryCode: object.countryCode, dateDep: object.dateDep});
        return returnedData;
}

export { getWeatherbit }