// Setup empty JS object to act as endpoint for all routes
const fetch = require("node-fetch");

projectData = {};

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
    res.send(projectData);
};

// Post Route
app.post('/api/add', addData);

function addData(req, res) {
    const newData = req.body;
    projectData["city"] = newData.city;
    projectData["departure"] = newData.departure;
    projectData["arrival"] = newData.arrival;
    console.log(projectData);
    res.send(projectData);

    getGeonames(newData.city, 'ceelliott');

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

const getGeonames = async (placename, username) => {

    baseURL = 'http://api.geonames.org/searchJSON?q=';
    try {
        const request =
            await fetch(`${baseURL}placename=${placename}&maxRows=1&username=${username}`);
        console.log('request successful to geonames');
        return await request.json();
    }

    catch (e) {
        console.log('FAILED TO FETCH WEATHER API DATA:', e);
    }
};