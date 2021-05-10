function onDateChange (activeElement) {
    const dateInput = document.getElementById(activeElement.id);
    const dateField = document.getElementById("dateField");
    // if(dateInput.value == null || dateInput.value == undefined || dateInput.value == "") {
    //     Client.currentTripObject({[dateInput.id]: new Date().toLocaleString().slice(0,10)});
    //    }
    dateField.addEventListener('change', (event) => {
        dateInput.classList.remove("inputIncomplete");
        dateInput.classList.add("inputComplete");
        Client.currentTripObject({[dateInput.id]: dateInput.value});
    });

        return;
    }

export { onDateChange }
