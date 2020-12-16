const { updateUI } = require("..");

function errorHandling(error){
    const errorsLocation = document.getElementById("errors");
    errorsLocation.innerHTML = "Error Code: " + error.code + " Error Mesage: "+ error.msg;
}

export { errorHandling }