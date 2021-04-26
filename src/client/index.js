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
import loadingGif from './views/img/loading.gif';
import background from './views/img/envio-30.jpg';
import background2 from './views/img/envio-10.jpg';

import pixabay from './views/img/pixabay.png';
import geonames from './views/img/geonames.png';
import weatherbit from './views/img/weatherbit.png';

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
    getPixaBay
    // postData
}

//Function to run app.js

(function () {

})()