function setAllTripData( allTrips ) {
    localStorage.allTrips = JSON.stringify(allTrips);
    console.log("AllTrips array from localStorage is: ", JSON.parse(localStorage.allTrips));
    // if(localStorage.allTrips){
    //     let allTrips = JSON.parse(localStorage.allTrips);
    //     return allTrips; 
    //     } else {
    //         return "No Data!";
    //     }
    }

export { setAllTripData }