function formHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    console.log("current event.target", clickTarget.nodeName, " and its value is ",clickTarget.value);
    console.log(clickTarget);
}

document.body.addEventListener('click', formHandler);

export { formHandler }