function eraseAllTrips() {

    delete localStorage.allTrips;
    Client.createAllTripFrag();

}

export { eraseAllTrips }