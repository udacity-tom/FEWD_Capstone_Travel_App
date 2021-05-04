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
    // console.log("from createAllTripFrag, all trip data", allTripData);
    // allTripUL.className("tripsPlannedUL");
    allTripUL.id = "tripsPlannedUL";
    addAllTrips.appendChild(allTripUL);

    for(let i=0; i < allTripData.length; i++){
        const listElement = document.createElement('li');
        const inputElement = document.createElement('input');
        const labelElement = document.createElement('label');
        const divElement = document.createElement('div');
        const container = document.createElement('div');
        const container2 = document.createElement('div');
        const titleElement = document.createElement('h2');
        const paraElement = document.createElement('p');
        const paraElement2 = document.createElement('p');
        
        const imageTwo = document.createElement('img');
        const delButton = document.createElement('button');
        
        const wbitLogoCurrent = document.createElement('img');

        listElement.value = i;
        inputElement.type = "checkbox";
        inputElement.id = "trip"+i;
        inputElement.className = "tripInput";
        labelElement.className = "tripLabel";
        // labelElement.className = "tripLabel";
        labelElement.setAttribute("for", "trip"+i);
        
        delButton.innerText = "Remove Trip";
        delButton.className = "removeTrip";
        delButton.setAttribute("value", "deleteTrip-"+listElement.value);
        delButton.setAttribute("type", "button");
        delButton.id = "removeTrip";



        const labelDiv = document.createElement('div');
        labelDiv.className = "labelDiv";
        const labelPara1 = document.createElement('p');
        const labelPara2 = document.createElement('p');
        // const closeLabel = ""
        labelPara1.innerText = "Trip "+(i+1)+" Depart "+displayDate(allTripData[i].dateDep)+" To "+allTripData[i].finalLocationGeoObj.toponymName+"\nDeparture "+Client.daysUntilDep(allTripData[i].dateDep);
        // labelPara2.innerText = "Click for more details";
        // labelPara2.className = "clickText";

        // labelElement.innerText = "Trip "+(i+1)+" Depart "+displayDate(allTripData[i].dateDep)+" To "+allTripData[i].finalLocationGeoObj.toponymName+"\nDeparture "+Client.daysUntilDep(allTripData[i].dateDep);
        labelDiv.appendChild(labelPara1);
        // labelDiv.appendChild(labelPara2);
        labelDiv.appendChild(delButton);//labelDiv.appendChild(labelPara2);
        labelElement.appendChild(labelDiv);
        
        // labelElement.innerText = "You have planned to depart on "+tripFrom+" and have scheduled to return on "+tripTo+"\nDeparture "+daysUntilDep(allTripData[i].dateDep);
        // displayDate(allTripData[i].dateRet, allTripData[i].dateDep);
        // const daysTillDep = daysUntilDep(allTripData[i].dateDep);
        // labelElement.innerText.appendChild("Days until departure "+daysTillDep);
        // console.log("image source ",allTripData[i].startLocationPixaURL);
        
        
        
        wbitLogoCurrent.src = allTripData[i].startLocationPixaURL;
        wbitLogoCurrent.alt = allTripData[i].startLocationGeoObj.toponymName;
        wbitLogoCurrent.className = "pixaImg";

        imageTwo.src = allTripData[i].finalLocationPixaURL;
        imageTwo.alt = allTripData[i].finalLocationGeoObj.toponymName;
        imageTwo.className = "pixaImg";
        titleElement.innerText = "Your trip planned for "+new Date(allTripData[i].dateDep).toDateString()+" to "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" \n";
        // titleElement.innerText = "Your trip planned for: "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" ("+displayDate(allTripData[i].dateDep)+")"+"\n";
        // console.log("todate string, type of ", new Date(allTripData[i].dateDep).toDateString(),typeof(Date(allTripData[i].dateDep)));
        titleElement.className = "tripDetails";
        // console.log("Date without feedback",displayDate(allTripData[i].dateDep,"n"));
        const paraText1 = "Your trip planned to "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" "+(Client.daysUntilDep(allTripData[i].dateDep,"n") < 0 ? "has already passed!" : "will begin "+Client.daysUntilDep(allTripData[i].dateDep))+"\n";
        const paraText2 = "Departing: "+allTripData[i].startLocationGeoObj.toponymName+", "+allTripData[i].startLocationGeoObj.countryName+". Departure Date: "+displayDate(allTripData[i].dateDep)+"\n";
        
        
        const paraText12 = "Current weather in "+allTripData[i].startLocationGeoObj.toponymName+" is: "+allTripData[i].startLocationWbitForecastObj.data.data[0].weather.description+" High: "+allTripData[i].startLocationWbitForecastObj.data.data[0].high_temp+" Low: "+allTripData[i].startLocationWbitForecastObj.data.data[0].low_temp +" (Degrees Centigrade)\n";
        // const paraText22 = weatherFinal1
        
        // const tripFrom = displayDate(allTripData[i].dateDep)+" from "+allTripData[i].startLocationGeoObj.toponymName+", "+allTripData[i].startLocationGeoObj.countryCode;
        // const tripTo = displayDate(allTripData[i].dateRet)+" from "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryCode;
        // labelElement.innerText = "You have planned to depart on "+tripFrom+" and have scheduled to return on "+tripTo+"\nDeparture "+daysUntilDep(allTripData[i].dateDep);
        const paraWbit1 = document.createElement('p');
        const paraWbit2 = document.createElement('p');
        
        
        const weatherFinal1 = "Today's weather in "+allTripData[i].finalLocationGeoObj.toponymName+" is: "+allTripData[i].finalLocationWbitForecastObj.data.data[0].weather.description+" High: "+allTripData[i].finalLocationWbitForecastObj.data.data[0].high_temp+" Low: "+allTripData[i].finalLocationWbitForecastObj.data.data[0].low_temp +" (Degrees Centigrade)\n"
        paraWbit1.innerText = weatherFinal1;
        paraWbit1.className = "paraWbit11";
        const paraText22 = weatherFinal1;

        //ToDo 22-4-21: text title to describe, with weather icons for next seven days 
        // const weatherfinal2 =
        //ToDo 04-5-21: forecast for next seven days. weatherbitArrayForecast.forEach(), then add each logo, with high/low temps

        
        
        // inputElement.type = "checkbox";
        
        paraElement.className = "tripText1";
        
        paraElement2.className = "tripText2";
        paraElement2.innerText = paraText12+paraText22;
        paraElement.innerText = paraText1+paraText2+paraText12+paraText22;
        container.className = "container";
        container.appendChild(titleElement);
        container2.className = "container2";
        container2.appendChild(imageTwo);
        container2.appendChild(paraElement);

        // container.appendChild(wbitLogoCurrent);
        // container.appendChild(paraElement2);
        
        
        divElement.className = "tripContent";
        divElement.appendChild(container);
        divElement.appendChild(container2);

        // divElement.appendChild(container);

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
    return day+"/"+month+"/"+year;
}

export { createAllTripFrag }

