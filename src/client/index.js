// storeimport 'regenerator-runtime/runtime';
//import Js functions used in app
// import { clickHandler } from './js/clickHandler';
import { formHandler } from './js/formHandler';
import { getGeonames } from './js/getGeonames';
import { updateUI } from './js/updateUI';
import { storeTrips } from './js/storeTrips';
import { todoList } from './js/todoList';
import { clearUI } from './js/clearUI';
import { checkError } from './js/checkError';
import { clearError } from './js/clearError';
import { errorHandling } from './js/errorHandling';
import { axiosPost } from './js/axiosPost';
import { getWeatherbit } from './js/getWeatherbit';
import { addTrip } from './js/addTrip';
import { getCurrentTrip } from './js/getCurrentTrip';
import { deleteTrip } from './js/deleteTrip';
import { onDateChange } from './js/onDateChange';
import { getAllTripData } from './js/getAllTripData';
import { setAllTripData } from './js/setAllTripData';
import { createAllTripFrag } from './js/createAllTripFrag';
import { closeAllTrips } from './js/closeAllTrips';
import { openAllTrips } from './js/openAllTrips';
import { sortAllTrips } from './js/sortAllTrips';
import { eraseAllTrips } from './js/eraseAllTrips';
import { createPopper } from "@popperjs/core";
import { keypressed } from "./js/keypressed";
import { currentTripObject } from "./js/currentTripObject";
import { getPixaBay } from './js/getPixabay';
import { daysUntilDep } from './js/daysUntilDep';
import { getTripDuration } from './js/getTripDuration';


//import saas styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/input-card.scss'
import './styles/footer.scss'
import './styles/popup.scss'
import './styles/tripSummary.scss'
import './styles/accordian.scss'

// import meaning-cloud-logo from './meaning-cloud-logo.png';
// import meaningCloudLogo from './views/img/meaning-cloud-logo.png'
// import background from './views/img/envio-30.jpg';

// import background2 from './views/img/envio-10.jpg';
// import loadingGif from './views/img/loading.gif';
// import pixabay from './views/img/pixabay.png';
// import geonames from './views/img/geonames.png';
// import weatherbit from './views/img/weatherbit.png';
// import icona01d from './views/img/c03d.png';
// import iconc01n from './views/img/c03d.png';
// import iconc03d from './views/img/c03d.png';
// import iconc03d from './views/img/c03d.png';
// import './icons/a01d.png'
// import './icons/a02d.png'
// import './icons/a03d.png'
// import './icons/a04d.png'
// import './icons/a05d.png'
// import './icons/a06d.png'
// import './icons/c01d.png'
// import './icons/c02d.png'
// import './icons/c03d.png'
// import './icons/c04d.png'
// import './icons/d01d.png'
// import './icons/d02d.png'
// import './icons/d03d.png'
// import './icons/f01d.png'
// import './icons/r01d.png'
// import './icons/r02d.png'
// import './icons/r03d.png'
// import './icons/r04d.png'
// import './icons/r05d.png'
// import './icons/r06d.png'
// import './icons/s01d.png'
// import './icons/s02d.png'
// import './icons/s03d.png'
// import './icons/s04d.png'
// import './icons/s05d.png'
// import './icons/s06d.png'
// import './icons/t01d.png'
// import './icons/t02d.png'
// import './icons/t03d.png'
// import './icons/t04d.png'
// import './icons/t05d.png'
// import './icons/u00d.png'


function importAllImages(image) {
    let images = {};
    image.keys().map( (item,index) => {
            images[item.replace('./', '') ] = image(item);
        })
    return images;
}

const images = importAllImages(require.context('./views/img', false, /\.(png|jpe?g|svg)$/));
// images importAllImages(require.context('./views/icons', false, /\.(png|jpe?g|svg)$/));
console.log("images", images);
console.log("Entry point reloaded! Site was re-loaded.");

//export js files for use in app
export {
    // clickHandler,
    formHandler,
    getGeonames,
    updateUI,
    storeTrips,
    todoList,
    clearUI,
    clearError,
    checkError,
    errorHandling,
    axiosPost,
    getWeatherbit,
    addTrip,
    getCurrentTrip,
    deleteTrip,
    createPopper,
    keypressed,
    currentTripObject,
    onDateChange,
    getAllTripData,
    setAllTripData,
    createAllTripFrag,
    closeAllTrips,
    openAllTrips,
    eraseAllTrips,
    sortAllTrips,
    daysUntilDep,
    getTripDuration,
    getPixaBay,
    images
    // postData
}

//Function to run app.js

(function () {

})()