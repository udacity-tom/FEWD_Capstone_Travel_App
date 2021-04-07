import { clickHandler } from "./clickHandler";
// import { clickHandler.getPossibleCities } from "./clickHandler";
import { getGeonames } from "./getGeonames";

function keypressed(ev) {
    // event.preventDefault();
    const rndInt = Math.floor(Math.random() * 10);
    console.log("random ", rndInt);
    console.log("keypressed eventn value passed is",ev);
    console.log("Active element ", document.activeElement);
    const keypressValue = ev;
    let delay;
    // const clickTarget = event.target;
    // const userActiveElementId = document.activeElement.id;
    // const userActiveElementId = clickTarget.id;
    // console.log("FormHandler.js: Current activeElement.id:'", userActiveElementId, "', Current event.target:", clickTarget.nodeName, ", and its value is: ",clickTarget.value);
    console.log("keypress handler value", keypressValue.key);
    if ( ev.key === "Enter") {
        //for debouncing
        // clearTimeout(delay);    
        // delay = setTimeout( () => {
            
        //     // cityClickChecker();
        //     // if(cityClickChecker() !=)
        // }, 500);
        // getPossibleCities();
        // getGeonames();

        if(document.activeElement.name == "input"){

        Client.getGeonames(document.activeElement);
    }
        return ev.key;
    }
    // console.log("NO keypressed value is NOT Enter");
    return ev.key


}

document.body.addEventListener('keypress', keypressed);

export { keypressed }