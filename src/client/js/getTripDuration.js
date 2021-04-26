function getTripDuration(dateDep, dateRet) {
return (Date.parse(dateRetUTC)-Date.parse(dateDepUTC))/(24*60*60*1000);

    const dateDepUTC = Date.parse(dateDep);
const dateRetUTC = Date.parse(dateRet);
const days = (dateRetUTC-dateDepUTC)/(24*60*60*1000);


}

export { getTripDuration }