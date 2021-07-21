import { createElements } from "./addPackingItem";
import { removeItems } from "./addPackingItem";
import { appendItem } from "./addPackingItem";
import { viewNewTrip } from "./viewNewTrip";
import { toggleItems } from "./addPackingItem";
import { updateServer } from "./saveTrip";

// This js file should be used ONLY to generate the DOM view of saved trips (FROM SERVER DATA)
// This file will communicate with the server re: editing/deleting though
/// NEED A NO SAVED TRIPS OPTION

// saved trips view link
document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips)

async function viewSavedTrips() {
    document.querySelector('.output').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.trip-saved-container').style.display = 'none';

    document.querySelector('h1').innerHTML = 'Saved Trips';

    let savedTripsBtn = document.querySelector('.nav-saved-trips');
    savedTripsBtn.removeEventListener('click', viewSavedTrips)
    savedTripsBtn.innerHTML = `Book Trip`
    savedTripsBtn.setAttribute("onclick", 'location.href="index.html"') // test
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await getUserData('/all');
}

/* Function to GET Project Data */
const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI`);
        console.log(data)
        displayTrip(data);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

/* Function to GET NEW WEATHER Data */
const getServerWeather = async (url, packingListContainer, todoListContainer, weatherContainer) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI`);
        getNewWeather(data, packingListContainer, todoListContainer, weatherContainer);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

let packingListArr = [];
let todoListArr = [];

// need to create shells of all data in this function & set display to NONE, trigger display in event listener func
function displayTrip(data) {
    if (data.length === 0) {
        let noTripsContainer = document.createElement('div');
        noTripsContainer.classList.add('no-trips-container');
        noTripsContainer.innerHTML = `
                <h2>Uh oh!</h2>
                <div>You have no trips booked at this time.</div>
                <button id="book-trip" style="margin-top: 20px" onclick="location.href='index.html'">Book now!</button>`
        document.querySelector('nav').insertAdjacentElement('afterend', noTripsContainer);
    }

    // adds a row for each trip the user has saved
    for (let i = 0; i < data.length; i++) {
        let tripContainer = document.querySelector('.saved-trips');
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

        tripDates.innerHTML = `${data[i].displayDepart} - ${data[i].displayReturn}`;
        tripDates.readOnly = true;
        tripCity.innerHTML = data[i].city;
        tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${tripCity.innerHTML}-trip"></i>`
        tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${tripCity.innerHTML}-trip"></i>`
        tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${tripCity.innerHTML}-trip"></i>`
        editTrip.innerHTML = `<i id="edit" class="fas fa-edit"></i>`
        deleteTrip.innerHTML = `<i id="delete" class="fas fa-times"></i>`

        editTrip.id = 'edit-trip-btn';

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

        if (data[i].city.indexOf(' ') >= 0) {
            let newID = data[i].city.replace(/\s/g, '');
            newTripContainer.id = `${newID}-trip`;
        } else {
            newTripContainer.id = `${data[i].city}-trip`;
        }

        tripContainer.appendChild(newTripContainer)

        // add data to DOM shells
        // PACKING LIST
        let packedItems = data[i].packingList;
        for (let i = 0; i < packedItems.length; i++) {
            let packingItemRow = document.createElement('div');
            packingItemRow.classList.add('saved-trip-packing-list');

            if (packedItems[i].toggle === true) {
                packingItemRow.classList.add('packed');
            }

            let toggle = document.createElement('button');
            let item = document.createElement('textarea');
            item.readOnly = true;
            let category = document.createElement('div');
            let editBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            // elements within containerRow
            packingItemRow.appendChild(toggle);
            packingItemRow.appendChild(item)
            packingItemRow.appendChild(category);
            packingItemRow.appendChild(editBtn);
            packingItemRow.appendChild(deleteBtn);

            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            item.innerHTML = packedItems[i].item;
            category.innerHTML = packedItems[i].category;
            editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
            deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
            deleteBtn.id = 'delete-item-btn';

            toggle.style = "width: 15vw; font-size: 1em;"
            item.style = "width: 30vw; font-size: 0.9em;"
            category.style = "width: 30vw; font-size: 0.9em;"
            editBtn.style = "width: 15vw; font-size: 1em; background: transparent;"
            deleteBtn.style = "width: 15vw; font-size: 1em; background: transparent;"

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

        let btnContainer = document.createElement('div');
        btnContainer.style = 'width: 100vw; margin: 0; padding: 0; display: flex;'
        packingListContainer.appendChild(btnContainer)

        let discardBtn = document.createElement('button');
        discardBtn.innerHTML = 'Discard Changes';
        discardBtn.style = "background-color: #772e25; width: 50vw; color: white; margin: 0";
        btnContainer.appendChild(discardBtn);

        let saveBtn = document.createElement('button');
        saveBtn.innerHTML = 'Save Changes';
        saveBtn.style = "background-color: #c44536; width: 50vw; color: white; margin: 0";
        btnContainer.appendChild(saveBtn);

        saveBtn.addEventListener('click', function () {
            if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none';
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none';
            }
            updateServerLists(tripCity, tripDates)
        });

        discardBtn.addEventListener('click', function () {
            if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none';
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none';

                // remove discarded items
                let children = packingListContainer.children;
                for (let i = 0; i < children.length; i++) {
                    if (children[i].classList[0] == 'saved-trip-packing-list') {
                        children[i].remove();
                    }
                }
            }
        });

        // TO DO LIST
        let todoList = data[i].todoList;
        for (let i = 0; i < todoList.length; i++) {
            let todoItemRow = document.createElement('div'); // row of whole list under trip
            todoItemRow.classList.add('saved-trip-packing-list')

            let toggle = document.createElement('button');
            let item = document.createElement('textarea');
            let category = document.createElement('div');
            let editBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            // elements within containerRow
            todoItemRow.appendChild(toggle);
            todoItemRow.appendChild(item)
            todoItemRow.appendChild(category);
            todoItemRow.appendChild(editBtn);
            todoItemRow.appendChild(deleteBtn);

            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            item.innerHTML = todoList[i].item;
            category.innerHTML = todoList[i].category;
            editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
            deleteBtn.innerHTML = '<i class= "fas fa-times"></i>'

            toggle.style = "width: 15vw; font-size: 1em;"
            item.style = "width: 30vw; font-size: 0.9em;"
            category.style = "width: 30vw; font-size: 0.9em;"
            editBtn.style = "width: 15vw; font-size: 1em; background: transparent;"
            deleteBtn.style = "width: 15vw; font-size: 1em; background: transparent;"

            todoListContainer.appendChild(todoItemRow);
            editBtn.addEventListener('click', editItems)
            toggle.addEventListener('click', toggleData);
            deleteBtn.addEventListener('click', removeItem)
        }

        // ADD MORE FORM
        let addMoreFormTodo = document.createElement('div');
        addMoreFormTodo.innerHTML = `
    <div class="packing-list-btn-container">
    <p>Missing something? Add more here:</p>
        <form class="packing-list-form">
            <input type="text" placeholder="add item" class="packing-list-btn-item-stv" id="todo-list-input">
            <select class="packing-list-btn-category">
                <option>Priority</option>
                <option class="high">High</option>
                <option class="medium">Medium</option>
                <option class="low">Low</option>
            </select>
            <button id='add-more-todos-stv' class="packing-list-btn-stv"><i class="fas fa-plus"></i></button>
        </form>
    </div>`;

        todoListContainer.appendChild(addMoreFormTodo);
        todoListContainer.id = 'todo-list'

        let addMoreTodo = document.querySelector('#add-more-todos-stv');
        addMoreTodo.addEventListener('click', function (event) {
            addMoreTodos(event);
        });

        let todoBtnContainer = document.createElement('div');
        todoBtnContainer.style = 'width: 100vw; margin: 0; padding: 0; display: flex;'
        todoListContainer.appendChild(todoBtnContainer)

        let discardBtnTodo = document.createElement('button');
        discardBtnTodo.innerHTML = 'Discard Changes';
        discardBtnTodo.style = "background-color: #772e25; width: 50vw; color: white; margin: 0";
        todoBtnContainer.appendChild(discardBtnTodo);

        let saveBtnTodo = document.createElement('button');
        saveBtnTodo.innerHTML = 'Save Changes';
        saveBtnTodo.style = "background-color: #c44536; width: 50vw; color: white; margin: 0";
        todoBtnContainer.appendChild(saveBtnTodo);

        saveBtnTodo.addEventListener('click', function (event) {
            if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none';
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none';
            }
            updateServerLists(tripCity, tripDates);
        });

        discardBtnTodo.addEventListener('click', function () {
            if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none';
                // remove discarded items
                let children = todoListContainer.children;
                for (let i = 0; i < children.length; i++) {
                    if (children[i].classList[0] == 'saved-trip-packing-list') {
                        children[i].remove();
                    }
                }
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none';
            }
        });

        // WEATHER
        let weatherData = data[i].weather;
        weatherContainer.classList.add('forecast');
        let tripStart = new Date(data[i].departure);
        let tripEnd = new Date(data[i].arrival);

        // // remove old weather before trip date change
        if (weatherContainer.children.length > 0) {
            weatherContainer.children.remove();
        }

        // add new weather data
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

            const weatherHighLow = document.createElement('div');
            weatherHighLow.classList.add('forecast-high');
            weatherHighLow.style.width = '40vw';
            weatherHighLow.innerHTML = weatherData[i].weather;
            newRow.appendChild(weatherHighLow);

        }

        // long forecast
        let longForecast = document.createElement('div');

        if (weatherData[0] !== undefined) {
            let weatherStart = new Date(`${weatherData[0].date.slice(0, 1)}-${weatherData[0].date.slice(2, 4)}-21`);
            let weatherEnd = new Date(`${weatherData[weatherData.length - 1].date.slice(0, 1)}-${weatherData[weatherData.length - 1].date.slice(2, 4)}-21`);

            if (tripStart < weatherEnd && weatherEnd < tripEnd) {
                longForecast.innerHTML = `The forecast for some of your trip dates is outside the range of our weather app.`
                longForecast.style = 'width: 80vw; margin: 20px auto; background-color: #83A8A6; padding: 20px;';
                weatherContainer.appendChild(longForecast);
            }
        } else if (weatherData[0] === undefined) {
            console.log('ALL weather out of range');
            longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
            longForecast.style = 'width: 80vw; margin: 20px auto; background-color: #83A8A6; padding: 20px;';
            weatherContainer.appendChild(longForecast);
        }

        // trip data actions
        tripPackingList.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        tripTodoList.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        tripWeather.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        // tripWeather.addEventListener('click', function () {
        //     getServerWeather('/all', packingListContainer, todoListContainer, weatherContainer)
        // });

        // change to edit/delete functions
        editTrip.addEventListener('click', editTripDates)
        deleteTrip.addEventListener('click', removeData(data))
    }
}

function editTripDates(event) {
    if (event.target === 'edit-trip-btn') {
        console.log('button');
        let btn = event.target;
        btn.disabled = true;
    } else if (event.target.id === 'edit') {
        console.log('icon');
        let btn = event.target.parentElement;
        btn.disabled = true;
    }

    let tripCity = event.target.parentElement.parentElement.parentElement.children[1].innerText;
    let tripDates = event.target.parentElement.parentElement.parentElement.firstChild;
    tripDates.readOnly = false;
    tripDates.style = 'background-color: rgb(196, 69, 54); height: 6.7vh; box-sizing: border-box; padding-left: 8px; margin-left: -15px;'
    let tripCityContainer = event.target.parentElement.parentElement.parentElement.children[1];
    tripCityContainer.style.width = "24%"

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style = 'margin: 0; height: 6.7vh; width: 10%; background-color: rgb(196, 69, 54); color: rgb(255, 255, 255);'
    tripDates.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', async function () {
        saveEditedItem(tripDates, saveBtn);

        //refresh page
        let trips = document.querySelector('.saved-trips').children;

        for (let i = trips.length - 1; i >= 0; i--) {
            trips[i].remove();
        }

        let newTripDates = tripDates.value;
        let tripWeatherTestData = event.target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;
        await changeDatesInServer(newTripDates, tripCity, tripWeatherTestData)

        // need a loading animation here

        getUserData('/tripdates');
    })
}

async function changeDatesInServer(newTripDates, tripCity, tripWeatherTestData) {
    addServerData('/tripdates', {
        city: tripCity,
        depart: newTripDates.slice(0, 5),
        return: newTripDates.slice(8, 13),
        weatherTest: tripWeatherTestData,
    });
}

function editItems(event) {
    console.log(event.target)

    let editedItem = event.target.parentElement.parentElement.children[1]
    editedItem.readOnly = false;
    editedItem.style = 'width: 50vw; background-color: #c44536; color: "#fff"; box-sizing: border-box; padding: 10px 0 0 20px; height: 5vh;';

    let btn = event.target.parentElement;
    btn.disabled = true;

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style = 'margin: 0; padding: 0; background-color: #c44536; color: "#fff"; width: 12vw; height: 5vh;'
    editedItem.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () {
        saveEditedItem(editedItem);
    })
}

function saveEditedItem(editedItem) {
    editedItem.readOnly = true;
    editedItem.style = 'background-color: transparent; padding-top: 18px;'
    let editBtn = editedItem.parentElement.children[3].children[3];
    editBtn.disabled = false;
    let saveBtn = editedItem.parentElement.children[1];
    saveBtn.remove();
}

function addMoreItems(event) {
    event.preventDefault();
    let nextItem = event.target.parentElement.children[0].value;
    console.log(nextItem)
    let nextCat = event.target.parentElement.children[1].value;

    let packingItemRow = document.createElement('div');
    packingItemRow.classList.add('saved-trip-packing-list');
    let toggle = document.createElement('div');
    let item = document.createElement('textarea');
    let category = document.createElement('div');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    // elements within containerRow
    packingItemRow.appendChild(toggle);
    packingItemRow.appendChild(item)
    packingItemRow.appendChild(category);
    packingItemRow.appendChild(editBtn);
    packingItemRow.appendChild(deleteBtn);

    item.innerHTML = nextItem;
    category.innerHTML = nextCat;
    toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    deleteBtn.id = 'delete-item-btn';

    toggle.style = "width: 15vw; font-size: 1em;"
    item.style = "width: 30vw; font-size: 0.9em;"
    category.style = "width: 30vw; font-size: 0.9em;"
    editBtn.style = "width: 15vw; font-size: 1em; background: transparent;"
    deleteBtn.style = "width: 15vw; font-size: 1em; background: transparent;"

    event.target.parentElement.children[0].value = '';

    let packingList = document.querySelector('#packing-list');
    packingList.insertBefore(packingItemRow, packingList.children[0])

    editBtn.addEventListener('click', editItems)
    toggle.addEventListener('click', toggleData);
    deleteBtn.addEventListener('click', removeItem)
}

function addMoreTodos(event) {
    event.preventDefault();
    let nextItem = event.target.parentElement.children[0].value;
    let nextCat = event.target.parentElement.children[1].value;

    let packingItemRow = document.createElement('div');
    packingItemRow.classList.add('saved-trip-packing-list');
    let toggle = document.createElement('div');
    let item = document.createElement('textarea');
    let category = document.createElement('div');
    let editBtn = document.createElement('div');
    let deleteBtn = document.createElement('div');

    // elements within containerRow
    packingItemRow.appendChild(toggle);
    packingItemRow.appendChild(item)
    packingItemRow.appendChild(category);
    packingItemRow.appendChild(editBtn);
    packingItemRow.appendChild(deleteBtn);

    item.innerHTML = nextItem;
    category.innerHTML = nextCat;
    toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    deleteBtn.id = 'delete-item-btn';

    toggle.style = "width: 15vw; font-size: 1em;"
    item.style = "width: 30vw; font-size: 0.9em;"
    category.style = "width: 30vw; font-size: 0.9em;"
    editBtn.style = "width: 15vw; font-size: 1em; background: transparent;"
    deleteBtn.style = "width: 15vw; font-size: 1em; background: transparent;"

    event.target.parentElement.children[0].value = '';

    let todoList = document.querySelector('#todo-list');
    todoList.insertBefore(packingItemRow, todoList.children[0])

    editBtn.addEventListener('click', editItems)
    toggle.addEventListener('click', toggleData);
    deleteBtn.addEventListener('click', removeItem)
}

function updateServerLists(tripCity, tripDates) {
    let list = document.querySelectorAll('.saved-trip-packing-list');
    let newPackListArr = []
    for (let i = 0; i < list.length; i++) {
        let newItemRow = list[i];
        let newItem = list[i].children[1];
        let newItemText = list[i].children[1].value;
        let newCategory = list[i].children[2].innerText;

        let packingListItem = {};

        // handle packed/unpacked toggle
        if (newItemRow.classList[1] === 'packed') {
            let newToggle = true;
            packingListItem['toggle'] = newToggle;
        } else {
            let newToggle = false;
            packingListItem['toggle'] = newToggle;
        }

        packingListItem['item'] = newItemText;
        packingListItem['category'] = newCategory;

        newPackListArr.push(packingListItem);
    }

    addServerData('/list', {
        city: tripCity.innerText,
        depart: tripDates.innerHTML.slice(0, 5),
        return: tripDates.innerHTML.slice(8, 13),
        list: newPackListArr
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

function getNewWeather(data, packingListContainer, todoListContainer, weatherContainer) {
    if (weatherContainer.style.display === 'none') {
        weatherContainer.style.display = 'block';
        packingListContainer.style.display = 'none';
        todoListContainer.style.display = 'none';
    }
}


function displayData(data, packingListContainer, todoListContainer, weatherContainer) {
    return async function (event) {
        // general display of data
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

        // fully remove other trips from DOM when data is open
        let allTrips = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children;
        console.log(allTrips)
        let currentTrip = event.target.parentElement.parentElement.parentElement.parentElement;

        for (let i = 0; i < allTrips.length; i++) {
            if (event.target.classList[2] !== allTrips[i].id) {
                console.log(event.target.classList[2], currentTrip.id)
                allTrips[i].style = "display: none;"
            } else {
                // add something to bring other trip back
            }
        }
    }
}


function toggleData(event) {
    event.target.parentElement.parentElement.classList.toggle('packed');
    // console.log(event.target);
    // console.log(event.target.parentElement.parentElement.firstChild.innerHTML);
    // console.log(event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText)
    // addServerData('/toggle', {
    //     city: event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText,
    //     item: event.target.parentElement.parentElement.firstChild.innerHTML,
    // })
}

function editData(data) {

}

function removeData(data) {
    return function (event) {
        let tripRow = event.target.parentElement.parentElement.parentElement.parentElement;
        let tripCity = event.target.parentElement.parentElement.previousElementSibling.innerText;
        let departDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
        let returnDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

        tripRow.remove();
        deleteFromServer(tripCity, departDate, returnDate)

    }
}

function removeItem(event) {
    let item = event.target.parentElement.parentElement;
    item.remove();

    // deleteItems(tripCity, departDate, returnDate, itemToDelete)
}

//

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
        console.log(`DATA POSTED TO SERVER`);
        return await response.json();
    }
    catch (e) {
        console.log('FAILED TO POST DATA TO SERVER');
        console.log(e)
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