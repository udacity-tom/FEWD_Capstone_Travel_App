function deleteTrip(item) {
    console.log("DeleteTrip item value is", item);
    let currentAllTrips = Client.getAllTripData();
    // let tripToDelete = currentAllTrips[item];
    // console.log("Currentr trip to delete is: ", tripToDelete);)
    currentAllTrips.splice(item, 1);
    // console.log("currently the object array is", currentAllTrips);
    // Client.createAllTripFrag();
    Client.eraseAllTrips();
    // console.log("From deleteTrips, ", currentAllTrips);
    Client.setAllTripData(currentAllTrips);


}

export { deleteTrip }