function clearUI() {
    function clearAllInputs(){
    let allInputs = document.querySelectorAll('input');
        Array.from(allInputs).filter((item) => {
            if(item.id.slice(0,4) != "trip"){
                document.getElementById(item.id).value = "";
                document.getElementById(item.id).classList.remove("inputComplete");
                document.getElementById(item.id).classList.add("inputIncomplete");
            }
        })
    }

    function resetBackgroundImage(url = "../img/envio-30.jpg") {
        const inputForm = document.getElementById('background');
        inputForm.setAttribute("style","background: url("+url+")"+ " center center / cover  no-repeat; transition: .5s");
    }

    clearAllInputs();
    resetBackgroundImage();
}

export { clearUI }