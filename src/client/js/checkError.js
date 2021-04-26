function checkError(tripObject) {
    // console.log("checkError tripobject, currentTrip", tripObject);
    if(tripObject == undefined){
        alert("Please complete the starting and final location and the departure and return dates.")
        return false;
    }
    //TODO 21-4-21 add switch for checking all inputs are completeted
    return true;
}

export { checkError }