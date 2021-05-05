function daysUntilDep( dateDep, returntype) {
    let currentDate = new Date(new Date().toDateString() ).setHours(0,0,0,0);
    // currentDate =(currentDate.getYear()+"-"+currentDate.getMonth()+"-"+currentDate.getDate());
    const dateUTC = new Date(dateDep).setHours(0,0,0,0);
    // const currentDateUTC = Date.parse(currentDate);
    // console.log("Current Date, dateDep ", dateUTC, dateDep);
    const daysTillDep = ((dateUTC-currentDate)/(24*60*60*1000));
    // console.log("daysTillDep", daysTillDep);
    // console.log("dateDep, CurrentDate, Date.parse(currentDate), dateUTC, currentDateUTC ", dateDep, currentDate, Date.parse(currentDate), dateUTC, currentDateUTC);
    if(returntype != "n"){
        switch (true)  {
            case currentDate > dateUTC:
                return " date has passed!"
                break;            
            case currentDate == dateUTC:
                return " today!"
                break;            
            case daysTillDep < 1:
                return "in less than a day.";
                // return "in "+Math.round(daysTillDep)+" day.";
                break;
            case daysTillDep < 2:
                return "in about a day!";
                break;
            default:
                return "in "+Math.round(daysTillDep)+" days.";
        } 
    }
    return daysTillDep;  
}

export { daysUntilDep }