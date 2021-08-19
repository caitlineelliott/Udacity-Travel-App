import { viewNewTrip } from './viewNewTrip'
import { getGeonames, getWeatherBit } from './apiRequests'

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

document.querySelector('.return-date').addEventListener('click', function () {
    document.querySelector('.return-date').setAttribute("min", departDate.value);
});

// Generate trip data
document.querySelector('#initial-request-form').addEventListener('submit', function (event) { generate(event) });

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

export { generate }