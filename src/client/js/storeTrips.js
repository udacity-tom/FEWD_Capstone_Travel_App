function storeTrips(tripObject) {

//Add local storage for trips



let currentInput = {
    startLocation: "", //
    startCountry: "",
    startLong: 0.0,
    startLat: 0.0,
    finalLocation: "",
    finalCountry: "",
    dateDep: new Date(),
    dateRet: new Date(),
    pixaStartCity: "",
    pixaStartCountry: "",
    pixaFinalCity: "",
    pixaFinalCountry: "",
    completed: false
};


let sampleTrip = {
    startLocation: "", //
    startCountry: "",
    startLong: 0.0,
    startLat: 0.0,
    finalLocation: "",
    finalCountry: "",
    dateDep: new Date(),
    dateRet: new Date(),
    pixaStartCity: "",
    pixaStartCountry: "",
    pixaFinalCity: "",
    pixaFinalCountry: "",
    completed: false
};

}

export { storeTrips }