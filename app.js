const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}°C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(9.9280694, -84.0907246)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
// console.log(argv.direccion);