import { axiosPost } from './axiosPost';
const getPixaBay = async (cityName, countryName) => {
    let returnedData = await axiosPost('/getPix', {city: cityName, country: countryName});
    if(returnedData.data.total == 0 ){
        console.log("No City data....getting country image...hang tight!");
        returnedData = await axiosPost('/getPix', {city: countryName, country: countryName});
    }
    const rndInt = Math.floor(Math.random() * returnedData.data.hits.length);
    //TODO: potentially omit any portrait pictures by looking at the height vs width
    // skip to next (to first landscape image)
    // if(returnedData.data.imageHeight > returnedData.data.imageWidth
    return returnedData.data.hits[rndInt].largeImageURL;
}

export { getPixaBay }