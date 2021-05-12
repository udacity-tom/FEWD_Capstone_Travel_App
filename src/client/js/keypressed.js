function keypressed(event) {
    if( event.key === "Escape"){
        Client.closeAllTrips();
    } else if ( event.key === "Enter") {
        if(document.activeElement.name == "input" && document.activeElement.value.length >=3){
        Client.getGeonames(document.activeElement);    
    }
        return event.key;
    }
    return event.key
}

document.body.addEventListener('keydown', keypressed);

export { keypressed }