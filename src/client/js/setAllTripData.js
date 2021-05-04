function setAllTripData( allTrips ) {
    localStorage.allTrips = JSON.stringify(allTrips);
    console.log("AllTrips array from localStorage is: ", JSON.parse(localStorage.allTrips));
    }

export { setAllTripData }