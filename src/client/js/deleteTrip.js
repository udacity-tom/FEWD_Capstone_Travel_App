function deleteTrip(item) {
    let currentAllTrips = Client.getAllTripData();
    let tripToDelete = currentAllTrips[item];
    console.log("Currentr trip to delete is: ", tripToDelete);
    currentAllTrips.splice(item, 1);
    console.log("currently the object array is", currentAllTrips);
    // Client.createAllTripFrag();

}

export { deleteTrip }