function addTrip(tripObject) {
    //TODO essentially processSubmitData from tripObject
    let allTrips = [];
    if(localStorage.allTrips == undefined){
        localStorage.allTrips = JSON.stringify(allTrips);

    }
    allTrips = JSON.parse(localStorage.allTrips);
    allTrips[allTrips.length] = tripObject;
    localStorage.allTrips = allTrips;
    console.log("AllTrips array is: ", localStorage.allTrips);

}

export { addTrip}