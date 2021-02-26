function formHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    const userActiveElementId = document.activeElement.id;
    console.log("FormHandler.js: Current activeElement.id:'", userActiveElementId, "', Current event.target:", clickTarget.nodeName, ", and its value is: ",clickTarget.value);
    console.log("In formHandler(), clickTarget",clickTarget);
    return (userActiveElementId,clickTarget.nodeName, clickTarget.value);
}

document.body.addEventListener('click', formHandler);

export { formHandler }