//Uses axios to post submitted data to server
//CHECK: Do I need this line?
const axios = require('axios'); 

const axiosPost = async (url = '', data = {}) => {
    console.log("data in axiospost",data);
    //TODO: CLEAR THE UI INPUT
    const response = await axios.post('http://localhost:8081'+url, data)
    .then(function (response){
        console.log("axios response to server request",response);
        return response
    })
    .catch( (error) => {
        console.log("Axios errror", error);
    })
}

export { axiosPost }