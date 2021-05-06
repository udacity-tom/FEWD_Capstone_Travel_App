function getTripDuration(dateRet, dateDep) {
    dateDep = new Date(dateDep).setHours(0,0,0,0);
    dateRet = new Date(dateRet).setHours(0,0,0,0);
    return (dateRet-dateDep)/(24*60*60*1000);
}

export { getTripDuration }