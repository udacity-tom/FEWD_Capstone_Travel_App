//import Js functions used in app
import { formHandler } from './js/formHandler';
import { keypressed } from "./js/keypressed";

//import saas styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/input-card.scss'
import './styles/footer.scss'
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
console.log("Entry point reloaded! Site was re-loaded.");

//export files for use in app
export {
    formHandler,
    keypressed,
    images
}


(function () {

})()