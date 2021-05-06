//Uses axios to post submitted data to server
const axios = require('axios'); 
const axiosPost = async (url = '', data = {}) => {
    const dataReturned = await axios.post('http://localhost:8081'+url, data)
    .then(function (data){
        return data;
    })
    .catch( (error) => {
        console.log("Axios error", error);
    })
    return dataReturned;
}

export { axiosPost }