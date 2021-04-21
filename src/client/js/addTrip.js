function addTrip(currentTripObject) {
    //TODO essentially processSubmitData from tripObject
    let allTrips = [];
    if(localStorage.allTrips == undefined){
        localStorage.allTrips = JSON.stringify(allTrips);
    }
    allTrips = JSON.parse(localStorage.allTrips);
    console.log("alltrips parsed from localStorage is ", allTrips);
    allTrips[allTrips.length] = currentTripObject;
    console.log("alltrips after adding new tripobject is", allTrips);
    localStorage.allTrips = JSON.stringify(allTrips);
    console.log("AllTrips array from localStorage is: ", JSON.parse(localStorage.allTrips));

}

export { addTrip }