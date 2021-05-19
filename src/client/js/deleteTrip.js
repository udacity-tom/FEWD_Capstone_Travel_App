import { getAllTripData } from './getAllTripData';
import { eraseAllTrips } from './eraseAllTrips';
import { setAllTripData } from './setAllTripData';
function deleteTrip(item) {
    let currentAllTrips = getAllTripData();
    if(confirmDelete(currentAllTrips[item])){
        currentAllTrips.splice(item, 1);
        eraseAllTrips(true);
        setAllTripData(currentAllTrips);
        return true
    }
    return false
}


function confirmDelete(tripToDelete) {
    const confirmText = "Are you sure you want to delete the trip to ";
    const tripDetails = tripToDelete.finalLocationGeoObj.toponymName+" on "+new Date(tripToDelete.dateDep).toDateString();
    return confirm(confirmText+"\n"+tripDetails);

}




export { deleteTrip }