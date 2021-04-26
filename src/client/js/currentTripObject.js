function currentTripObject(tripObject) {
    // console.log("SessionStorage ?", sessionStorage.currentTrip);
    if (sessionStorage.currentTrip == undefined){
        // sessionStorage.currentTrip = 
        // console.log("Creating the current trip object and setting the session storage");
        let currentTripObj = {
            startLocationGeoObj: {},
            finalLocationGeoObj: {},
            dateDep: new Date(),
            dateRet: new Date(),
            startLocationPixaURL: "",
            finalLocationPixaURL: "",
            // startLocationWbitCurrentObj: {},
            // finalLocationWbitCurrentObj: {},
            startLocationWbitForecastObj: {},
            finalLocationWbitForecastObj: {},
            dateEntered: new Date(),
            completed: false
        }
        sessionStorage.setItem("currentTrip",JSON.stringify(currentTripObj));
    }
    const currentObjt = JSON.parse(sessionStorage.currentTrip);
    // console.log("THE TEST currentObjt[Object.keys(tripObject)]= tripObject[Object.keys(tripObject)]", 
    currentObjt[Object.keys(tripObject)] = tripObject[Object.keys(tripObject)];
    // sessionStorage.currentTrip = JSON.stringify(sessionStorage.currentTrip[Object.keys(tripObject)]= tripObject[Object.keys(tripObject)]);
    // console.log("Current Value of passed object",currentObjt[Object.keys(tripObject)]);
    sessionStorage.currentTrip = JSON.stringify(currentObjt);
    // console.log("sessionStorage currentTrip value after save is ", JSON.parse(sessionStorage.currentTrip));
    return; 
    }
    
    export { currentTripObject }