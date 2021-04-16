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
import { onDateChange } from './js/onDateChange';
import { getAllTripData } from './js/getAllTripData';

// import { crs } from './js/crs';
import { createPopper } from "@popperjs/core";
import { keypressed } from "./js/keypressed";
// import { main } from "./js/main";
import { currentTripObject } from "./js/currentTripObject";
import { getPixaBay } from './js/getPixabay';
// import { updateCityName } from './js/updateCityName'
// import { processInput } from './js/processInput'
// import { postData } from './js/postData'

//import saas styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
// import './styles/nav.scss'
import './styles/input-card.scss'
import './styles/footer.scss'
import './styles/popup.scss'
import './styles/tripSummary.scss'


// import meaning-cloud-logo from './meaning-cloud-logo.png';
// import meaningCloudLogo from './views/img/meaning-cloud-logo.png'
import loadingGif from './views/img/loading.gif'
import background from './views/img/envio-30.jpg'

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
    createPopper,
    keypressed,
    currentTripObject,
    onDateChange,
    getAllTripData,
    // main, 
    getPixaBay
    // postData
}

//Function to run main.js

(function () {

})()