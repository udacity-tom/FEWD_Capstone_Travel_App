function daysUntilDep( dateDep, returntype ) {
    let currentDate = new Date()
    // currentDate =(currentDate.getYear()+"-"+currentDate.getMonth()+"-"+currentDate.getDate());
    const dateUTC = Date.parse(dateDep);
    const daysTillDep = (Math.abs(currentDate-dateUTC)/(24*60*60*1000));
    console.log("dateDep, CurrentDate, Date.parse(currentDate), dateUTC ", dateDep, currentDate,Date.parse(currentDate), dateUTC);
    if(returntype != "n"){
        switch (true)  {
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