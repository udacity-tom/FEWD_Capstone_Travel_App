function getCurrentTrip() {
    if(sessionStorage.currentTrip) {
        return JSON.parse(sessionStorage.currentTrip);
    }
}

export { getCurrentTrip }