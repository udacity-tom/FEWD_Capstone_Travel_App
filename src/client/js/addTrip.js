function addTrip(currentTripObject) {
    //TODO essentially processSubmitData from tripObject
    let allTrips = [];
    if(localStorage.allTrips == undefined){
        localStorage.allTrips = JSON.stringify(allTrips);
    }
    allTrips = JSON.parse(localStorage.allTrips);
    allTrips[allTrips.length] = currentTripObject;
    localStorage.allTrips = JSON.stringify(allTrips);
}

export { addTrip }