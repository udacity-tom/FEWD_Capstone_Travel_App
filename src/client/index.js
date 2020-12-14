storeimport 'regenerator-runtime/runtime';
//import Js functions used in app
import { formHandler } from './js/formHandler'
import { getGeonames } from './js/getGeonames'
import { updateUI } from './js/updateUI'
import { storeTrips } from './js/storeTrips'
import { todoList } from './js/todoList'
import { clearUI } from './js/clearUI'
import { errorHandling } from './js/errorHandling'
// import { processInput } from './js/processInput'
// import { postData } from './js/postData'

//import saas styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/nav.scss'
import './styles/form.scss'
import './styles/footer.scss'

// import meaning-cloud-logo from './meaning-cloud-logo.png';
// import meaningCloudLogo from './views/img/meaning-cloud-logo.png'

console.log("Entry point reloaded!");

//export js files for use in app
export {
    formHandler,
    getGeonames,
    updateUI,
    storeTrips,
    todoList,
    clearUI,
    errorHandling
    // postData
}