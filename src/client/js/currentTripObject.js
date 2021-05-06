function currentTripObject(tripObject) {
    if (sessionStorage.currentTrip == undefined){
        let currentTripObj = {
            startLocationGeoObj: {},
            finalLocationGeoObj: {},
            dateDep: new Date(),
            dateRet: new Date(),
            startLocationPixaURL: "",
            finalLocationPixaURL: "",
            startLocationWbitForecastObj: {},
            finalLocationWbitForecastObj: {},
            dateEntered: new Date(),
            completed: false
        }
        sessionStorage.setItem("currentTrip",JSON.stringify(currentTripObj));
    }
    const currentObjt = JSON.parse(sessionStorage.currentTrip);
    currentObjt[Object.keys(tripObject)] = tripObject[Object.keys(tripObject)];
    sessionStorage.currentTrip = JSON.stringify(currentObjt);
    return; 
    }
    
    export { currentTripObject }