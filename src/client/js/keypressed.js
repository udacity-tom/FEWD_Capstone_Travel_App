function keypressed(ev) {
    const keypressValue = ev;
    let delay;
    if ( ev.key === "Enter") {
        if(document.activeElement.name == "input" && document.activeElement.value.length >=3){
        Client.getGeonames(document.activeElement);    
    }
        return ev.key;
    }
    return ev.key
}

document.body.addEventListener('keypress', keypressed);

export { keypressed }