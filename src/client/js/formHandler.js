function formHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    console.log("current event.target", clickTarget.nodeName);
}

document.body.addEventListener('click', formHandler);

export { formHandler }