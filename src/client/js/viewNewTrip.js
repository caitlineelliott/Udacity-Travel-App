import { viewSavedTrips } from './savedTripsView'
import { postData } from './serverRequests'
import { getHeaderPhoto } from './apiRequests'
import { appendItems } from './appendItems'
import { displayWeather, displayLongForecast } from './displayWeather'

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
    document.querySelector('.depart-date-output').innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    document.querySelector('.return-date-ouput').innerHTML = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    document.querySelector('.trip-days-count').innerHTML = (((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1) === 1) ? `1 day` : `${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1} days`;
    document.querySelector('.trip-nights-count').innerHTML = ((((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) === 1) ? `1 night` : `${((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24} days`;
    document.querySelector('.trip-days-until').innerHTML = (parseInt(((departDate - currentDate) / 1000 / 60 / 60 / 24) + 1) === 1) ? `1 day` : `${parseInt(((departDate - currentDate) / 1000 / 60 / 60 / 24) + 1)} days`;

    // Update Forecast
    let forecast = weatherInfo.data;
    let dates = [];
    for (let i = 0; i < forecast.length; i++) { dates[i] = new Date(`${forecast[i].datetime} 00:00:00`); }

    let tripDaysCount = [];
    let tripWeatherArr = [];
    let weatherContainer = document.querySelector('.weather');
    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            let loopDates = dates[i];
            let loopForecast = forecast[i]
            displayWeather(weatherContainer, newTripContainer, loopDates, loopForecast, tripDaysCount, tripWeatherArr)
        }
    }

    // Handle long forecast display
    if (weatherContainer.childElementCount > 5) {
        let showMoreDays = document.createElement('div');
        showMoreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`
        showMoreDays.classList.add('more-days');
        weatherContainer.appendChild(showMoreDays);

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

    let lastDay = dates[15];
    let weatherData = [2];
    displayLongForecast(departDate, returnDate, lastDay, weatherData, null, weatherContainer, tripDaysCount)

    // Packing & Todo Add Item Form Listeners - executed in addPackingItem.js
    document.querySelector('.add-more-pack-btn-ntv').addEventListener('click', appendItems(null, null, null));
    document.querySelector('.add-more-todo-btn-ntv').addEventListener('click', appendItems(null, null, null));

    // Save Trip function
    document.querySelector('.save-trip-btn').addEventListener('click', function () {
        let packingList = []
        let todoList = []
        let items = document.querySelectorAll('.new-items-row');

        for (let i = 0; i < items.length; i++) {
            let item = {}
            item["item"] = items[i].firstElementChild.innerHTML;
            item["category"] = items[i].parentNode.id;
            item["toggleStatus"] = false;

            if (item["category"] === "High" || item["category"] === "Medium" || item["category"] === "Low" || item["category"] === "Priority") { todoList.push(item) }
            else { packingList.push(item) }
        };

        // View Saved Confirmed Message
        newTripContainer.style.display = "none";
        document.querySelector('.trip-saved-container').style.display = 'flex';

        let savedTripsBtn = document.querySelector('#view-saved-trips');
        savedTripsBtn.addEventListener('click', viewSavedTrips)

        let bookTripBtn = document.querySelector('.main-nav-btn');
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

export { viewNewTrip, getRandomNum }