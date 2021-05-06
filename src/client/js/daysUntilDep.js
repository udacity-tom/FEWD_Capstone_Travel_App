function daysUntilDep( dateDep, returntype) {
    let currentDate = new Date(new Date().toDateString() ).setHours(0,0,0,0);
    const dateUTC = new Date(dateDep).setHours(0,0,0,0);
    const daysTillDep = ((dateUTC-currentDate)/(24*60*60*1000));
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