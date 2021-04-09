function currentTripObject(tripObject) {
    console.log("SessionStorage ?", localStorage.currentTrip);
    if (localStorage.currentTrip == undefined){
        // sessionStorage.currentTrip = 
        console.log("Creating the current trip object and setting the local storage");
        localStorage.setItem("currentTrip",JSON.stringify({
            startLocation: "", //
            startCountry: "",
            startLocationLong: 0.0,
            startLocationLat: 0.0,
            startGeoObj: "",
            finalLocation: "",
            finalCountry: "",
            finalLocationLong: 0.0,
            finalLocationLat: 0.0,
            finalGeoObj: "",
            dateDep: new Date(),
            dateRet: new Date(),
            startLocationPixaURL: "",
            finalLocationPixaURL: "",
            geoObj: "",
            completed: false
        }));
    }
    console.log("currentTrip on session storage is", localStorage.currentTrip);
    //TODO: create trip Object for current request
    console.log("currentTripObject keys", Object.keys(tripObject));
    console.log("tripobject value ", tripObject);
    // const getObj = JSson
    const currentObjt = JSON.parse(localStorage.currentTrip);
    // console.log("parsed object read from storage", currentObjt);
    // console.log("The VALUE tripObject[Object.keys(tripObject)",tripObject[Object.keys(tripObject)]);
    // console.log("The KEY Object.keys(tripObject)", Object.keys(tripObject));
    // console.log("Current Value of passed object",currentObjt[Object.keys(tripObject)]);
    console.log("THE TEST currentObjt[Object.keys(tripObject)]= tripObject[Object.keys(tripObject)]", currentObjt[Object.keys(tripObject)] = tripObject[Object.keys(tripObject)] );
    // localStorage.currentTrip = JSON.stringify(localStorage.currentTrip[Object.keys(tripObject)]= tripObject[Object.keys(tripObject)]);
    console.log("Current Value of passed object",currentObjt[Object.keys(tripObject)]);
    localStorage.currentTrip = JSON.stringify(currentObjt);
    console.log("sessionStorage currentTrip value after save is ", JSON.parse(localStorage.currentTrip));
    
    
    
    // let currentInput = {
    //     startLocation: "", //
    //     startCountry: "",
    //     startLong: 0.0,
    //     startLat: 0.0,
    //     finalLocation: "",
    //     finalCountry: "",
    //     dateDep: new Date(),
    //     dateRet: new Date(),
    //     pixaStartCity: "",
    //     pixaStartCountry: "",
    //     pixaFinalCity: "",
    //     pixaFinalCountry: "",
    //     completed: false
    // };
    
    

    function updateCurrentInput(tripObject){
        let currentTrip = sampleTrip;
        function updateProperty(tripObject){}
        currenttrip
    }
    

    return; 
    }
    
    export { currentTripObject }