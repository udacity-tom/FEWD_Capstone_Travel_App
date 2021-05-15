function eraseAllTrips(withoutConfirm) {
    if(withoutConfirm || confirmDelete()) {
        delete localStorage.allTrips;
        Client.createAllTripFrag();
    } 
    return;    
}

function confirmDelete() {
    const confirmText = "Are you sure you want to delete all Trips";
    const response = confirm(confirmText);
    return response;

}

export { eraseAllTrips }