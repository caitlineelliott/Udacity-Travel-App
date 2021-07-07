// updates UI to new trip view

import { setValues } from './addPackingItem'
import { createElements } from './addPackingItem'
import { updateServer } from './saveTrip'

const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

async function viewNewTrip(userCity, departDate, returnDate, weatherInfo) {
    // remove default form from UI - need better class name here
    document.querySelector('.container').style.display = "none";
    let output = document.querySelector('.output')
    output.style.display = "flex"; // fix styling

    let bannerImg = await getHeaderPhoto(userCity);
    document.querySelector('.banner').style.backgroundImage = `url('${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}')`;
    document.querySelector('h1').innerHTML = `${userCity}`;

    async function getHeaderPhoto(userCity) {
        try {
            const request =
                await fetch(`https://pixabay.com/api/?key=16153283-467e1a7d2957b8817b31c679d&q=${userCity}&image_type=photo&pretty=true&category=places&orientation=horizontal`);
            return await request.json();
        }
        catch (e) {
            console.log('FAILED TO FETCH GEONAMES API DATA:', e);
        }
    }

    // Update Trip Details
    const currentDate = new Date();
    document.querySelector('#depart-date').innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    document.querySelector('#arrive-date').innerHTML = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    document.querySelector('#trip-days-count').innerHTML = ` ${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1} days`;
    document.querySelector('#trip-nights-count').innerHTML = `${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24)} nights`;
    document.querySelector('#trip-days-until').innerHTML = `${departDate.getDate() - currentDate.getDate()} days`;

    // Update Forecast
    let forecast = weatherInfo.data;
    let dates = [];

    for (let i = 0; i < forecast.length; i++) {
        dates[i] = new Date(`${forecast[i].datetime}T00:00:00`);
    }

    let tripDaysCount = [];
    let tripWeather = document.querySelector('.forecast');

    let tripWeatherArr = [];

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            let newRow = document.createElement('div');
            tripWeather.appendChild(newRow)
            tripDaysCount.push(newRow);

            newRow.classList.add('forecast-row');
            const tripDate = document.createElement('div');
            tripDate.classList.add('forecast-date');
            tripDate.innerHTML = `${dates[i].getMonth() + 1}/${dates[i].getDate()}`;
            newRow.appendChild(tripDate);

            const weatherIcon = document.createElement('img');
            weatherIcon.classList.add('forecast-icon');
            weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
            newRow.appendChild(weatherIcon);

            const weather = document.createElement('div');
            weather.classList.add('forecast-high');
            weather.innerHTML = `${forecast[i].high_temp}°F / ${forecast[i].low_temp}°F`;
            newRow.appendChild(weather);

            let tripDayData = {}
            tripDayData['date'] = tripDate.innerHTML;
            tripDayData['weatherIcon'] = weatherIcon.src;
            tripDayData['weather'] = weather.innerHTML;
            tripWeatherArr.push(tripDayData);
        }
    }

    console.log(tripWeatherArr)

    if (tripWeather.childElementCount > 5) {
        let moreDays = document.createElement('div');
        moreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`
        moreDays.classList.add('more-days');
        tripWeather.appendChild(moreDays);

        for (let i = 0; i < tripDaysCount.length; i++) {
            if (i > 4) {
                tripDaysCount[i].style.display = "none";
            }
        }

        moreDays.addEventListener('click', function () {
            for (let i = 0; i < tripDaysCount.length; i++) {

                if (i > 4) {
                    if (tripDaysCount[i].style.cssText === "display: none;") {
                        tripDaysCount[i].style.cssText = "display: flex;"
                        moreDays.innerHTML = `Show fewer days <i class="fas fa-chevron-up"></i>`
                    } else {
                        tripDaysCount[i].style.cssText = "display: none;"
                        moreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`
                    }
                }

            }
        });
    }

    let longForecast = document.createElement('div');

    if (departDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
        document.querySelector('.forecast').appendChild(longForecast);
    } else if (returnDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `The forecast for ${(((((returnDate.getTime() - dates[15]) / 1000) / 60) / 60) / 24)} day(s) of your trip is outside the range of our weather app.`
        document.querySelector('.forecast').appendChild(longForecast);
    };

    // add form event listeners
    document.querySelector('.packing-list-btn').addEventListener('click', createElements); // target packing list
    document.querySelector('.todo-list-btn').addEventListener('click', createElements); // target to do list

    let tripBtnContainer = document.createElement('div');
    tripBtnContainer.style = "display: flex";
    output.appendChild(tripBtnContainer);

    // create discard trip info btn
    let discardTripBtn = document.createElement('button');
    discardTripBtn.innerHTML = '<a href="index.html">Discard Trip</a>';
    discardTripBtn.classList.add('save-trip-btn');
    discardTripBtn.style = "background-color: #772e25; color: #edddd4";
    tripBtnContainer.appendChild(discardTripBtn);

    // create save trip info btn
    let saveTripBtn = document.createElement('button');
    saveTripBtn.innerText = 'Save Trip';
    saveTripBtn.classList.add('save-trip-btn');
    tripBtnContainer.appendChild(saveTripBtn);

    saveTripBtn.addEventListener('click', function () {
        let packingList = []
        let todoList = []

        let items = document.querySelectorAll('.packing-list-row');
        for (let i = 0; i < items.length; i++) {
            let item = {}
            item["item"] = items[i].firstElementChild.innerHTML;
            item["category"] = items[i].parentNode.id;
            item["toggleStatus"] = items[i].classList;

            if (item["category"] === "High" || item["category"] === "Medium" || item["category"] === "Low" || item["category"] === "Priority") {
                todoList.push(item)
            } else {
                packingList.push(item)
            }
        };

        document.querySelector('.output').style.display = "none";
        const saveConfirmed = document.querySelector('.trip-saved-container');
        saveConfirmed.style.display = 'flex';
        saveConfirmed.innerHTML = `
                <h2>Happy trails!</h2>
                <div>Your trip details have been saved.</div>
                <button>View Saved Trips</button>`
        document.querySelector('nav').insertAdjacentElement('afterend', saveConfirmed);
        let savedTripsBtn = document.querySelector('.nav-saved-trips');
        savedTripsBtn.innerHTML = '<a href="index.html">Book Trip</a>'

        updateServer(userCity, departDate, returnDate, packingList, todoList, tripWeatherArr);
    });
}

// Helper Functions

// NEED TO CITE - From MDN
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
    viewNewTrip,
    getRandomNum,
}