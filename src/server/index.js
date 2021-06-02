// Setup empty JS object to act as endpoint for all routes
const fetch = require("node-fetch");

let projectData = {};
let userTripData = [];

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

// Spin up the server
// Callback to debug
const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData(req, res) {
    res.send(userTripData);
};

// Post Route
app.post('/api/trip', addTripData);
app.post('/api/list', addListData);

function addTripData(req, res) {
    const newData = req.body;

    let projectData = {};

    console.log(newData)

    projectData["city"] = newData.city;
    projectData["departure"] = newData.departure;
    projectData["arrival"] = newData.arrival;

    userTripData.unshift(projectData)

    console.log(userTripData);
    res.send(userTripData);

    const dateTime = () => {
        let today = new Date();
        let date = `${today.getMonth()}.${today.getDate()}.${today.getFullYear()}`;
        if (today.getHours() > 12) {
            let dateTime = `${date} at ${today.getHours() - 12}:${today.getMinutes()}:${today.getSeconds()} p.m.`;
            return dateTime;
        } else {
            let dateTime = `${date} at ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} a.m.`;
            return dateTime;
        }
    }
    console.log(`DATA SUCCESSFULLY POSTED ON ${dateTime()}`);
};

function addListData(req, res) {
    const newData = req.body;

    console.log('userTripData', userTripData[0].city);
    console.log('tripCity', newData)

    if (userTripData[0].city === newData.tripCity) {
        console.log('yes!')
        projectData[0]["packList"] = newData.packingList; // doesn't work
        console.log(projectData);
    }

    console.log(`LIST DATA SUCCESSFUL`);
};