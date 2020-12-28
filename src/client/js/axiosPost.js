//Uses axios to post submitted data to server
const axios = require('axios'); 

const axiosPost = async (url = '', data = {}) => {
    console.log("data in axiospost",data);
    //TODO: CLEAR THE UI INPUT
    const dataReturned = await axios.post('http://localhost:8081'+url, data)
    .then(function (data){
        console.log("axios response to server request",data);
        return data;
    })
    .catch( (error) => {
        console.log("Axios error", error);
    })
    return dataReturned;
}

export { axiosPost }