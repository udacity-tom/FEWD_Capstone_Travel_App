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
        const container = document.createElement('div'); //Trip Title/summary
        const container2 = document.createElement('div');//Trip details and Wbit forecast
        const titleElement = document.createElement('h2');
        const tripText1 = document.createElement('p');//Summary trip details
        // const paraElement2 = document.createElement('p');
        
        const finalDestImage = document.createElement('img');//pixabay image of finaldestination
        const delButton = document.createElement('button');
        
        // const wbitLogoCurrent = document.createElement('img');

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
        labelDiv.appendChild(labelPara1);
        labelDiv.appendChild(delButton);//labelDiv.appendChild(labelPara2);
        labelElement.appendChild(labelDiv);
        
        
        // wbitLogoCurrent.src = allTripData[i].startLocationPixaURL;
        // wbitLogoCurrent.alt = allTripData[i].startLocationGeoObj.toponymName;
        // wbitLogoCurrent.className = "pixaImg";

        finalDestImage.src = allTripData[i].finalLocationPixaURL;
        finalDestImage.alt = "Image of "+allTripData[i].finalLocationGeoObj.toponymName;
        finalDestImage.className = "pixaImg";
        titleElement.innerText = "Your trip for "+new Date(allTripData[i].dateDep).toDateString()+" to "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" \n";
        titleElement.className = "tripDetails";
        const paraText1 = "Your trip to "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" "+(Client.daysUntilDep(allTripData[i].dateDep,"n") < 0 ? "has already passed!" : "will begin "+Client.daysUntilDep(allTripData[i].dateDep))+"\n";
        const paraText2 = "Departing: "+allTripData[i].startLocationGeoObj.toponymName+", "+allTripData[i].startLocationGeoObj.countryName+". Departure Date: "+displayDate(allTripData[i].dateDep)+"\n";
        const paraText12 = "Current weather in "+allTripData[i].startLocationGeoObj.toponymName+" is: "+allTripData[i].startLocationWbitForecastObj.data.data[0].weather.description+" High: "+allTripData[i].startLocationWbitForecastObj.data.data[0].high_temp+" Low: "+allTripData[i].startLocationWbitForecastObj.data.data[0].low_temp +" (Degrees Centigrade)\n";
        const paraWbit1 = document.createElement('p');
        // const paraWbit2 = document.createElement('p');
        

        //
        const weatherDesc = "Today's weather in "+allTripData[i].finalLocationGeoObj.toponymName+" is: "+allTripData[i].finalLocationWbitForecastObj.data.data[0].weather.description+" High: "+allTripData[i].finalLocationWbitForecastObj.data.data[0].high_temp+" Low: "+allTripData[i].finalLocationWbitForecastObj.data.data[0].low_temp +" (Degrees Centigrade)\n"
        paraWbit1.innerText = weatherDesc;
        paraWbit1.className = "paraWbit11";
        // const paraText22 = weatherDesc;
        
        function getDateFormat(date) {
            date = new Date(date);
            const dateNum = date.getDate();
            const month = date.getMonth()+1;
            const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            const day = days[date.getDay()];
            return day+" "+dateNum+"/"+month;
        }
        //ToDo 04-5-21: forecast for next seven days. weatherbitArrayForecast.forEach(), then add each logo, with high/low temps

        //WeatherForecastDiv->Is a 7 day weather forecast based on the Wbit data supplied for destination.
        const weatherForecastDiv = document.createElement('div');
        weatherForecastDiv.className = "weatherForecastDiv";
        const weatherForecastDivIcons = document.createElement('div');
        weatherForecastDivIcons.className = "weatherForecast";
        const weatherForecastTitle = document.createElement('h2');
        weatherForecastTitle.className = "forecastTitle";
        weatherForecastTitle.innerText = "\n\nExpected Weather for "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" \n";
        weatherForecastDiv.appendChild(weatherForecastTitle);
        const weatherForecastPara = document.createElement('p');
        const weatherForecastDivDaily = document.createElement('div');
        const currentItem = allTripData[i].finalLocationWbitForecastObj.data;
        currentItem.data.slice(1,8).forEach( (item) => {
            // const weatherIconDiv = document.createElement('div');
            const weatherPara = document.createElement('p');
            weatherPara.className = "iconDetails"
            const weatherForecastImg = document.createElement('img');
            const weatherDate = document.createElement('p');
            const weatherHigh = document.createElement('p');
            const weatherLow = document.createElement('p');
            weatherForecastImg.src = "./img/"+item.weather.icon+".png";
            weatherForecastImg.alt = item.weather.description;
            weatherForecastImg.label = item.weather.description;
            weatherForecastImg.className = "iconFormat";
            weatherDate.innerText = getDateFormat(item.valid_date);
            weatherHigh.innerText = "High: "+item.high_temp;
            weatherLow.innerText = "Low: "+item.low_temp;

            
            weatherPara.appendChild(weatherForecastImg);
            weatherPara.appendChild(weatherDate);
            weatherPara.appendChild(weatherHigh);
            weatherPara.appendChild(weatherLow);
            weatherForecastDivIcons.appendChild(weatherPara);
        })
        weatherForecastDiv.appendChild(weatherForecastDivIcons);
        
        //tripText1: Main TripText description: start and finish locations/dates/ Current weather in both locations
        tripText1.className = "tripText1";
        tripText1.innerText = paraText1+paraText2+paraText12+weatherDesc;
        // paraElement2.className = "tripText2";
        // paraElement2.innerText = paraText12+paraText22+weatherForecastDiv;

        
        
        //place tripText1 at top of div container together with 7-day forecast

        const weatherDetails = document.createElement('div');
        weatherDetails.appendChild(tripText1);
        weatherDetails.appendChild(weatherForecastDiv);

        container.className = "container";
        container.appendChild(titleElement);
        container2.className = "container2";
        container2.appendChild(finalDestImage);
        container2.appendChild(weatherDetails);
        // container2.appendChild(tripText1);
        // container2.appendChild(weatherForecastDiv);
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

