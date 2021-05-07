function onDateChange (activeElementID) {
    console.log("onDateChange was run.");
    if(activeElementID == "dateDep" || activeElementID == "dateRet") { 


    //if date input is valid date change class
//TODO: 6.5.21 add onChange event listener for changes on date inputs and run onDateChange

    // const dateInputID = activeElementID;
            const dateInput = document.getElementById(activeElementID);
            console.log("Current dateinput that is active is", dateInput, "The ID of that date is ", activeElementID);
            // dateRet = document.getElementById("dateRet");
            if (dateInput.value != "") {
                dateInput.classList.remove("inputIncomplete");
                dateInput.classList.add("inputComplete");
                // Client.
                Client.currentTripObject({[activeElementID]: dateInput.valueAsDate});
                Client.currentTripObject({[activeElementID+"UTC"]: dateInput.valueAs});
                }
            console.log("Date is active!!");
            // dateInput.onblur(Client.currentTripObject({[activeElementID]: dateInput.value}));
                return;
        }
        return;
    }
document.body.addEventListener('change', onDateChange);
export { onDateChange }
