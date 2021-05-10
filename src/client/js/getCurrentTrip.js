function getCurrentTrip() {
    if(sessionStorage.currentTrip) {
        return JSON.parse(sessionStorage.currentTrip);
    }
    return false;
}

export { getCurrentTrip }