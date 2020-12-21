//Uses axios to post submitted data to server
//CHECK: Do I need this line?
const axios = require('axios'); 

const axiosPost = async (url = '', data = {}) => {
    console.log("data in axiospost",data);
    //TODO: CLEAR THE UI INPUT
    const dataReturned = await axios.post('http://localhost:8081'+url, data)
    .then(function (dataReturned){
        console.log("axios response to server request",dataReturned);
        return dataReturned;
    })
    .catch( (error) => {
        console.log("Axios error", error);
    })
}

export { axiosPost }