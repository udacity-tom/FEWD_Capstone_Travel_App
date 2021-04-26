function sortAllTrips() {

    if(!localStorage.allTrips){
        return;
    }
    const allTrips = Client.getAllTripData();
    allTrips.sort( (trip1, trip2) => {
        let date1 = new Date(trip1.dateDep),
            date2 = new Date(trip2.dateDep);
            return date1-date2;
    });
    Client.eraseAllTrips();
    Client.setAllTripData(allTrips);
    
    return; 
}

export { sortAllTrips }