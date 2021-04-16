function getCurrentTrip() {
    return JSON.parse(sessionStorage.currentTrip);
}

export { getCurrentTrip }