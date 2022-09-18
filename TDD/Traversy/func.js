const axios = require("axios");

const funcs = {

    fetchUserAsyncAwait: async ()=> {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        return response.data;      
    },

    fetchUserPromise: ()=> axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.data)
        .catch(err => "error")

}

module.exports = funcs

