const dotenv = require('dotenv');
dotenv.config();

let userTripData = [];
let unsavedTripData = [];

// Setup empty JS object to act as endpoint for all routes
const fetch = require("node-fetch");

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

const port = 3000;

// Spin up the server & Callback to debug
app.listen(port, serverRunning)
function serverRunning() { console.log('app is listening') };

// Initialize all route with a callback function
// Callback function to complete GET '/all'
const getData = (req, res) => { res.send(userTripData); };
app.get('/all', getData);

const getUnsavedTrip = (req, res) => {
    res.send(unsavedTripData);
    unsavedTripData = []
};
app.get('/api/unsaved', getUnsavedTrip);


// REQUESTS & ROUTES

// Post Route
const addTripData = (req, res) => {
    const newData = req.body;
    let projectData = {};

    projectData.city = newData.city;
    projectData.departure = new Date(JSON.parse(JSON.stringify(new Date(newData.departure))));
    projectData.displayDepart = newData.displayDepart;
    projectData.arrival = new Date(JSON.parse(JSON.stringify(new Date(newData.arrival))));
    projectData.displayReturn = newData.displayReturn;
    projectData.packingList = newData.packingList;
    projectData.todoList = newData.todoList;
    projectData.weather = newData.weather;

    userTripData.push(projectData);
    //Lines 65-73 adapted from: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    const compareData = (a, b) => {
        const tripA = a.departure;
        const tripB = b.departure;
        let comparison = 0;

        if (tripA > tripB) { comparison = 1; }
        else if (tripA < tripB) { comparison = -1; }
        return comparison;
    };
    userTripData.sort(compareData);
    res.send(userTripData);
}

const addListData = (req, res) => {
    const newData = req.body;

    for (let i = 0; i < userTripData.length; i++) {
        let departDOM = `${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)}`;
        let returnDOM = `${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)}`;
        let departMM = (userTripData[i].departure.getMonth() + 1 < 10) ? `0${userTripData[i].departure.getMonth() + 1}` : `${userTripData[i].departure.getMonth() + 1}`;
        let departDD = (userTripData[i].departure.getDate() + 1 < 10) ? `0${userTripData[i].departure.getDate()}` : `${userTripData[i].departure.getDate()}`;
        let returnMM = (userTripData[i].arrival.getMonth() + 1 < 10) ? `0${userTripData[i].arrival.getMonth() + 1}` : `${userTripData[i].arrival.getMonth() + 1}`;
        let returnDD = (userTripData[i].arrival.getDate() + 1 < 10) ? `0${userTripData[i].arrival.getDate()}` : `${userTripData[i].arrival.getDate()}`;
        let departServer = `${departMM}-${departDD}`;
        let returnServer = `${returnMM}-${returnDD}`;

        let length = newData.list.length;
        // code for packing list & for lists with no items
        if (userTripData[i].city === newData.city && departServer === departDOM && returnServer === returnDOM) {
            let currentTrip = userTripData[i];
            for (let i = 0; i < length; i++) {
                if (newData.list[i].listType === 'todo') {
                    currentTrip.todoList = newData.list;
                    if (newData.list[i].item === null) { currentTrip.todoList = []; }
                } else if (newData.list[i].listType === 'packing') {
                    currentTrip.packingList = newData.list;
                    if (newData.list[i].item === null) { currentTrip.packingList = []; }
                }
            }
        }
    }
}

const changeTripDates = async (req, res) => {
    let newData = req.body;

    // need to sort when changing dates
    // Lines 113-120 adapted from: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    const compareData = (a, b) => {
        const tripA = a.departure;
        const tripB = b.departure;
        let comparison = 0;
        if (tripA > tripB) { comparison = 1; }
        else if (tripA < tripB) { comparison = -1; }
        return comparison;
    };

    // finds correct trip and changes dates
    for (let i = 0; i < userTripData.length; i++) {
        if (newData.weatherTest === undefined || newData.weatherTest == userTripData[i].weather[0].weather) {
            userTripData[i].displayDepart = newData.depart;
            userTripData[i].displayReturn = newData.return;
            userTripData[i].departure = new Date(`2021-${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)} 00:00:00`);
            userTripData[i].arrival = new Date(`2021-${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)} 00:00:00`);

            let newDepart = userTripData[i].departure;
            let newReturn = userTripData[i].arrival;

            let tripCity = newData.city;
            const geonamesInfo = await getGeonames(tripCity, process.env.API_ID);
            let weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng, newDepart, undefined);

            let forecast = weatherInfo.data;
            let dates = [];
            for (let i = 0; i < forecast.length; i++) {
                if (forecast[i].datetime.length > 10) {
                    dates[i] = new Date(`${forecast[i].datetime.substring(0, 10)}T04:00:00.000Z`)
                } else { dates[i] = new Date(`${forecast[i].datetime}T04:00:00.000Z`); }
            }

            let newWeather = [];
            let today = new Date();
            today.setHours(0, 0, 0, 0)

            for (let i = 0; i < dates.length; i++) {
                // if using forecast api
                if (dates[i] >= newDepart && dates[i] <= newReturn) {
                    let tripDayData = {};
                    tripDayData.date = `${dates[i].getMonth() + 1}/${dates[i].toString().slice(8, 10)}`;
                    tripDayData.weatherIcon = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
                    tripDayData.weather = `${forecast[i].high_temp}??F / ${forecast[i].low_temp}??F`;
                    newWeather.push(tripDayData);
                } // if using current weather api
                else if (forecast[i].app_temp) {
                    let currentWeather = {};
                    currentWeather.date = `${dates[i].getMonth() + 1}/${dates[i].toString().slice(8, 10)}`;
                    currentWeather.weatherIcon = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
                    currentWeather.weather = `${forecast[i].app_temp}??F`;
                    newWeather.push(currentWeather);
                }
            }
            userTripData[i].weather = newWeather;
            userTripData.sort(compareData);
        }
    }
};

// GET ROUTES
// Jest Test
app.get('/jest', async (req, res) => {
    res.json({ msg: 'passed' })
})


const getAPIData = async (req, res) => {
    // get weather info from apis
    let today = new Date();
    const geonamesInfo = await getGeonames(req.body.city, process.env.API_ID);
    const userCity = geonamesInfo.geonames[0].name;
    const weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng, req.body.departDate, today);

    let apiData = {};
    if (weatherInfo.city_name !== undefined) {
        let weatherAPI = weatherInfo.city_name;
        apiData.whichWeather = weatherAPI;
    } else {
        let weatherAPI = null;
        apiData.whichWeather = weatherAPI;
    }

    // Update Header
    let bannerImg = await getHeaderPhoto(userCity);

    // Update Trip Details
    const currentDate = new Date();
    const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let departDate = new Date(`${req.body.departDate}`);
    let returnDate = new Date(`${req.body.returnDate}`);

    let textDepart = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    let textReturn = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    let tripDaysCount = (((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1) === 1) ? `1 day` : `${Math.round((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24)) + 1} days`;
    let tripNightsCount = ((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) === 1) ? `1 night` : `${Math.round(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24)} days`;
    let tripDaysUntil = (parseInt(((departDate - currentDate) / 1000 / 60 / 60 / 24) + 1) === 1) ? `1 day` : `${parseInt(((departDate - currentDate) / 1000 / 60 / 60 / 24) + 1)} days`;

    apiData.userCity = userCity;
    apiData.urlStatus = bannerImg.hits.length;
    apiData.bannerURL = ` ${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}`;
    apiData.weatherInfo = weatherInfo;
    apiData.departDate = req.body.departDate;
    apiData.returnDate = req.body.returnDate;
    apiData.displayDepart = req.body.displayDepart;
    apiData.displayReturn = req.body.displayReturn;
    apiData.textDepart = textDepart;
    apiData.textReturn = textReturn;
    apiData.tripDaysCount = tripDaysCount;
    apiData.tripNightsCount = tripNightsCount;
    apiData.tripDaysUntil = tripDaysUntil;

    unsavedTripData.push(apiData);
    res.send(unsavedTripData);
}

// Lines 113-117 modified from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

app.post('/api/trip', addTripData);
app.post('/list', addListData);
app.post('/tripdates', changeTripDates);
app.post('/api', getAPIData);

const removeData = (req, res) => {
    const newData = req.body;
    for (let i = 0; i < userTripData.length; i++) {
        // whole trip delete
        if (userTripData[i].city === newData.city && userTripData[i].displayDepart === newData.depart && userTripData[i].displayReturn === newData.return) {
            userTripData.splice(i, 1);
        } else { console.log('no'); }
    }
};

app.delete('/remove', removeData);

// update weather
const getGeonames = async (placename, username) => {
    try {
        const request =
            await fetch(`http://api.geonames.org/searchJSON?q=${placename}&maxRows=1&username=${username}`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
};

const getWeatherBit = async (lat, lng, departDate, today) => {
    try {
        let currentDate = new Date();

        if (today === undefined) {
            let newDate = new Date();
            currentDate = new Date(newDate.setDate(newDate.getDate() + 7));
        } else {
            currentDate = new Date(today.setDate(today.getDate() + 7));
        }
        currentDate.setHours(0, 0, 0, 0)
        let depart = new Date(departDate)

        if (depart > currentDate) { // forecast
            let request = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=${process.env.WEATHERBIT_KEY}&lat=${lat}&lon=${lng}&units=I`);
            return await request.json();
        } else { // current weather
            let request = await fetch(`http://api.weatherbit.io/v2.0/current/daily?&key=${process.env.WEATHERBIT_KEY}&lat=${lat}&lon=${lng}&units=I`);
            return await request.json();
        }
    }
    catch (e) { console.log('no weatherbit data :(', e); }
};

async function getHeaderPhoto(userCity) {
    try {
        const request = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${userCity}&image_type=photo&pretty=true&category=places&orientation=horizontal`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
}

module.exports = app