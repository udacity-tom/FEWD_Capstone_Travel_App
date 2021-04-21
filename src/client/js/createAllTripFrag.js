function createAllTripFrag() {
    const allTripList = document.createDocumentFragment();
    const allTripUL = document.createElement('ul');
    const addAllTrips = document.getElementById("tripsPlanned");
    const tripsSummary = document.getElementById("tripsSummary");
    
    if(!localStorage.allTrips || localStorage.allTrips == undefined) {
        tripsSummary.innerText =  "NO PLANNED TRIPS!";
        // tripsSummary.
        return;
    }
    Client.sortAllTrips();
    const allTripData = Client.getAllTripData();// create local var with array of trips.
    console.log("from createAllTripFrag, all trip data", allTripData);
    // allTripUL.className("tripsPlannedUL");
    allTripUL.id = "tripsPlannedUL";
    addAllTrips.appendChild(allTripUL);

    for(let i=0; i < allTripData.length; i++){
        const listElement = document.createElement('li');
        const inputElement = document.createElement('input');
        const labelElement = document.createElement('label');
        const divElement = document.createElement('div');
        const divElement2 = document.createElement('div');
        const paraElement = document.createElement('p');
        const paraElement2 = document.createElement('p');
        const imageOne = document.createElement('img');
        const imageTwo = document.createElement('img');
        const delButton = document.createElement('button');
        
        listElement.value = i;

        inputElement.type = "checkbox";
        inputElement.id = "trip"+i;
        inputElement.className = "tripInput";
        labelElement.className = "tripLabel";
        // labelElement.className = "tripLabel";
        labelElement.setAttribute("for", "trip"+i);
        // const tripFrom = displayDate(allTripData[i].dateDep)+" from "+allTripData[i].startLocationGeoObj.toponymName+", "+allTripData[i].startLocationGeoObj.countryCode;
        // const tripTo = displayDate(allTripData[i].dateRet)+" from "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryCode;

        labelElement.innerText = "Trip "+(i+1)+" Depart "+displayDate(allTripData[i].dateDep)+" To "+allTripData[i].finalLocationGeoObj.toponymName+"\nDeparture "+Client.daysUntilDep(allTripData[i].dateDep);
        
        
        // labelElement.innerText = "You have planned to depart on "+tripFrom+" and have scheduled to return on "+tripTo+"\nDeparture "+daysUntilDep(allTripData[i].dateDep);
        // displayDate(allTripData[i].dateRet, allTripData[i].dateDep);
        // const daysTillDep = daysUntilDep(allTripData[i].dateDep);
        // labelElement.innerText.appendChild("Days until departure "+daysTillDep);
        // console.log("image source ",allTripData[i].startLocationPixaURL);
        
        
        
        imageOne.src = allTripData[i].startLocationPixaURL;
        imageOne.alt = allTripData[i].startLocationGeoObj.toponymName;
        imageTwo.src = allTripData[i].finalLocationPixaURL;
        imageTwo.alt = allTripData[i].finalLocationGeoObj.toponymName;
        const paraText1 = "Your trip is planned to begin "+Client.daysUntilDep(allTripData[i].dateDep)+"\n";
        const paraText2 = "Departing "+allTripData[i].startLocationGeoObj.toponymName+"\nDate "+displayDate(allTripData[i].dateDep);
        const paraText12 = "Your return trip is planned to begin "+Client.daysUntilDep(allTripData[i].dateRet)+"\n";
        const paraText22 = "Departing "+allTripData[i].finalLocationGeoObj.toponymName+"\nDate "+displayDate(allTripData[i].dateRet);

        // const tripFrom = displayDate(allTripData[i].dateDep)+" from "+allTripData[i].startLocationGeoObj.toponymName+", "+allTripData[i].startLocationGeoObj.countryCode;
        // const tripTo = displayDate(allTripData[i].dateRet)+" from "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryCode;
        // labelElement.innerText = "You have planned to depart on "+tripFrom+" and have scheduled to return on "+tripTo+"\nDeparture "+daysUntilDep(allTripData[i].dateDep);



        // inputElement.type = "checkbox";
        paraElement.className = "tripText";
        paraElement.innerText = paraText1+paraText2;
        paraElement2.className = "tripText";
        paraElement2.innerText = paraText12+paraText22;
        divElement2.className = "container";
        divElement2.appendChild(paraElement);
        divElement2.appendChild(imageOne);
        divElement2.appendChild(paraElement2);
        divElement2.appendChild(imageTwo);
        
        
        divElement.className = "tripContent";
        divElement.appendChild(divElement2);
        // divElement.appendChild(divElement2);

        listElement.appendChild(inputElement);
        listElement.appendChild(labelElement);
        listElement.appendChild(divElement);

        allTripUL.appendChild(listElement);
    }
    while(tripsSummary.firstChild){
        tripsSummary.removeChild(tripsSummary.firstChild);
    }
    tripsSummary.appendChild(allTripUL);
    tripsSummary.setAttribute('style', "display: block; color: white;");
    
    // const addAllTripList = document.

}

// function daysUntilDep( dateDep, returntype ) {
//     const currentDate = new Date();
//     const dateUTC = Date.parse(dateDep);
//     const daysTillDep = (Math.abs(currentDate-dateUTC)/(24*60*60*1000));
//     if(returntype != "n"){
//         switch (true)  {
//             case daysTillDep < 1:
//                 return "in less than a day!";
//                 break;
//             case daysTillDep == 1:
//                 return "in "+Math.round(daysTillDep)+" day.";
//                 break;
//             case daysTillDep == 0:
//                 return " today!"
//                 break;
//             default:
//                 return "in "+Math.round(daysTillDep)+" days.";
//         } 
//     }
//     return daysTillDep;  
// }

function displayDate(value) {

    const year = value.slice(0,4);
    const month = value.slice(5,7);
    const day = value.slice(8,10);
    // const dateUTC = Date.parse(value);
    return day+"-"+month+"-"+year;
}

export { createAllTripFrag }

