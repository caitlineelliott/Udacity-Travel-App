import { viewNewTrip } from './viewNewTrip';
import { getUserData, postData, getUnsavedTrip } from './serverRequests';
import { displayLongForecast } from './displayWeather';

// Lines 5-12 from StackOverflow: https://stackoverflow.com/questions/45529028/html-input-type-date-field-constraints
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) { dd = '0' + dd; }
if (mm < 10) { mm = '0' + mm; }
let currentDate = yyyy + '-' + mm + '-' + dd;

document.addEventListener('DOMContentLoaded', function () {
    let departDate = document.querySelector('.depart-date');
    departDate.setAttribute("min", currentDate);

    document.querySelector('.return-date').addEventListener('click', function () {
        document.querySelector('.return-date').setAttribute("min", departDate.value);
    });

    document.querySelector('#initial-request-form').addEventListener('submit', function (event) { generate(event); });
});

// Generate trip data
const generate = async (event) => {
    event.preventDefault();

    console.log('TESTING')

    const tripCity = document.querySelector('.user-city').value;
    const formDepart = document.querySelector('.depart-date').value;
    const formReturn = document.querySelector('.return-date').value;
    const departDate = new Date(`${formDepart} 00:00:00`);
    const returnDate = new Date(`${formReturn} 00:00:00`);
    const displayDepart = `${formDepart.slice(5, 7)}/${formDepart.slice(8, 10)}`;
    const displayReturn = `${formReturn.slice(5, 7)}/${formReturn.slice(8, 10)}`;

    await postData('/api', { city: tripCity, departDate: departDate, returnDate: returnDate, displayDepart: displayDepart, displayReturn: displayReturn });
    await getUnsavedTrip('/api/unsaved');
};

export { generate };