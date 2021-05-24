import { eraseAllTrips } from './eraseAllTrips';
import { getAllTripData } from './getAllTripData';
import { setAllTripData } from './setAllTripData';
function sortAllTrips() {

    if(!localStorage.allTrips){
        return;
    }
    //INFO:Sort array seperated to allow sorting based on actual or archived trips using completed flag
    function sortTrips(array) {
        array.sort( (trip1, trip2) => {
            let date1 = new Date(trip1.dateDep),
                date2 = new Date(trip2.dateDep);
                return date1-date2;
        });
        return array;
    }
    //TODO: Sort trips into two categories: 1. Active/Open at top  2. completed == true at bottom
    const allTrips =sortTrips(getAllTripData());
    eraseAllTrips(true);
    setAllTripData(allTrips);
        
    return; 
}

export { sortAllTrips }