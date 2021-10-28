## NextTrek Travel App
An app that uses user data and multiple APIs to help users plan trips.

## Deployment Instructions
* Download the git repository
* Compile the app with 'npm run prod' in the terminal
* Start the server with 'npm run start'
* The app is hosted on localhost:3000

## Languages
* HTML
* CSS/Sass
* JavaScript

## Project Description
"You will be building a travel application. It’s common to pull basic data from an API, but many applications don’t just pull the weather, they pull in multiple types of data, from different sources and occasionally one API will be required to get data from another API.

The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API is fantastic but it doesn’t let you get future data for free and it’s not that flexible with what information you enter; we are going to use the Weatherbit API for you to see how another API accomplishes the same goals. Weatherbit API has one problem, it only takes in coordinates for weather data -- it’s that specific. So, we’ll need to get those coordinates from the Geonames API. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API."

## Required Functionality
* Application takes user input and contacts the Geonames API for trip location lat/long.
* The Geonames API uses lat/long data to contact the Weatherbit API and display a trip forecast.
* If the trip start date is within a week, the user recieves the location's current weather.
* If the trip start date is over a week from the current date, the user receives a predicted forecast.
* Application takes user input and contacts the Pixaby API to display a photo of the trip destination.

## Additional Functionality I Added
* For trips more than a week from the current date, display the forecast for multiple days.
* Incorporated icons into the forecast.
* Added end dates to display the length of trips.
* Allow the user to add packing list and todo list items for their trip.
* Allow the user to edit packing list and todo list items.
* Allow the user to delete packing list and todo list items.
* Allow the user to save multiple trips.
* Allow the user to edit trip dates.
* Allow the user to delete trips.
* Automatically sort trips by start date.
