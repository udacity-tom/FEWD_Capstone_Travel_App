function getTripDuration(dateRet, dateDep) {
    console.log("dateDep, dateRet",dateDep, dateRet);
    dateDep = new Date(dateDep).setHours(0,0,0,0);
    dateRet = new Date(dateRet).setHours(0,0,0,0);
    console.log("dateDep, dateRet",dateDep, dateRet);
return (dateRet-dateDep)/(24*60*60*1000);

    const dateDepUTC = Date.parse(dateDep);
const dateRetUTC = Date.parse(dateRet);
const days = (dateRetUTC-dateDepUTC)/(24*60*60*1000);


}

export { getTripDuration }