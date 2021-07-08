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
app.post('/list', addListData);
app.post('/tripdates', changeTripDates);
app.post('/toggle', changeItemToggle);

function addTripData(req, res) {
    const newData = req.body;

    let projectData = {};

    projectData["city"] = newData.city;
    projectData["departure"] = newData.departure;
    projectData["displayDepart"] = newData.displayDepart;
    projectData["arrival"] = newData.arrival;
    projectData["displayReturn"] = newData.displayReturn;
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
};

// COME BACK HERE:
function addListData(req, res) {
    const newData = req.body;
    console.log(newData);
    console.log(userTripData);

    for (let i = 0; i < userTripData.length; i++) {
        let departDOM = `${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)}`;
        let returnDOM = `${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)}`;

        let departServer = userTripData[i].departure.slice(5, 10);
        let returnServer = userTripData[i].arrival.slice(5, 10);

        if (userTripData[i].city === newData.city && departServer === departDOM && returnServer === returnDOM) {
            userTripData[i]['packingList'] = newData.list;
            console.log(userTripData[i]['packingList']);
        } else {
            console.log('no');
        }
    }

    // for (let i = 0; i < userTripData.length; i++) {
    //     if (userTripData[i].city === newData.tripCity) {
    //         userTripData[i]["packingList"] = newData.packingList;
    //         userTripData[i]["todoList"] = newData.todoList;
    //     } else {
    //         console.log('no')
    //     }
    // }
    // console.log(`LIST DATA SUCCESSFUL`);
};

function changeTripDates(req, res) {
    let newData = req.body;
    console.log(newData);

    for (let i = 0; i < userTripData.length; i++) {
        let departDOM = `${newData.depart.slice(0, 2)}-${newData.depart.slice(3, 5)}`;
        let returnDOM = `${newData.return.slice(0, 2)}-${newData.return.slice(3, 5)}`;

        let departServer = userTripData[i].departure.slice(5, 10);
        let returnServer = userTripData[i].arrival.slice(5, 10);


        // change trip dates
        if (newData.weatherTest == userTripData[i].weather[0].weather) {
            console.log('match');
            userTripData[i]['displayDepart'] = newData.depart;
            userTripData[i]['displayReturn'] = newData.return;
            console.log(userTripData[i])
        } else {
            console.log('no match');
        }
    }
}

function changeItemToggle(req, res) {
    let newData = req.body;
    console.log(newData);

    for (let i = 0; i < userTripData.length; i++) {

        // change toggle status
        if (userTripData[i].city === newData.city) {
            if (userTripData[i].packingList[i].item === newData.item) {
                userTripData[i].packingList[i].toggleStatus = true;
                console.log(userTripData[i].packingList[i]);
            }
        }
    }
}

app.delete('/remove', removeData);

function removeData(req, res) {
    const newData = req.body;
    for (let i = 0; i < userTripData.length; i++) {
        console.log(userTripData[i].city, userTripData[i].displayDepart, userTripData[i].displayReturn)
        console.log(newData.city, newData.depart, newData.return)

        // whole trip delete
        if (userTripData[i].city === newData.city && userTripData[i].displayDepart === newData.depart && userTripData[i].displayReturn === newData.return) {
            userTripData.splice(i, 1);
            console.log('usertripdata', userTripData)
        } else {
            console.log('no');
        }
    }
}