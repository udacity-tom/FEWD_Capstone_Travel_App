function createAllTripFrag() {
    const allTripList = document.createDocumentFragment();
    const allTripUL = document.createElement('ul');
    const addAllTrips = document.getElementById("tripsPlanned");
    const tripsSummary = document.getElementById("tripsSummary");
    
    if(!localStorage.allTrips || localStorage.allTrips == undefined) {
        tripsSummary.innerText =  "NO PLANNED TRIPS!";
        return;
    }
    Client.sortAllTrips();
    const allTripData = Client.getAllTripData();// create local var with array of trips.
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
        const finalDestImage = document.createElement('img');//pixabay image of finaldestination
        const delButton = document.createElement('button');

        listElement.value = i;
        inputElement.type = "checkbox";
        inputElement.id = "trip"+i;
        inputElement.className = "tripInput";
        labelElement.className = "tripLabel";

        const daysTillDep = Client.daysUntilDep(allTripData[i].dateDep,"n");
        if (daysTillDep < 0) {
            labelElement.setAttribute("style", "background: #4ca8af;");
        }
        // Client.daysUntilDep(allTripData[i].dateDep
        // labelElement.className = "tripLabel";
        labelElement.setAttribute("for", "trip"+i);
        //Create delete button
        delButton.innerText = "Remove Trip";
        delButton.className = "removeTrip";
        delButton.setAttribute("value", "deleteTrip-"+listElement.value);
        delButton.setAttribute("type", "button");
        delButton.id = "removeTrip";

        

        const labelDiv = document.createElement('div');
        labelDiv.className = "labelDiv";
        labelDiv.setAttribute
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
        //Creates summary text for trip
        finalDestImage.src = allTripData[i].finalLocationPixaURL;
        finalDestImage.alt = "Image of "+allTripData[i].finalLocationGeoObj.toponymName;
        finalDestImage.className = "pixaImg";
        titleElement.innerText = "Your trip for "+new Date(allTripData[i].dateDep).toDateString()+" to "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" \n";
        titleElement.className = "tripDetails";
        const summaryText1 = "Your trip to "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" "+(daysTillDep < 0 ? "has already passed!" : "will begin "+Client.daysUntilDep(allTripData[i].dateDep))+"\n";
        const summaryText2 = "Departing: "+allTripData[i].startLocationGeoObj.toponymName+", "+allTripData[i].startLocationGeoObj.countryName+". Departure Date: "+displayDate(allTripData[i].dateDep)+"\n";
        const tripDur = Client.getTripDuration(allTripData[i].dateRet, allTripData[i].dateDep);
        const tripDuration = "Returning on "+(tripDur == 0 ? "the same day" : getDateFormat(allTripData[i].dateRet)) +", the trip "+(daysTillDep < 0 ? "was " : "is going to be ")+(tripDur == 0 ? "a day trip." : tripDur+" day"+(tripDur > 1 ? "s long. " : " long. "))+"\n";
        
        //Creates summary weather at current and final destination
        const summaryText12 = "Current weather in "+allTripData[i].startLocationGeoObj.toponymName+" is: "+allTripData[i].startLocationWbitForecastObj.data.data[0].weather.description+" High: "+allTripData[i].startLocationWbitForecastObj.data.data[0].high_temp+" Low: "+allTripData[i].startLocationWbitForecastObj.data.data[0].low_temp +" (Degrees Centigrade)\n";
        const paraWbit1 = document.createElement('p');
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
        weatherForecastTitle.innerText = "\n\nWeather forecast for "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" \n";
        weatherForecastDiv.appendChild(weatherForecastTitle);
        const weatherForecastPara = document.createElement('p');
        const weatherForecastDivDaily = document.createElement('div');
        const currentItem = allTripData[i].finalLocationWbitForecastObj.data;
        currentItem.data.slice(1,8).forEach( (item) => {
            // const weatherIconDiv = document.createElement('div');
            const weatherPara = document.createElement('p');
            weatherPara.className = "iconDetails"
            const weatherFigure = document.createElement('figure');
            const weatherFigureCaption = document.createElement('figcaption');
            const weatherForecastImg = document.createElement('img');
            const weatherDate = document.createElement('p');
            const weatherHigh = document.createElement('p');
            const weatherLow = document.createElement('p');
            weatherForecastImg.src = "./img/"+item.weather.icon+".png";
            weatherForecastImg.alt = "weather icon showing "+item.weather.description;
            // weatherForecastImg.setAttribute( "tooltip", item.weather.description);
            weatherFigureCaption.innerText = item.weather.description;

            weatherFigure.className = "iconFormat";
            weatherDate.innerText = getDateFormat(item.valid_date);
            weatherDate.className = "weatherStats";
            weatherHigh.className = "weatherStats";
            weatherLow.className = "weatherStats";
            weatherHigh.innerText = "High: "+item.high_temp;
            weatherLow.innerText = "Low: "+item.low_temp;

            weatherFigure.appendChild(weatherForecastImg);
            weatherFigure.appendChild(weatherFigureCaption);
            weatherPara.appendChild(weatherFigure);
            weatherPara.appendChild(weatherDate);
            weatherPara.appendChild(weatherHigh);
            weatherPara.appendChild(weatherLow);
            weatherForecastDivIcons.appendChild(weatherPara);
        })
        weatherForecastDiv.appendChild(weatherForecastDivIcons);
        
        //tripText1: Main TripText description: start and finish locations/dates/ Current weather in both locations
        tripText1.className = "tripText1";
        tripText1.innerText = summaryText1+tripDuration+summaryText2+summaryText12+weatherDesc;
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
    allTripList.appendChild(allTripUL)
    tripsSummary.appendChild(allTripList);
    tripsSummary.setAttribute('style', "display: block; color: white;");
    
    // const addAllTripList = document.

}

function displayDate(value) {

    const year = value.slice(0,4);
    const month = value.slice(5,7);
    const day = value.slice(8,10);
    // const dateUTC = Date.parse(value);
    return day+"/"+month+"/"+year;
}

export { createAllTripFrag }

