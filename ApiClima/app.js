const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const Apikey = "aac8b143cbfe5c2d58514792803e2326";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon, apikey) {
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaFondo(temperature);
    pintaTemp(temperature);
}

async function getClimaByCity(city, apikey) {
    const url = `${UrlBase}?q=${city}&appid=${apikey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaFondo(temperature);
    pintaTemp(temperature);
}

function pintaTemp(temp) {
    const h3 = document.querySelector('h3');
    if (temp < 10) {
        h3.innerHTML = `${temp}°C ❄️❄️❄️`;
    } else if (temp < 20) {
        h3.innerHTML = `${temp}°C ☁️☁️☁️`;
    } else {
        h3.innerHTML = `${temp}°C ☀️☀️☀️`;
    }

}

function pintaFondo(temp) {
    const fondo = document.querySelector('body');
    if (temp < 10) {
        fondo.style.background = '#544881';
    } else if (temp < 20) {
        fondo.style.background = '#fdfd96';
    } else {
        fondo.style.background = "#ec5252";
    }
}

navigator.geolocation.getCurrentPosition(
    positon => {
        const lat = positon.coords.latitude;
        const lon = positon.coords.longitude;
        console.log(lat, lon);
        getClima(lat, lon, Apikey);
    }
)

btnCiudad.addEventListener('click', () => {
    const city = inputCity.value;
    if (city) {
        getClimaByCity(city, Apikey);
    }
});