const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${dir}&APPID=17692acc641c429f0f16f167147ff1e2`
    });

    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;

    try {
        return `El Clima de ${direccion} con las coordenadas: Latitude ${lat} y Longitud ${lng} es de ${temp}, con una humedad de ${humidity},
        así mismo con Cielo ${main} y detallado en ${description}`;
    } catch (error) {
        return `No se ha determinado la información del Clima de ${direccion}`;
    }
}

module.exports = {
    getLugarLatLng
}