function sortAllTrips() {

    if(!localStorage.allTrips){
        return;
    }
    const allTrips = Client.getAllTripData();
    // allTrips.sort((a, b) => (days(a.dateDep,"n") < days(b.dateDep,"n")) ? (days(a.dateDep,"n") > days(b.dateDep,"n")) ? 1 : 0);
    // allTrips.sort(compare( Client.daysUntilDep(a.dateDep, "n"), Client.daysUntilDep(b.dateDep, "n"));
    // allTrips.sort(compare( a.dateDep, b.dateDep);
    

    allTrips.sort( (a, b) => {
        let da = new Date(a.dateDep),
            db = new Date(b.dateDep);
            return da-db;
    });
    // console.log("allTrips Sorted", allTrips);
    Client.eraseAllTrips();
    // for(let i=0; allTrips.length; i++){
        Client.setAllTripData(allTrips);
    // }
    
    return; 
}

// function compare( a, b) {
//     if (a < b) {
//         return -1;
//     } else if(a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

export { sortAllTrips }