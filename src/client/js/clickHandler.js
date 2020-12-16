function clickHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    console.log("current event.target", clickTarget.nodeName, clickTarget);
    if (clickTarget.nodeName == "BUTTON" && clickTarget.value == "submit") {
        console.log("Yes, I'm the submit button, button value is:", clickTarget.value);
    }
}

document.body.addEventListener('click', clickHandler);

export { clickHandler }