function daysUntilDep( dateDep, returntype ) {
    const currentDate = new Date();
    const dateUTC = Date.parse(dateDep);
    const daysTillDep = (Math.abs(currentDate-dateUTC)/(24*60*60*1000));
    if(returntype != "n"){
        switch (true)  {
            case daysTillDep < 1:
                return "in less than a day!";
                break;
            case daysTillDep == 1:
                return "in "+Math.round(daysTillDep)+" day.";
                break;
            case daysTillDep == 0:
                return " today!"
                break;
            default:
                return "in "+Math.round(daysTillDep)+" days.";
        } 
    }
    return daysTillDep;  
}

export { daysUntilDep }