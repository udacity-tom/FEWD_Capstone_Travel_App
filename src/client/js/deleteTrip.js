function deleteTrip(item) {
    let currentAllTrips = Client.getAllTripData();
    currentAllTrips.splice(item, 1);
    Client.eraseAllTrips();
    Client.setAllTripData(currentAllTrips);
}

export { deleteTrip }