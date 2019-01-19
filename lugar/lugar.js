const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    // console.log('Direccion:', location.formatted_address);
    // console.log('Latitud: ', location.geometry.bounds.northeast.lat);
    // console.log('Longitud:', location.geometry.bounds.northeast.lng);

    // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}
module.exports = {
    getLugarLatLng
}