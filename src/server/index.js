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

// REQUESTS & ROUTES

// Post Route
app.post('/api/trip', addTripData);
app.post('/api/list', addListData);

function addTripData(req, res) {
    const newData = req.body;
    console.log(newData)

    let projectData = {};

    projectData["city"] = newData.city;
    projectData["departure"] = newData.departure;
    projectData["arrival"] = newData.arrival;
    projectData["packingList"] = newData.packingList;
    projectData["todoList"] = newData.todoList;
    projectData["weather"] = newData.weather;

    userTripData.unshift(projectData)

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
    console.log(userTripData)
    console.log(userTripData[0].weather)
};

// COME BACK HERE:
function addListData(req, res) {
    const newData = req.body;
    console.log(newData)

    for (let i = 0; i < userTripData.length; i++) {
        if (userTripData[i].city === newData.tripCity) {
            userTripData[i]["packingList"] = newData.packingList;
            userTripData[i]["todoList"] = newData.todoList;
            console.log('WHOLE LIST', userTripData);
        } else {
            console.log('no')
        }
    }
    console.log(`LIST DATA SUCCESSFUL`);
};

app.delete('/remove', removeData);

function removeData(req, res) {
    const newData = req.body;
    console.log('trip to be deleted', newData)

    for (let i = 0; i < userTripData.length; i++) {
        let departDOM = `${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)}`;
        let returnDOM = `${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)}`;

        let departServer = userTripData[i].departure.slice(5, 10)
        let returnServer = userTripData[i].arrival.slice(5, 10)

        if (userTripData[i].city === newData.city && departServer === departDOM && returnServer === returnDOM) {
            userTripData.splice(i, 1);
            console.log('usertripdata', userTripData)
        } else {
            console.log('no');
        }
    }
}