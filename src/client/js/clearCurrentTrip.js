function clearCurrentTrip() {
    if(sessionStorage.currentTrip) {
        delete sessionStorage.currentTrip;
    }
}

export { clearCurrentTrip }