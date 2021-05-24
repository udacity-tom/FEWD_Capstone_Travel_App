import { getAllTripData } from './getAllTripData';
import { sortAllTrips } from './sortAllTrips';
import { daysUntilDep } from './daysUntilDep';
import { getTripDuration } from './getTripDuration';
function createAllTripFrag() {
    const allTripList = document.createDocumentFragment();
    const allTripUL = document.createElement('ul');
    const addAllTrips = document.getElementById("tripsPlanned");
    const tripsSummary = document.getElementById("tripsSummary");
    
    if(!localStorage.allTrips || localStorage.allTrips == undefined || null) {
        tripsSummary.innerText =  "NO PLANNED TRIPS!";
        return;
    }
    sortAllTrips(); //Sort trips in date order
    const allTripData = getAllTripData();// create local var with array of trips.
    allTripUL.id = "tripsPlannedUL";
    addAllTrips.appendChild(allTripUL);

    for(let i=0; i < allTripData.length; i++){
        const listElement = document.createElement('li');
        const inputElement = document.createElement('input');
        const labelElement = document.createElement('label');
        const divElement = document.createElement('div');
        const container = document.createElement('div'); //Trip Title/summary
        const container2 = document.createElement('div');//Trip details and Wbit forecast
        const titleElement = document.createElement('h2');//Trip Title h2
        const tripText = document.createElement('p');//Summary trip details
        const finalDestImage = document.createElement('img');//pixabay image of finaldestination
        const delButton = document.createElement('button');
        const archiveButton = document.createElement('button');

        listElement.value = i;
        inputElement.type = "checkbox";
        inputElement.checked = true;
        inputElement.id = "trip"+i;
        inputElement.className = "tripInput";
        labelElement.className = "tripLabel";

        const daysTillDep = daysUntilDep(allTripData[i].dateDep,"n");
        if (daysTillDep < 0) {
            labelElement.setAttribute("style", "background: #4ca8af;");
        }

        labelElement.setAttribute("for", "trip"+i);
        //Create delete button
        delButton.innerText = "Remove Trip";
        delButton.className = "removeTrip";
        delButton.setAttribute("value", "deleteTrip-"+listElement.value);
        delButton.setAttribute("type", "button");
        delButton.id = "removeTrip";
        //create archive button to archive trip and place at the end of the list
        archiveButton.innerText = "Archive Trip";
        archiveButton.className = "archiveTrip";
        archiveButton.setAttribute("value", "archiveTrip-"+listElement.value);
        archiveButton.setAttribute("type", "button");
        archiveButton.id = "archiveTrip";
        
        //Create UL titles for overlay of trips
        const labelDiv = document.createElement('div');
        labelDiv.className = "labelDiv";
        labelDiv.setAttribute
        const labelPara1 = document.createElement('p');
        const labelPara2 = document.createElement('p');
        labelPara1.innerText = `Trip ${i+1} Depart ${displayDate(allTripData[i].dateDep)} To ${allTripData[i].finalLocationGeoObj.toponymName}\nDeparture ${daysUntilDep(allTripData[i].dateDep)}`;
        labelDiv.appendChild(labelPara1);
        labelDiv.appendChild(delButton);
        labelElement.appendChild(labelDiv);
        
        //Creates summary text for trip
        finalDestImage.src = allTripData[i].finalLocationPixaURL;
        finalDestImage.alt = "Image of "+allTripData[i].finalLocationGeoObj.toponymName;
        finalDestImage.className = "pixaImg";
        titleElement.innerText = `Your trip for ${new Date(allTripData[i].dateDep).toDateString()} to ${allTripData[i].finalLocationGeoObj.toponymName}, ${allTripData[i].finalLocationGeoObj.countryName} \n`;
        titleElement.className = "tripDetails";
        //Trp text creation
        const tripSummary = document.createElement('p');
        tripSummary.innerText = `Your trip to ${allTripData[i].finalLocationGeoObj.toponymName}, ${allTripData[i].finalLocationGeoObj.countryName} ${(daysTillDep < 0 ? "has already passed!" : "will begin "+daysUntilDep(allTripData[i].dateDep))}\n`;
        const departureInfo = document.createElement('p');
        departureInfo.innerText = `Departing: ${allTripData[i].startLocationGeoObj.toponymName}, ${allTripData[i].startLocationGeoObj.countryName}. Departure Date: ${displayDate(allTripData[i].dateDep)}\n`;
        const tripDurationNum =  getTripDuration(allTripData[i].dateRet, allTripData[i].dateDep);
        const tripDuration = document.createElement('p');
        tripDuration.innerText = `Returning on ${(tripDurationNum == 0 ? "the same day" : getDateFormat(allTripData[i].dateRet))}, the trip ${(daysTillDep < 0 ? "was " : "is going to be ")}${(tripDurationNum == 0 ? "a day trip." : tripDurationNum+" day"+(tripDurationNum > 1 ? "s long. " : " long. "))}\n`;
        
        //Creates summary weather at current and final destination
        const weatherStartLocation = document.createElement('p');
        weatherStartLocation.innerText = `Current weather in ${allTripData[i].startLocationGeoObj.toponymName} is: ${allTripData[i].startLocationWbitForecastObj.data.data[0].weather.description}, High: ${allTripData[i].startLocationWbitForecastObj.data.data[0].high_temp}°C Low: ${allTripData[i].startLocationWbitForecastObj.data.data[0].low_temp}°C\n`;
        const weatherFinalLocation = document.createElement('p');
        weatherFinalLocation.innerText = `Today's weather in ${allTripData[i].finalLocationGeoObj.toponymName} is: ${allTripData[i].finalLocationWbitForecastObj.data.data[0].weather.description}, High: ${allTripData[i].finalLocationWbitForecastObj.data.data[0].high_temp}°C Low: ${allTripData[i].finalLocationWbitForecastObj.data.data[0].low_temp}°C\n`
        
        // Povides date format for weather forcast icons
        function getDateFormat(date) {
            date = new Date(date);
            const dateNum = date.getDate();
            const month = date.getMonth()+1;
            const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            const day = days[date.getDay()];
            return day+" "+dateNum+"/"+month;
        }

        //sets up pieces for 7 day weather forecast based on the Wbit data supplied for destination.
        const weatherForecastDiv = document.createElement('div');
        weatherForecastDiv.className = "weatherForecastDiv";
        const weatherForecastDivIcons = document.createElement('div');
        weatherForecastDivIcons.className = "weatherForecast";
        const weatherForecastTitle = document.createElement('h2');
        weatherForecastTitle.className = "forecastTitle";
        weatherForecastTitle.innerText = "\n\nSeven day forecast for "+allTripData[i].finalLocationGeoObj.toponymName+", "+allTripData[i].finalLocationGeoObj.countryName+" \n";
        weatherForecastDiv.appendChild(weatherForecastTitle);
        
        //Creates Wbit weather icon, high and low temp with hover text description of weather
        const currentItem = allTripData[i].finalLocationWbitForecastObj.data;
        currentItem.data.slice(1,8).forEach( (item) => {
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
        
        //Main TripText description: start and finish locations/dates/ Current weather in both locations
        tripText.className = "tripText";
        // tripText.appendChild(tripSummary);
        tripText.innerText = tripDuration+departureInfo+weatherStartLocation+weatherFinalLocation;

        //creating the final document fragment before updating the view
        const weatherDetails = document.createElement('div');
        weatherDetails.className = "weatherDetails";
        
        weatherDetails.appendChild(tripSummary);
        weatherDetails.appendChild(tripDuration);
        weatherDetails.appendChild(departureInfo);
        weatherDetails.appendChild(weatherStartLocation);
        weatherDetails.appendChild(weatherFinalLocation);
        weatherDetails.appendChild(weatherForecastDiv);

        container.className = "container";
        container.appendChild(titleElement);
        container2.className = "container2";
        container2.appendChild(finalDestImage);
        container2.appendChild(weatherDetails);
        divElement.className = "tripContent";
        divElement.appendChild(container);
        divElement.appendChild(container2);

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
}

function displayDate(value) {
    const year = value.slice(0,4);
    const month = value.slice(5,7);
    const day = value.slice(8,10);
    return day+"/"+month+"/"+year;
}

export { createAllTripFrag }

