const lugar = require('./lugar-clima/lugar-clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la Ciudad para obtener el Clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log('ERROR!!', err);
    })