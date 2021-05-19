function setAllTripData( allTrips ) {
    localStorage.allTrips = JSON.stringify(allTrips);
    }

export { setAllTripData }