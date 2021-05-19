import { getCurrentTrip } from './getCurrentTrip';
function checkError() {
    const submittedTripData = getCurrentTrip();
    if(!submittedTripData){
        alert("Please complete the starting and final location and the departure and return dates.")
        return false;
    } else if(submittedTripData.startLocationGeoObj != {} && submittedTripData.finalLocationGeoObj != {} && submittedTripData.dateDep != "" && submittedTripData.dateRet != "" ){
        return true;
    }
    alert("Please check your submitted data.\n And make any necessary corrections.");
    return false;
}

export { checkError }