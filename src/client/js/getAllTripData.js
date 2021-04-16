function getAllTripData() {
    if(localStorage.allTrips){
        let allTrips = JSON.parse(localStorage.allTrips);
        return allTrips; 
        } else {
            return "No Data!";
        }
    }
    
    export { getAllTripData }