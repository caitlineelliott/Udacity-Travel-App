import { viewNewTrip } from './viewNewTrip'

// Lines 5-12 from StackOverflow: https://stackoverflow.com/questions/45529028/html-input-type-date-field-constraints
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) { dd = '0' + dd }
if (mm < 10) { mm = '0' + mm }
today = yyyy + '-' + mm + '-' + dd;

let departDate = document.querySelector('.depart-date');
departDate.setAttribute("min", today);

document.querySelector('.return-date').addEventListener('click', function (event) {
    document.querySelector('.return-date').setAttribute("min", departDate.value);
})

// Generate trip data
document.querySelector('#initial-request').addEventListener('submit', function (event) { generate(event) });

async function generate(event) {
    event.preventDefault();

    const tripCity = document.querySelector('.user-city').value
    const formDepart = document.querySelector('.depart-date').value;
    const formReturn = document.querySelector('.return-date').value;

    const departDate = new Date(`${formDepart} 00:00:00`);
    const returnDate = new Date(`${formReturn} 00:00:00`);
    const displayDepart = `${formDepart.slice(5, 7)}/${formDepart.slice(8, 10)}`
    const displayReturn = `${formReturn.slice(5, 7)}/${formReturn.slice(8, 10)}`

    const geonamesInfo = await getGeonames(tripCity, 'ceelliott'); // put username in .env file
    const userCity = geonamesInfo.geonames[0].name;
    const weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    viewNewTrip(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo);
}

const getGeonames = async (placename, username) => {
    try {
        const request = await fetch(`http://api.geonames.org/searchJSON?q=${placename}&maxRows=1&username=${username}`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
};

const getWeatherBit = async (lat, lng) => {
    try {
        const request = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}&units=I`);
        return await request.json();
    }
    catch (e) { console.log('no weatherbit data :(', e); }
};

export {
    generate,
    getGeonames,
    getWeatherBit
}