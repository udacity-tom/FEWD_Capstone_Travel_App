


const getPixaBay = async (cityName, countryName) => {
    let returnedData = await Client.axiosPost('/getPix', {city: cityName, country: countryName});
    if(returnedData.data.total == 0 ){
        console.log("No City data....getting country image...hang tight!");
        returnedData = await Client.axiosPost('/getPix', {city: countryName, country: countryName});
    }
    // TODO: check for portrait image, skip to next (to first landscape image)
    
    const rndInt = Math.floor(Math.random() * returnedData.data.hits.length);

    //TODO: potentially omit any portrait pictures by looking at the height
    if(returnedData.data.imageHeight > returnedData.data.imageWidth)


    console.log("getpixaimage  link", returnedData.data.hits[rndInt].largeImageURL);
    //get first URL for image and return
    return returnedData.data.hits[rndInt].largeImageURL;
}


function setBackgroundImage(url, inputFieldToCheck) {
    console.log("setBackgrounImage Line 158", url);
    // const imageBackground = url;
    const inputForm = document.getElementById('background');
    console.log("setBackgroundImage ", inputForm);
    // inputForm.setAttribute("style","background: url("+url+")"+ (inputFieldToCheck =='startLocation'? "left ": "right ")+" center no-repeat;");
    inputForm.setAttribute("style","background: url("+url+")"+ "center center / cover  no-repeat;overflow: hidden;");
}// Get pixabay infos


export { getPixaBay }