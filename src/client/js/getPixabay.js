const getPixaBay = async (cityName, countryName) => {
    let returnedData = await Client.axiosPost('/getPix', {city: cityName, country: countryName});
    if(returnedData.data.total == 0 ){
        console.log("No City data....getting country image...hang tight!");
        returnedData = await Client.axiosPost('/getPix', {city: countryName, country: countryName});
    }
    const rndInt = Math.floor(Math.random() * returnedData.data.hits.length);
    //TODO: potentially omit any portrait pictures by looking at the height vs width
    // skip to next (to first landscape image)
    // if(returnedData.data.imageHeight > returnedData.data.imageWidth
    // console.log("getpixaimage image link", returnedData.data.hits[rndInt].largeImageURL);
    return returnedData.data.hits[rndInt].largeImageURL;
}

export { getPixaBay }