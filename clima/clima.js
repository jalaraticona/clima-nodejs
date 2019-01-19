const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=714c34fa81350eb297fcef4c65260cda`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}