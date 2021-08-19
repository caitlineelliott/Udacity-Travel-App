let userTripData = [];

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
const { text } = require("body-parser");
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

const port = 3000;

// Spin up the server & Callback to debug
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData(req, res) { res.send(userTripData); };

// REQUESTS & ROUTES

// Post Route
app.post('/api/trip', addTripData);
app.post('/list', addListData);
app.post('/tripdates', changeTripDates);

function addTripData(req, res) {
    const newData = req.body;

    let projectData = {}

    projectData["city"] = newData.city;
    projectData["departure"] = new Date(JSON.parse(JSON.stringify(new Date(newData.departure))));
    projectData["displayDepart"] = newData.displayDepart;
    projectData["arrival"] = new Date(JSON.parse(JSON.stringify(new Date(newData.arrival))));
    projectData["displayReturn"] = newData.displayReturn;
    projectData["packingList"] = newData.packingList;
    projectData["todoList"] = newData.todoList;
    projectData["weather"] = newData.weather;

    userTripData.push(projectData)
    //https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    function compareData(a, b) {
        const tripA = a.departure;
        const tripB = b.departure;
        let comparison = 0;

        if (tripA > tripB) { comparison = 1; }
        else if (tripA < tripB) { comparison = -1; }
        return comparison;
    }
    userTripData.sort(compareData);
    res.send(userTripData);
};

function addListData(req, res) {
    const newData = req.body;

    for (let i = 0; i < userTripData.length; i++) {
        let departDOM = `${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)}`;
        let returnDOM = `${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)}`;
        let departMM = (userTripData[i].departure.getMonth() + 1 < 10) ? `0${userTripData[i].departure.getMonth() + 1}` : `${userTripData[i].departure.getMonth() + 1}`
        let departDD = (userTripData[i].departure.getDate() + 1 < 10) ? `0${userTripData[i].departure.getDate()}` : `${userTripData[i].departure.getDate()}`
        let returnMM = (userTripData[i].arrival.getMonth() + 1 < 10) ? `0${userTripData[i].arrival.getMonth() + 1}` : `${userTripData[i].arrival.getMonth() + 1}`
        let returnDD = (userTripData[i].arrival.getDate() + 1 < 10) ? `0${userTripData[i].arrival.getDate()}` : `${userTripData[i].arrival.getDate()}`
        let departServer = `${departMM}-${departDD}`
        let returnServer = `${returnMM}-${returnDD}`

        let length = newData.list.length;
        // code for packing list & for lists with no items
        if (userTripData[i].city === newData.city && departServer === departDOM && returnServer === returnDOM) {
            let currentTrip = userTripData[i]
            for (let i = 0; i < length; i++) {
                if (newData.list[i]['listType'] === 'todo') {
                    currentTrip['todoList'] = newData.list;
                    if (newData.list[i]['item'] === null) { currentTrip['todoList'] = []; }
                } else if (newData.list[i]['listType'] === 'packing') {
                    currentTrip['packingList'] = newData.list;
                    if (newData.list[i]['item'] === null) { currentTrip['packingList'] = []; }
                }
            }
        }
    }
};

async function changeTripDates(req, res) {
    let newData = req.body;

    for (let i = 0; i < userTripData.length; i++) {
        // change trip dates - on initial request
        if (newData.weatherTest == userTripData[i].weather[0].weather) {
            userTripData[i]['displayDepart'] = newData.depart;
            userTripData[i]['displayReturn'] = newData.return;
            userTripData[i]['departure'] = new Date(`2021-${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)} 00:00:00`);
            userTripData[i]['arrival'] = new Date(`2021-${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)} 00:00:00`);

            let newDepart = userTripData[i]['departure']
            let newReturn = userTripData[i]['arrival']

            let tripCity = newData.city;
            const geonamesInfo = await getGeonames(tripCity, 'ceelliott');
            let weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

            let forecast = weatherInfo.data;
            let dates = [];
            for (let i = 0; i < forecast.length; i++) { dates[i] = new Date(`${forecast[i].datetime}T04:00:00.000Z`); }

            let newWeather = []
            for (let i = 0; i < dates.length; i++) {
                if (dates[i] >= newDepart && dates[i] <= newReturn) {
                    let tripDayData = {}
                    tripDayData['date'] = `${dates[i].getMonth() + 1}/${dates[i].toString().slice(8, 10)}`;
                    tripDayData['weatherIcon'] = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
                    tripDayData['weather'] = `${forecast[i].high_temp}°F / ${forecast[i].low_temp}°F`;

                    newWeather.push(tripDayData);
                }
            }

            userTripData[i]['weather'] = newWeather;

            // need to sort when changing dates
            function compareData(a, b) {
                const tripA = a.departure;
                const tripB = b.departure;
                let comparison = 0;
                if (tripA > tripB) { comparison = 1; }
                else if (tripA < tripB) { comparison = -1; }
                return comparison;
            }
            userTripData.sort(compareData);
        }
    }
}

app.delete('/remove', removeData);
function removeData(req, res) {
    const newData = req.body;
    for (let i = 0; i < userTripData.length; i++) {
        // whole trip delete
        if (userTripData[i].city === newData.city && userTripData[i].displayDepart === newData.depart && userTripData[i].displayReturn === newData.return) {
            userTripData.splice(i, 1);
        } else { console.log('no'); }
    }
}

// update weather
const getGeonames = async (placename, username) => {
    try {
        const request =
            await fetch(`http://api.geonames.org/searchJSON?q=${placename}&maxRows=1&username=${username}`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
};

const getWeatherBit = async (lat, lng) => {
    try {
        const request =
            await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}&units=I`);
        return await request.json();
    }
    catch (e) { console.log('no weatherbit data :(', e); }
};