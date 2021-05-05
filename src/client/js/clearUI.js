function clearUI() {
    let allInputs = document.querySelectorAll('input');

    Array.from(allInputs).filter((item) => {
        if(item.id.slice(0,4) != "trip"){
            document.getElementById(item.id).value = "";
            document.getElementById(item.id).classList.remove("inputComplete");

        }
    })
    //reset background image
    
    // console.log("clearUI allInputs", (allInputs.id.slice(0,5) != "trip" ? allinputs : ""));
    // console.log("clearUI allInputs", allInputs.matches(!allInputs.id.slice(0,4) == "trip"));
    // console.log("clearUI allInputs", (!allInputs.id.slice(0,4) == "trip"));
    // const nonTrips = allInputs.forEach( (input) => input.id.slice(0,5) != "trip");
    // console.log(allInputs);
    // allInputs = allInputs.id.values()
    // allInputs = Array.from(allInputs);
    // console.log(allInputs);
    // let nonTrips = [];
    // nonTrips = allInputs.filter((item) => {
    // // console.log(item.id, item.id.slice(0,4), item.id.slice(0,4) != "trip");
    // // item.id.slice(0,4) != "trip";
    // item;
    
    // });
    
    
    // const nonTrips =  for(let input of allInputs){
    //     input.id.slice(0,5) != "trip";
    // }
    // console.log("clearUI allInputs", nonTrips, allInputs.filter((item) => {
    //     // console.log(item.id, item.id.slice(0,4), item.id.slice(0,4) != "trip");
    //     item.id.slice(0,4) != "trip";        
    //     }));
        const url = "../img/envio-30.jpg";
        // console.log("About to run setBackground function");
        setBackgroundImage(url);

    function setBackgroundImage(url) {
        // console.log("inside setBackground function");
        const inputForm = document.getElementById('background');
        // console.log("inputform is, ",inputForm )
        // inputForm.setAttribute("style","background: url("+url+")"+ (inputFieldToCheck =='startLocation'? "left ": "right ")+" center no-repeat;");
        inputForm.setAttribute("style","background: url("+url+")"+ " center center / cover  no-repeat;overflow: hidden; transition: 1s");
    }    
    // document.getElementById('background').setAttribute("style","background: url("+url+")"+ " center center / cover  no-repeat;overflow: hidden;");
}

export { clearUI }