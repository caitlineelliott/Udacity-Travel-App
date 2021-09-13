import { editItems, removeItems } from './modifyItems';
import { getUserData } from './serverRequests';
import { appendItems } from './appendItems';
import { createForm } from './createForm';
import { displayWeather, displayLongForecast } from './displayWeather';

const viewSavedTrips = async () => {
    let container = document.querySelector('main');
    for (let i = 0; i < container.children.length; i++) { container.children[i].style.display = 'none'; }

    document.querySelector('h1').innerHTML = 'Saved Trips';

    let savedTripsBtn = document.querySelector('.main-nav-btn');
    savedTripsBtn.removeEventListener('click', viewSavedTrips);
    savedTripsBtn.innerHTML = `Book Trip`;
    savedTripsBtn.setAttribute("onclick", 'location.href="index.html"');
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await getUserData('/all');
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.main-nav-btn').addEventListener('click', viewSavedTrips);
});


const displayTrip = (tripData) => {
    if (tripData.length === 0) { document.querySelector('.no-trips-container').style.display = 'flex'; }
    else if (tripData.length > 0) {
        let tripContainer = document.querySelector('.saved-trips');
        tripContainer.style.display = 'block';

        for (let i = 0; i < tripData.length; i++) {
            let newTripContainer = document.createElement('div');
            let newTripHeading = document.createElement('div');
            let tripDates = document.createElement('textarea');
            let tripCity = document.createElement('div');
            let tripActions = document.createElement('div');
            const tripPackingList = document.createElement('button');
            const tripTodoList = document.createElement('button');
            const tripWeather = document.createElement('button');
            const editTrip = document.createElement('button');
            const deleteTrip = document.createElement('button');
            let packingListContainer = document.createElement('div');
            let todoListContainer = document.createElement('div');
            let weatherContainer = document.createElement('div');

            tripDates.innerHTML = `${tripData[i].displayDepart} - ${tripData[i].displayReturn}`;
            tripCity.innerHTML = tripData[i].city;
            editTrip.innerHTML = `<i id="edit" class="fas fa-edit"></i>`;
            deleteTrip.innerHTML = `<i id="delete" class="fas fa-times"></i>`;

            tripDates.readOnly = true;
            tripPackingList.classList.add('packing-list-btn');
            tripTodoList.classList.add('todo-list-btn');
            tripWeather.classList.add('weather-btn');
            editTrip.classList.add('edit-trip');
            deleteTrip.classList.add('delete-trip');
            packingListContainer.classList.add('packing-list');
            todoListContainer.classList.add('todo-list');
            weatherContainer.classList.add('weather');
            newTripHeading.classList.add('new-items-row');
            tripDates.classList.add('trip-dates');
            tripCity.classList.add('trip-city');
            tripActions.classList.add('trip-actions');
            packingListContainer.style.display = 'none';
            todoListContainer.style.display = 'none';
            weatherContainer.style.display = 'none';

            // handle spaces in trip names for id/class setting
            if (tripData[i].city.indexOf(' ') >= 0) {
                let newID = tripData[i].city.replace(/\s/g, '');
                newTripContainer.id = `${newID}-trip`;
                tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${newID}-trip"></i>`;
                tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${newID}-trip"></i>`;
                tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${newID}-trip"></i>`;
            } else {
                newTripContainer.id = `${tripData[i].city}-trip`;
                tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${tripCity.innerHTML}-trip"></i>`;
                tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${tripCity.innerHTML}-trip"></i>`;
                tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${tripCity.innerHTML}-trip"></i>`;
            }

            newTripHeading.appendChild(tripDates);
            newTripHeading.appendChild(tripCity);
            newTripHeading.appendChild(tripActions);
            tripActions.appendChild(tripPackingList);
            tripActions.appendChild(tripTodoList);
            tripActions.appendChild(tripWeather);
            tripActions.appendChild(editTrip);
            tripActions.appendChild(deleteTrip);
            newTripContainer.appendChild(newTripHeading);
            newTripContainer.appendChild(packingListContainer);
            newTripContainer.appendChild(todoListContainer);
            newTripContainer.appendChild(weatherContainer);
            tripContainer.appendChild(newTripContainer);

            // ADD PACKING LIST DATA
            let packedItems = tripData[i].packingList;
            for (let i = 0; i < packedItems.length; i++) {
                let itemRow = document.createElement('div');
                itemRow.classList.add('saved-trip-packing-list', 'packing');

                if (packedItems[i].toggle === true) { itemRow.classList.add('packed'); }

                let item = document.createElement('textarea');
                let category = document.createElement('div');
                item.innerHTML = packedItems[i].item;
                category.innerHTML = packedItems[i].category;

                appendItems(itemRow, item, category);
                packingListContainer.appendChild(itemRow);
            }

            // TO DO LIST
            let todoList = tripData[i].todoList;
            for (let i = 0; i < todoList.length; i++) {
                let itemRow = document.createElement('div');
                itemRow.classList.add('saved-trip-packing-list', 'todo');

                if (todoList[i].toggle === true) { itemRow.classList.add('packed'); }

                let item = document.createElement('textarea');
                let category = document.createElement('div');
                item.innerHTML = todoList[i].item;
                category.innerHTML = todoList[i].category;

                appendItems(itemRow, item, category);
                todoListContainer.appendChild(itemRow);
            }

            createForm(tripCity, tripDates, packingListContainer, todoListContainer);

            // WEATHER
            let weatherData = tripData[i].weather;
            let tripEnd = new Date(tripData[i].arrival);

            // remove old weather before trip date change
            if (weatherContainer.children.length > 0) { weatherContainer.children.remove(); }

            // add new weather tripData
            for (let i = 0; i < weatherData.length; i++) {
                let loopWeather = weatherData[i];
                displayWeather(weatherContainer, undefined, undefined, undefined, undefined, undefined, loopWeather);
            }

            displayLongForecast(null, 2, 1, weatherData, tripEnd, weatherContainer, 'tripDaysCount');

            tripPackingList.addEventListener('click', displayData);
            tripTodoList.addEventListener('click', displayData);
            tripWeather.addEventListener('click', displayData);
            editTrip.addEventListener('click', editItems);
            deleteTrip.addEventListener('click', removeItems);
        }
    }
};

const displayData = (event) => {
    let trips = document.querySelector('.saved-trips').children;
    let tripBlock = event.target.parentElement.parentElement.parentElement;
    let btn = event.target.classList[0];

    for (let i = 1; i < tripBlock.children.length; i++) {
        if (tripBlock.children[i].classList.contains(btn.slice(0, -4))) {
            if (tripBlock.children[i].style.display === 'none') {
                if (tripBlock.children[i].classList[0] === 'weather') {
                    tripBlock.children[i].style.display = 'flex';
                } else { tripBlock.children[i].style.display = 'block'; }
                for (let i = 0; i < trips.length; i++) {
                    if (event.target.parentElement.parentElement.parentElement.id !== trips[i].id) { trips[i].style = "display: none;"; }
                }
            } else if (tripBlock.children[i].style.display === 'block' || tripBlock.children[i].style.display === 'flex') {
                tripBlock.children[i].style.display = 'none';
                for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;'; }
            }
        } else {
            tripBlock.children[i].style.display = 'none';
        }
    }
};

export { displayTrip, viewSavedTrips };