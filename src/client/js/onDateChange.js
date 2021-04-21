function onDateChange (activeElementID) {
    console.log("onDateChange was run.");
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

export { onDateChange }