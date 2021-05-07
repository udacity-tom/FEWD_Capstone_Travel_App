// storeimport 'regenerator-runtime/runtime';
//import Js functions used in app
import { formHandler } from './js/formHandler';
import { getGeonames } from './js/getGeonames';
import { updateUI } from './js/updateUI';
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
import './styles/mediaq.scss'


function importAllImages(image) {
    let images = {};
    image.keys().map( (item,index) => {
            images[item.replace('./', '') ] = image(item);
        })
    return images;
}

const images = importAllImages(require.context('./views/img', false, /\.(png|jpe?g|svg)$/));
// images importAllImages(require.context('./views/icons', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images);
console.log("Entry point reloaded! Site was re-loaded.");

//export js files for use in app
export {
    formHandler,
    getGeonames,
    updateUI,
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