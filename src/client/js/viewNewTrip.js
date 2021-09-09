import { viewSavedTrips } from './savedTripsView';
import { postData } from './serverRequests';
import { appendItems } from './appendItems';
import { displayWeather, displayLongForecast } from './displayWeather';

const viewNewTrip = async (newTrip) => {
    document.querySelector('.initial-req-container').style.display = "none";
    let newTripContainer = document.querySelector('.new-trip-container');
    newTripContainer.style.display = "flex";

    // Update Header
    if (newTrip[0].urlStatus === undefined) { document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1550318817-ddbecc4d078d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`; }
    else { document.querySelector('.banner').style.backgroundImage = `url('${newTrip[0].bannerURL}')`; }
    document.querySelector('h1').innerHTML = `${newTrip[0].userCity}`;

    // Update Trip Details
    document.querySelector('.depart-date-output').innerHTML = newTrip[0].textDepart;
    document.querySelector('.return-date-ouput').innerHTML = newTrip[0].textReturn;
    document.querySelector('.trip-days-count').innerHTML = newTrip[0].tripDaysCount;
    document.querySelector('.trip-nights-count').innerHTML = newTrip[0].tripNightsCount;
    document.querySelector('.trip-days-until').innerHTML = newTrip[0].tripDaysUntil;

    // Update Forecast
    let forecast = newTrip[0].weatherInfo.data;
    let dates = [];
    for (let i = 0; i < forecast.length; i++) {
        if (forecast[i].datetime.length > 10) { dates[i] = new Date(`${forecast[i].datetime.substring(0, 10)} 00:00:00`); }
        else { dates[i] = new Date(`${forecast[i].datetime} 00:00:00`); }
    }

    let tripDaysCount = [];
    let tripWeatherArr = [];
    let weatherContainer = document.querySelector('.weather');
    let departDate = new Date(newTrip[0].departDate)
    let returnDate = new Date(newTrip[0].returnDate)

    for (let i = 0; i < dates.length; i++) {
        if (newTrip[0].whichWeather !== undefined) {
            console.log(dates[i])
            if (departDate >= dates[i] || returnDate <= dates[i]) {
                let loopDates = dates[i];
                let loopForecast = forecast[i];
                console.log(loopDates, loopForecast)
                displayWeather(weatherContainer, newTripContainer, loopDates, loopForecast, tripDaysCount, tripWeatherArr);
            }
        }
        else if (newTrip[0].whichWeather === undefined) {
            let today = new Date();
            today.setHours(0, 0, 0, 0);
            if (dates[0].getTime() === today.getTime()) {
                let date = dates[0];
                let dateWeather = forecast[0];
                displayWeather(weatherContainer, newTripContainer, date, dateWeather, tripDaysCount, tripWeatherArr);
            }
        }
    }

    // Handle long forecast display
    if (weatherContainer.childElementCount > 5) {
        let showMoreDays = document.createElement('div');
        showMoreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`;
        showMoreDays.classList.add('more-days');
        weatherContainer.appendChild(showMoreDays);

        for (let i = 0; i < tripDaysCount.length; i++) { if (i > 4) { tripDaysCount[i].style.display = "none"; } }

        showMoreDays.addEventListener('click', function () {
            for (let i = 0; i < tripDaysCount.length; i++) {
                if (i > 4) {
                    if (tripDaysCount[i].style.cssText === "display: none;") {
                        tripDaysCount[i].style.cssText = "display: flex;";
                        showMoreDays.innerHTML = `Show fewer days <i class="fas fa-chevron-up"></i>`;
                    } else {
                        tripDaysCount[i].style.cssText = "display: none;";
                        showMoreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`;
                    }
                }
            }
        });
    }

    let lastDay = dates[15];
    let weatherData = [2];
    displayLongForecast(newTrip[0].departDate, newTrip[0].returnDate, lastDay, weatherData, null, weatherContainer, tripDaysCount);

    // Packing & Todo Add Item Form Listeners - executed in addPackingItem.js
    document.querySelector('.add-more-pack-btn-ntv').addEventListener('click', appendItems(null, null, null));
    document.querySelector('.add-more-todo-btn-ntv').addEventListener('click', appendItems(null, null, null));

    // Discard trip
    document.querySelector('.discard-trip-btn').addEventListener('click', function () {
        window.location = 'index.html';
    });

    // Save Trip function
    document.querySelector('.save-trip-btn').addEventListener('click', function () {
        let packingList = [];
        let todoList = [];
        let items = document.querySelectorAll('.new-items-row');

        for (let i = 0; i < items.length; i++) {
            let item = {};
            item.item = items[i].firstElementChild.innerHTML;
            item.category = items[i].parentNode.id;
            item.toggleStats = false;

            if (item.category === "High" || item.category === "Medium" || item.category === "Low" || item.category === "Priority") { todoList.push(item); }
            else { packingList.push(item); }
        }

        // View Saved Confirmed Message
        newTripContainer.style.display = "none";
        document.querySelector('.trip-saved-container').style.display = 'flex';

        let savedTripsBtn = document.querySelector('#view-saved-trips');
        savedTripsBtn.addEventListener('click', viewSavedTrips);

        let bookTripBtn = document.querySelector('.main-nav-btn');
        bookTripBtn.removeEventListener('click', viewSavedTrips);
        bookTripBtn.innerHTML = `Book Trip`;
        bookTripBtn.setAttribute("onclick", 'location.href="index.html"');

        postData('/api/trip', { city: newTrip[0].userCity, departure: newTrip[0].departDate, displayDepart: newTrip[0].displayDepart, displayReturn: newTrip[0].displayReturn, arrival: newTrip[0].returnDate, packingList: packingList, todoList: todoList, weather: tripWeatherArr, });
    });
};

// Lines 113-117 modified from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export { viewNewTrip, getRandomNum };