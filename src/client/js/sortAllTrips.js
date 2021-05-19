import { eraseAllTrips } from './eraseAllTrips';
import { getAllTripData } from './getAllTripData';
import { setAllTripData } from './setAllTripData';
function sortAllTrips() {

    if(!localStorage.allTrips){
        return;
    }
    //INFO:Sort array seperated to allow sorting based on actual or archived trips
    function sortTrips(array) {
        array.sort( (trip1, trip2) => {
            let date1 = new Date(trip1.dateDep),
                date2 = new Date(trip2.dateDep);
                return date1-date2;
        });
        return array;
    }
    const allTrips =sortTrips(getAllTripData());
    eraseAllTrips(true);
    setAllTripData(allTrips);
    
    return; 
}

export { sortAllTrips }