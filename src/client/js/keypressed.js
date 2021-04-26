// import { clickHandler } from "./clickHandler";
// import { clickHandler.getPossibleCities } from "./clickHandler";
// import { getGeonames } from "./getGeonames";

function keypressed(ev) {
    // event.preventDefault();
    const keypressValue = ev;
    let delay;
    if ( ev.key === "Enter") {
        //for debouncing
        // clearTimeout(delay);    
        // delay = setTimeout( () => {
            
        //     // cityClickChecker();
        //     // if(cityClickChecker() !=)
        // }, 500);
        // getPossibleCities();
        // getGeonames();
        if(document.activeElement.name == "input" && document.activeElement.value.length >=3){
        Client.getGeonames(document.activeElement);    
    }
        return ev.key;
    }
    // console.log("NO keypressed value is NOT Enter");
    return ev.key


}

document.body.addEventListener('keypress', keypressed);

export { keypressed }