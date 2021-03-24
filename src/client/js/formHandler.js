function formHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    // const userActiveElementId = document.activeElement.id;
    const userActiveElementId = clickTarget.id;
    // console.log("FormHandler.js: Current activeElement.id:'", userActiveElementId, "', Current event.target:", clickTarget.nodeName, ", and its value is: ",clickTarget.value);
    if(clickTarget.nodeName =="LI") {
        // updateCityName(clickTarget.value);
        return (userActiveElementId,clickTarget.nodeName, clickTarget.value);
    }
    // console.log("In formHandler(), clickTarget",clickTarget);
    return false;
}

document.body.addEventListener('click', formHandler);

export { formHandler }