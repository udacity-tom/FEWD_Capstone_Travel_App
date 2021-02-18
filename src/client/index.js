// storeimport 'regenerator-runtime/runtime';
//import Js functions used in app
import { clickHandler } from './js/clickHandler'
import { formHandler } from './js/formHandler'
import { getGeonames } from './js/getGeonames'
import { updateUI } from './js/updateUI'
import { storeTrips } from './js/storeTrips'
import { todoList } from './js/todoList'
import { clearUI } from './js/clearUI'
import { clearError } from './js/clearError'
import { errorHandling } from './js/errorHandling'
import { axiosPost } from './js/axiosPost'
import { crs } from './js/crs'
// import { processInput } from './js/processInput'
// import { postData } from './js/postData'

//import saas styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
// import './styles/nav.scss'
import './styles/input-card.scss'
import './styles/footer.scss'

// import meaning-cloud-logo from './meaning-cloud-logo.png';
// import meaningCloudLogo from './views/img/meaning-cloud-logo.png'
import loadingGif from './views/img/loading.gif'

console.log("Entry point reloaded! Site was re-loaded.");

//export js files for use in app
export {
    clickHandler,
    formHandler,
    getGeonames,
    updateUI,
    storeTrips,
    todoList,
    clearUI,
    clearError,
    errorHandling,
    axiosPost,
    crs
    // postData
}