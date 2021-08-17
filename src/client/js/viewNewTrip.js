import { createElements } from './addPackingItem'
import { viewSavedTrips } from './savedTripsView'
import { postData } from './serverRequests'
import { getHeaderPhoto } from './apiRequests'

async function viewNewTrip(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo) {
    document.querySelector('.initial-req-container').style.display = "none";
    let newTripContainer = document.querySelector('.new-trip-container');
    newTripContainer.style.display = "flex";

    // Update Header
    let bannerImg = await getHeaderPhoto(userCity);
    if (bannerImg.hits[getRandomNum(0, bannerImg.hits.length)] === undefined) { console.log('undefined/no background') }
    else { document.querySelector('.banner').style.backgroundImage = `url('${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}')`; }
    document.querySelector('h1').innerHTML = `${userCity}`;

    // Update Trip Details
    const currentDate = new Date();
    const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    document.querySelector('#depart-date').innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    document.querySelector('#arrive-date').innerHTML = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    document.querySelector('#trip-days-count').innerHTML = (((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1) === 1) ? `1 day` : `${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1} days`;
    document.querySelector('#trip-nights-count').innerHTML = ((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) === 1) ? `1 night` : `${((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24} days`;
    document.querySelector('#trip-days-until').innerHTML = (parseInt(((departDate - currentDate) / 1000 / 60 / 60 / 24) + 1) === 1) ? `1 day` : `${parseInt(((departDate - currentDate) / 1000 / 60 / 60 / 24) + 1)} days`;

    // Update Forecast
    let forecast = weatherInfo.data;
    let dates = [];

    for (let i = 0; i < forecast.length; i++) { dates[i] = new Date(`${forecast[i].datetime} 00:00:00`); }

    let tripDaysCount = [];
    let tripWeatherArr = [];
    let tripWeatherContainer = document.querySelector('.weather');

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            let newRow = document.createElement('div');
            tripWeatherContainer.appendChild(newRow);

            let tripDates = dates[i];
            let tripWeather = forecast[i];
            const tripDate = document.createElement('div');
            const weatherIcon = document.createElement('img');
            const weather = document.createElement('div');

            setWeatherDOMStructure(newRow, tripDate, tripDates, weatherIcon, weather, tripWeather, newTripContainer, tripDaysCount, tripWeatherArr);
        }
    }

    // Handle long forecast display
    if (tripWeatherContainer.childElementCount > 5) {
        let showMoreDays = document.createElement('div');
        showMoreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`
        showMoreDays.classList.add('more-days');
        tripWeatherContainer.appendChild(showMoreDays);

        for (let i = 0; i < tripDaysCount.length; i++) { if (i > 4) { tripDaysCount[i].style.display = "none"; } }

        showMoreDays.addEventListener('click', function () {
            for (let i = 0; i < tripDaysCount.length; i++) {
                if (i > 4) {
                    if (tripDaysCount[i].style.cssText === "display: none;") {
                        tripDaysCount[i].style.cssText = "display: flex;"
                        showMoreDays.innerHTML = `Show fewer days <i class="fas fa-chevron-up"></i>`
                    } else {
                        tripDaysCount[i].style.cssText = "display: none;"
                        showMoreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`
                    }
                }
            }
        });
    }

    // Handle forecast longer than weather api data
    let longForecast = document.createElement('div');

    if (departDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
        tripWeatherContainer.appendChild(longForecast);
    } else if (returnDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `The forecast for ${(((((returnDate.getTime() - dates[15]) / 1000) / 60) / 60) / 24)} day(s) of your trip is outside the range of our weather app.`
        tripWeatherContainer.appendChild(longForecast);
    }
    else if (tripDaysCount.length < 6) { tripWeatherContainer.style = "padding-bottom: 20px;" }

    // Packing & Todo Add Item Form Listeners - executed in addPackingItem.js
    document.querySelector('.packing-list-btn').addEventListener('click', createElements);
    document.querySelector('.todo-list-btn').addEventListener('click', createElements);

    // Save Trip function
    document.querySelector('.save').addEventListener('click', function () {
        let packingList = []
        let todoList = []
        let items = document.querySelectorAll('.packing-list-row');

        for (let i = 0; i < items.length; i++) {
            let item = {}
            item["item"] = items[i].firstElementChild.innerHTML;
            item["category"] = items[i].parentNode.id;
            item["toggleStatus"] = false;

            if (item["category"] === "High" || item["category"] === "Medium" || item["category"] === "Low" || item["category"] === "Priority") {
                todoList.push(item)
            } else { packingList.push(item) }
        };

        // View Saved Confirmed Message
        newTripContainer.style.display = "none";
        document.querySelector('.trip-saved-container').style.display = 'flex';

        let savedTripsBtn = document.querySelector('#view-saved-trips');
        savedTripsBtn.addEventListener('click', viewSavedTrips)

        let bookTripBtn = document.querySelector('.nav-saved-trips');
        bookTripBtn.removeEventListener('click', viewSavedTrips)
        bookTripBtn.innerHTML = `Book Trip`
        bookTripBtn.setAttribute("onclick", 'location.href="index.html"')

        postData('/api/trip', { city: userCity, departure: departDate, displayDepart: displayDepart, displayReturn: displayReturn, arrival: returnDate, packingList: packingList, todoList: todoList, weather: tripWeatherArr, });
    });
}

// Helper Functions
// NEED TO CITE - From MDN
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setWeatherDOMStructure(newRow, tripDate, tripDates, weatherIcon, weather, tripWeather, newTripContainer, tripDaysCount, tripWeatherArr) {
    newRow.classList.add('forecast-row');
    tripDate.classList.add('forecast-date');
    newRow.appendChild(tripDate);

    weatherIcon.classList.add('forecast-icon');
    newRow.appendChild(weatherIcon);

    weather.classList.add('forecast-high');
    newRow.appendChild(weather);

    if (newTripContainer) { setWeatherValues(newRow, tripDate, tripDates, weatherIcon, tripWeather, weather, tripDaysCount, tripWeatherArr) }
    else if (newTripContainer === undefined) { return; }
}

function setWeatherValues(newRow, tripDate, tripDates, weatherIcon, tripWeather, weather, tripDaysCount, tripWeatherArr) {
    tripDate.innerHTML = `${tripDates.getMonth() + 1} /${tripDates.getDate()}`;
    weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${tripWeather.weather.icon}.png`;
    weather.innerHTML = `${tripWeather.high_temp}°F / ${tripWeather.low_temp}°F`;

    tripDaysCount.push(newRow);
    let tripDayData = {}
    tripDayData['date'] = tripDate.innerHTML;
    tripDayData['weatherIcon'] = weatherIcon.src;
    tripDayData['weather'] = weather.innerHTML;
    tripWeatherArr.push(tripDayData);
}

export { viewNewTrip, getRandomNum, setWeatherDOMStructure, }