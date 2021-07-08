import { createElements } from "./addPackingItem";
import { removeItems } from "./addPackingItem";
import { appendItem } from "./addPackingItem";
import { viewNewTrip } from "./viewNewTrip";
import { toggleItems } from "./addPackingItem";
import { updateServer } from "./saveTrip";

// This js file should be used ONLY to generate the DOM view of saved trips (FROM SERVER DATA)
// This file will communicate with the server re: editing/deleting though
/// NEED A NO SAVED TRIPS OPTION

document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips)

async function viewSavedTrips() {
    document.querySelector('.output').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.trip-saved-container').style.display = 'none';

    document.querySelector('h1').innerHTML = 'Saved Trips';
    let savedTripsBtn = document.querySelector('.nav-saved-trips');
    savedTripsBtn.innerHTML = `<a href="index.html">Book Trip</a>` // STYLE THIS LINK
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await getUserData('/all');
}

/* Function to GET Project Data */
const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI`);
        displayTrip(data);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

let packingListArr = [];
let todoListArr = [];

// need to create shells of all data in this function & set display to NONE, trigger display in event listener func
function displayTrip(data) {
    // adds a row for each trip the user has saved
    for (let i = 0; i < data.length; i++) {
        let tripContainer = document.querySelector('.saved-trips');
        let newTripContainer = document.createElement('div');
        let newTripHeading = document.createElement('div');
        let tripDates = document.createElement('textarea');
        let tripCity = document.createElement('div');
        let tripActions = document.createElement('div');

        const tripPackingList = document.createElement('span');
        const tripTodoList = document.createElement('span');
        const tripWeather = document.createElement('span');
        const editTrip = document.createElement('span');
        const deleteTrip = document.createElement('span');

        tripDates.innerHTML = `${data[i].departure.slice(5, 7)}/${data[i].departure.slice(8, 10)} - ${data[i].arrival.slice(5, 7)}/${data[i].arrival.slice(8, 10)}`;
        tripDates.readOnly = true;
        tripCity.innerHTML = data[i].city;
        tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt"></i>`
        tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list"></i>`
        tripWeather.innerHTML = `<i id="weather" class="fas fa-sun"></i>`
        editTrip.innerHTML = `<i id="edit" class="fas fa-edit"></i>`
        deleteTrip.innerHTML = `<i id="delete" class="fas fa-times"></i>`

        newTripHeading.classList.add('packing-list-row');
        tripDates.classList.add('trip-dates');
        tripCity.classList.add('trip-city');
        tripActions.classList.add('trip-actions');

        newTripHeading.appendChild(tripDates);
        newTripHeading.appendChild(tripCity);
        newTripHeading.appendChild(tripActions);
        tripActions.appendChild(tripPackingList);
        tripActions.appendChild(tripTodoList);
        tripActions.appendChild(tripWeather);
        tripActions.appendChild(editTrip);
        tripActions.appendChild(deleteTrip);

        // adds data DOM shells to be filled in by renderTripData
        let packingListContainer = document.createElement('div');
        let todoListContainer = document.createElement('div');
        let weatherContainer = document.createElement('div');

        // styles containers to display none
        packingListContainer.style.display = 'none';
        todoListContainer.style.display = 'none';
        weatherContainer.style.display = 'none';

        newTripContainer.appendChild(newTripHeading);
        newTripContainer.appendChild(packingListContainer);
        newTripContainer.appendChild(todoListContainer);
        newTripContainer.appendChild(weatherContainer);

        newTripContainer.id = `${data[i].city}-trip`;

        tripContainer.appendChild(newTripContainer)

        // add data to DOM shells
        // PACKING LIST
        let packingList = data[i].packingList;
        for (let i = 0; i < packingList.length; i++) {
            let packingItemRow = document.createElement('div');
            packingItemRow.classList.add('saved-trip-packing-list')

            let toggle = document.createElement('div');
            let item = document.createElement('textarea');
            item.readOnly = true;
            let category = document.createElement('div');
            let editBtn = document.createElement('div');
            let deleteBtn = document.createElement('div');

            // elements within containerRow
            packingItemRow.appendChild(item)
            packingItemRow.appendChild(toggle);
            packingItemRow.appendChild(category);
            packingItemRow.appendChild(editBtn);
            packingItemRow.appendChild(deleteBtn);

            item.innerHTML = packingList[i].item;
            category.innerHTML = packingList[i].category;
            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
            deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
            deleteBtn.id = 'delete-item-btn';

            packingListContainer.appendChild(packingItemRow);

            editBtn.addEventListener('click', editItems)
            toggle.addEventListener('click', toggleData);
            deleteBtn.addEventListener('click', removeItem)
        }

        let addMoreForm = document.createElement('div');
        addMoreForm.innerHTML = `
    <div class="packing-list-btn-container">
    <p>Missing something? Add more here:</p>
        <form class="packing-list-form">
            <input type="text" placeholder="add item" class="packing-list-btn-item-stv" id="pack-list-input">
            <select class="packing-list-btn-category">
                <option>Category</option>
                <option class="tops">Tops</option>
                <option class="bottoms">Bottoms</option>
                <option class="shoes">Shoes</option>
                <option class="accessories">Accessories</option>
                <option class="swimwear">Swimwear</option>
                <option class="toiletries">Toiletries</option>
                <option class="other">Other</option>
            </select>
            <button class="packing-list-btn-stv"><i class="fas fa-plus"></i></button>
        </form>
    </div>`
        packingListContainer.appendChild(addMoreForm);
        packingListContainer.id = 'packing-list'
        // add more packing items
        let addMoreBtn = document.querySelector('.packing-list-btn-stv');
        addMoreBtn.addEventListener('click', addMoreItems);

        let saveBtn = document.createElement('button');
        saveBtn.innerHTML = 'Save Changes';
        saveBtn.style = 'background-color: #c44536; width: 100vw; color: white; margin: 0';
        packingListContainer.appendChild(saveBtn);

        saveBtn.addEventListener('click', function () {
            updateServerLists(tripCity, tripDates)
        });

        // TO DO LIST
        let todoList = data[i].todoList;
        for (let i = 0; i < todoList.length; i++) {
            let todoItemRow = document.createElement('div'); // row of whole list under trip
            todoItemRow.classList.add('saved-trip-packing-list')

            let toggle = document.createElement('div');
            let item = document.createElement('div');
            let category = document.createElement('div');
            let editBtn = document.createElement('div');
            let deleteBtn = document.createElement('div');

            // elements within containerRow
            todoItemRow.appendChild(item)
            todoItemRow.appendChild(toggle);
            todoItemRow.appendChild(category);
            todoItemRow.appendChild(editBtn);
            todoItemRow.appendChild(deleteBtn);

            item.innerHTML = todoList[i].item;
            category.innerHTML = todoList[i].category;
            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
            deleteBtn.innerHTML = '<i class= "fas fa-times"></i>'

            todoListContainer.appendChild(todoItemRow);
            toggle.addEventListener('click', toggleData);
        }

        // ADD MORE FORM
        let addMoreFormTodo = document.createElement('div');
        addMoreFormTodo.innerHTML = `
    <div class="packing-list-btn-container">
    <p>Missing something? Add more here:</p>
        <form class="packing-list-form">
            <input type="text" placeholder="add item" class="packing-list-btn-item-stv" id="pack-list-input">
            <select class="packing-list-btn-category">
                <option>Category</option>
                <option class="tops">Tops</option>
                <option class="bottoms">Bottoms</option>
                <option class="shoes">Shoes</option>
                <option class="accessories">Accessories</option>
                <option class="swimwear">Swimwear</option>
                <option class="toiletries">Toiletries</option>
                <option class="other">Other</option>
            </select>
            <button class="packing-list-btn-stv"><i class="fas fa-plus"></i></button>
        </form>
    </div>`;

        todoListContainer.appendChild(addMoreFormTodo);
        todoListContainer.id = 'todo-list'

        let saveBtnTodo = document.createElement('button');
        saveBtnTodo.innerHTML = 'Save Changes';
        saveBtnTodo.style = 'background-color: #c44536; width: 100vw; color: white; margin: 0';
        todoListContainer.appendChild(saveBtnTodo);

        saveBtnTodo.addEventListener('click', function () {
            updateServerLists(tripCity, tripDates)
        });

        // WEATHER
        let weatherData = data[i].weather;
        weatherContainer.classList.add('forecast')
        for (let i = 0; i < weatherData.length; i++) {
            let newRow = document.createElement('div');
            weatherContainer.appendChild(newRow);

            newRow.classList.add('forecast-row');
            newRow.style.margin = '0';
            newRow.style.justifyContent = 'center';
            const tripDate = document.createElement('div');
            tripDate.classList.add('forecast-date');
            tripDate.innerHTML = weatherData[i].date;
            newRow.appendChild(tripDate);

            const weatherIcon = document.createElement('img');
            weatherIcon.classList.add('forecast-icon');
            weatherIcon.src = `${weatherData[i].weatherIcon}`;
            newRow.appendChild(weatherIcon);

            const weather = document.createElement('div');
            weather.classList.add('forecast-high');
            weather.style.width = '40vw';
            weather.innerHTML = weatherData[i].weather;
            newRow.appendChild(weather);
        }

        // trip data actions
        tripPackingList.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        tripTodoList.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        tripWeather.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))

        // change to edit/delete functions
        editTrip.addEventListener('click', editTripDates)
        deleteTrip.addEventListener('click', removeData(data))
    }
}

function editTripDates(event) {
    let tripCity = event.target.parentElement.parentElement.parentElement.children[1].innerText;
    let tripDates = event.target.parentElement.parentElement.parentElement.firstChild;
    tripDates.readOnly = false;
    tripDates.style.backgroundColor = '#c44536';
    tripDates.style.width = '46vw';

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style.width = '12vw';
    tripDates.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () {
        saveEditedItem(tripDates, saveBtn);
        let newTripDates = tripDates.value;
        let tripWeatherTestData = event.target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;
        console.log(tripWeatherTestData);
        changeDatesInServer(newTripDates, tripCity, tripWeatherTestData)
    })
}

function changeDatesInServer(newTripDates, tripCity, tripWeatherTestData) {
    addServerData('/tripdates', {
        city: tripCity,
        depart: newTripDates.slice(0, 5),
        return: newTripDates.slice(8, 13),
        weatherTest: tripWeatherTestData,
    });
}

function editItems(event) {
    let editedItem = event.target.parentElement.firstChild;
    editedItem.readOnly = false;
    editedItem.style.backgroundColor = '#c44536';
    editedItem.style.width = '46vw';

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style.width = '12vw';
    editedItem.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () {
        saveEditedItem(editedItem, saveBtn);
    })
}

function saveEditedItem(editedItem, saveBtn) {
    editedItem.readOnly = true;
    editedItem.style.backgroundColor = '#fff';
    editedItem.style.width = '23vw';
    saveBtn.remove();
}

function addMoreItems(event) {
    event.preventDefault();
    let nextItem = document.querySelector('.packing-list-btn-item-stv').value; //change ids here
    let nextCat = document.querySelector('.packing-list-btn-category').value;

    let packingItemRow = document.createElement('div');
    packingItemRow.classList.add('saved-trip-packing-list');
    let toggle = document.createElement('div');
    let item = document.createElement('div');
    let category = document.createElement('div');
    let editBtn = document.createElement('div');
    let deleteBtn = document.createElement('div');

    // elements within containerRow
    packingItemRow.appendChild(item)
    packingItemRow.appendChild(toggle);
    packingItemRow.appendChild(category);
    packingItemRow.appendChild(editBtn);
    packingItemRow.appendChild(deleteBtn);

    item.innerHTML = nextItem;
    category.innerHTML = nextCat;
    toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    deleteBtn.id = 'delete-item-btn';

    // back here
    let packingList = document.querySelector('#packing-list');
    packingList.insertBefore(packingItemRow, packingList.children[0])

    editBtn.addEventListener('click', editItems)
    toggle.addEventListener('click', toggleData);
    deleteBtn.addEventListener('click', removeItem)
}

// WHY IS THIS FIRING ON PAGE LOAD????
function updateServerLists(tripCity, tripDates) {
    alert('hey')
    let list = document.querySelectorAll('.saved-trip-packing-list');
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        let newItem = list[i].firstChild.value;
        let newCategory = true;
        let newToggle = true;

        let packingListItem = {};
        packingListItem['item'] = newItem;
        packingListItem['category'] = newCategory;
        packingListItem['toggle'] = newToggle;
        packingListArr.push(packingListItem);
        console.log(packingListArr)
    }
    addServerData('/list', {
        city: tripCity.innerText,
        depart: tripDates.innerHTML.slice(0, 5),
        return: tripDates.innerHTML.slice(8, 13),
        list: packingListArr
    });
}



/// how can I broaden this out so I only have to write it once for packing, todo, and weather?
function setTripDataValues(data) {
    let packingList = data[i].packingList;
    let todoList = data[i].todoList;

    for (let i = 0; i < packingList.length; i++) {
        item.innerHTML = packingList[i].item
        category.innerHTML = packingList[i].category;
        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
        editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
        deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    }

    for (let i = 0; i < todoList.length; i++) {
        item.innerHTML = todoList[i].item
        category.innerHTML = todoList[i].category;
        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
        editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
        deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    }
}

function displayData(data, packingListContainer, todoListContainer, weatherContainer) {
    return function (event) {
        if (event.target.classList[1] === 'fa-tshirt') {
            if (packingListContainer.style.display === 'none') {
                packingListContainer.style.display = 'block';
                weatherContainer.style.display = 'none';
                todoListContainer.style.display = 'none';
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none'
            }
        } else if (event.target.classList[1] === 'fa-clipboard-list') {
            if (todoListContainer.style.display === 'none') {
                todoListContainer.style.display = 'block';
                packingListContainer.style.display = 'none';
                weatherContainer.style.display = 'none';
            } else if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none'
            }
        } else if (event.target.classList[1] === 'fa-sun') {
            if (weatherContainer.style.display === 'none') {
                weatherContainer.style.display = 'block';
                packingListContainer.style.display = 'none';
                todoListContainer.style.display = 'none';
            } else if (weatherContainer.style.display === 'block') {
                weatherContainer.style.display = 'none'
            }
        }
    }
}

function toggleData(event) {
    event.target.parentElement.parentElement.classList.toggle('packed');
}

function editData(data) {

}

function removeData(data) {
    return function (event) {
        console.log(event.target)
        let deleteTripBtn = document.querySelector('#delete');
        let deleteItemBtn = document.querySelectorAll('#delete-item-btn');
        if (event.target === deleteTripBtn) {
            let tripRow = event.target.parentElement.parentElement.parentElement.parentElement;
            let tripCity = event.target.parentElement.parentElement.previousElementSibling.innerText;
            let departDate = event.target.parentElement.parentElement.previousElementSibling.previousSibling.innerText.slice(0, 5);
            let returnDate = event.target.parentElement.parentElement.previousElementSibling.previousSibling.innerText.slice(8, 13);
            console.log(tripCity, departDate, returnDate);

            tripRow.remove();
            // deleteFromServer(tripCity, departDate, returnDate)
        } else {
            console.log('error')
        }
    }
}

function removeItem(event) {
    let item = event.target.parentElement;
    item.remove();
}

function deleteFromServer(tripCity, departDate, returnDate, itemToDelete) {
    deleteServerData('/remove', {
        city: tripCity,
        depart: departDate,
        return: returnDate,
        item: itemToDelete,
    });
}

/* POST DATA */
const addServerData = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(`DATA POSTED TO SERVER ${makeDateAndTime()}`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO POST DATA TO SERVER');
    }
};

/* Function to DELETE data */
const deleteServerData = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(`DATA DELETED FROM SERVER ${makeDateAndTime()}`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO DELETE DATA FROM SERVER');
    }
};

export {
    removeData,
    viewSavedTrips,
    getUserData
}