function clickHandler(event) {
    event.preventDefault();
    const clickTarget = event.target;
    // console.log("current event.target", clickTarget.nodeName, clickTarget);
    const startLocation = document.getElementById("startLocation");
    const finalLocation = document.getElementById("finalLocation");
    const date = document.getElementById("date");
    // if (clickTarget.nodeName == "BUTTON" && clickTarget.value == "submit") {
    //     console.log("Yes, I'm the submit button, button value is:", clickTarget.value);
    //     console.log("We are start, finish location and date: ", startLocation.value, finalLocation.value, date.value)
    // }

    const processSubmitData = async () => {
        // document.getElementById("errors").value = "";
        Client.clearError();
        console.log("in processsubmitData");
        const errData = {
            code: "998",
            msg: "Check all inputs are correctly entered and filled out. "
        }
        if((startLocation.value == "" | finalLocation.value == "" | date.value == "") ) {
            console.log("Input Error: Data missing or incorrect!");
            Client.errorHandling(errData);
        } else {
            let returnedData =  await Client.axiosPost('/process', {startLocation: startLocation.value,finalLocation: finalLocation.value, date: date.value });
            console.log("Data from server request", returnedData);
        
            
            // console.log("in the else condition of error checking.")
            // document.getElementById("errors").value = "";
        }
    
        
    }
    if (clickTarget.nodeName == "BUTTON") {
        if (clickTarget.value == "submit") processSubmitData();
        else if (clickTarget.value == "addTrip") addTrip();
        else if (clickTarget.value == "deleteTrip") deleteTrip();
    }
}


document.body.addEventListener('click', clickHandler);

export { clickHandler }