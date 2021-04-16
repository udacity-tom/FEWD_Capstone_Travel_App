function currentTripObject(tripObject) {
    // console.log("SessionStorage ?", sessionStorage.currentTrip);
    if (sessionStorage.currentTrip == undefined){
        // sessionStorage.currentTrip = 
        console.log("Creating the current trip object and setting the session storage");
        let currentTripObj = {
            startLocationGeoObj: {},
            finalLocationGeoObj: {},
            dateDep: "",
            dateRet: "",
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
    // console.log("currentTrip on session storage is", sessionStorage.currentTrip);
    //TODO: create trip Object for current request
    // console.log("currentTripObject keys", Object.keys(tripObject));
    // console.log("tripobject value ", tripObject);
    // const getObj = JSson
    const currentObjt = JSON.parse(sessionStorage.currentTrip);
    // console.log("parsed object read from storage", currentObjt);
    // console.log("The VALUE tripObject[Object.keys(tripObject)",tripObject[Object.keys(tripObject)]);
    // console.log("The KEY Object.keys(tripObject)", Object.keys(tripObject));
    // console.log("Current Value of passed object",currentObjt[Object.keys(tripObject)]);
    console.log("THE TEST currentObjt[Object.keys(tripObject)]= tripObject[Object.keys(tripObject)]", currentObjt[Object.keys(tripObject)] = tripObject[Object.keys(tripObject)] );
    // sessionStorage.currentTrip = JSON.stringify(sessionStorage.currentTrip[Object.keys(tripObject)]= tripObject[Object.keys(tripObject)]);
    // console.log("Current Value of passed object",currentObjt[Object.keys(tripObject)]);
    sessionStorage.currentTrip = JSON.stringify(currentObjt);
    console.log("sessionStorage currentTrip value after save is ", JSON.parse(sessionStorage.currentTrip));

    return; 
    }
    
    export { currentTripObject }