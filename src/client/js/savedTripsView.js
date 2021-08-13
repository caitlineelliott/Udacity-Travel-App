import { setWeatherDOMStructure } from './viewNewTrip'

document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips);

async function viewSavedTrips() {
    document.querySelector('.new-trip-container').style.display = 'none';
    document.querySelector('.initial-req-container').style.display = 'none';
    document.querySelector('.trip-saved-container').style.display = 'none';

    document.querySelector('h1').innerHTML = 'Saved Trips';

    let savedTripsBtn = document.querySelector('.nav-saved-trips');
    savedTripsBtn.removeEventListener('click', viewSavedTrips)
    savedTripsBtn.innerHTML = `Book Trip`
    savedTripsBtn.setAttribute("onclick", 'location.href="index.html"')
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await getUserData('/all');
}

const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const tripData = await request.json();
        displayTrip(tripData);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

function displayTrip(tripData) {
    if (tripData.length === 0) { document.querySelector('.no-trips-container').style.display = 'flex'; }

    // Display all trips
    for (let i = 0; i < tripData.length; i++) {
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

        tripDates.innerHTML = `${tripData[i].displayDepart} - ${tripData[i].displayReturn}`;
        tripDates.readOnly = true;
        tripCity.innerHTML = tripData[i].city;
        editTrip.innerHTML = `<i id="edit" class="fas fa-edit"></i>`
        deleteTrip.innerHTML = `<i id="delete" class="fas fa-times"></i>`

        // editTrip.id = 'edit-trip-btn'; // why is this here?

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

        let packingListContainer = document.createElement('div');
        let todoListContainer = document.createElement('div');
        let weatherContainer = document.createElement('div');

        packingListContainer.style.display = 'none';
        todoListContainer.style.display = 'none';
        weatherContainer.style.display = 'none';

        newTripContainer.appendChild(newTripHeading);
        newTripContainer.appendChild(packingListContainer);
        newTripContainer.appendChild(todoListContainer);
        newTripContainer.appendChild(weatherContainer);

        // handle spaces in trip names for id/class setting
        if (tripData[i].city.indexOf(' ') >= 0) {
            let newID = tripData[i].city.replace(/\s/g, '');
            newTripContainer.id = `${newID}-trip`;
            tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${newID}-trip"></i>`
            tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${newID}-trip"></i>`
            tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${newID}-trip"></i>`
        } else {
            newTripContainer.id = `${tripData[i].city}-trip`;
            tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${tripCity.innerHTML}-trip"></i>`
            tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${tripCity.innerHTML}-trip"></i>`
            tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${tripCity.innerHTML}-trip"></i>`
        }

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

            addItemRows(itemRow, item, category);
            packingListContainer.appendChild(itemRow);
        }

        let addPackingItemsForm = document.createElement('div');
        let rootForm = document.querySelector('.packing-list-btn-container');
        let formWrapper = document.createElement('form');
        let input = rootForm.parentElement.children[1].children[0].children[0].cloneNode(true);
        let select = rootForm.parentElement.children[1].children[0].children[1].cloneNode(true); // works but still error
        console.log(select)

        formWrapper.classList.add('packing-list-form');
        addPackingItemsForm.classList.add('packing-list-btn-container');
        addPackingItemsForm.innerHTML = `<p>Missing something? Add more here:</p>`
        addPackingItemsForm.appendChild(formWrapper)
        formWrapper.appendChild(input);
        formWrapper.appendChild(select);

        let addMorePackBtn = document.createElement('button');
        addMorePackBtn.classList.add('add-more-btn', 'packing-list-btn-stv');
        addMorePackBtn.id = 'add-more-packing-stv';
        addMorePackBtn.innerHTML = `<i class="fas fa-plus"></i>`;

        formWrapper.appendChild(addMorePackBtn)

        packingListContainer.appendChild(addPackingItemsForm);
        packingListContainer.id = 'packing-list'

        let btnContainer = document.createElement('div');
        btnContainer.classList.add('trip-btn-container');
        packingListContainer.appendChild(btnContainer)

        let discardPackBtn = document.createElement('button');
        discardPackBtn.classList.add('save-trip-btn', 'discard', 'discard-packing-btn');
        discardPackBtn.innerHTML = 'Discard Changes';

        let savePackBtn = document.createElement('button');
        savePackBtn.classList.add('save-trip-btn', 'save', 'save-packing-btn');
        savePackBtn.innerHTML = 'Save Changes'

        btnContainer.appendChild(discardPackBtn);
        btnContainer.appendChild(savePackBtn);

        // let addMorePack = document.querySelector('#add-more-packing-stv');
        addMorePackBtn.addEventListener('click', function (event) {
            addMoreItems(event);
        });

        discardPackBtn.addEventListener('click', discardSTVItems(todoListContainer, packingListContainer));
        savePackBtn.addEventListener('click', saveSTVItems(tripCity, tripDates, todoListContainer, packingListContainer))

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

            addItemRows(itemRow, item, category)
            todoListContainer.appendChild(itemRow);
        }

        let addTodosForm = document.createElement('div');
        let rootTodoForm = document.querySelector('.todo-list-btn-container');
        let todoWrapper = document.createElement('form');
        let todoInput = rootTodoForm.parentElement.children[1].children[0].children[0].cloneNode(true);
        let todoSelect = rootTodoForm.parentElement.children[1].children[0].children[1].cloneNode(true);

        todoWrapper.classList.add('packing-list-form');
        addTodosForm.classList.add('packing-list-btn-container');
        addTodosForm.innerHTML = `<p>Missing something? Add more here:</p>`
        addTodosForm.appendChild(todoWrapper)
        todoWrapper.appendChild(todoInput);
        todoWrapper.appendChild(todoSelect);

        let addMoreTodoBtn = document.createElement('button');
        addMoreTodoBtn.classList.add('add-more-btn', 'packing-list-btn-stv');
        addMoreTodoBtn.id = 'add-more-packing-stv';
        addMoreTodoBtn.innerHTML = `<i class="fas fa-plus"></i>`;

        todoWrapper.appendChild(addMoreTodoBtn)

        todoListContainer.appendChild(addTodosForm);
        todoListContainer.id = 'todo-list'

        let todoBtnContainer = document.createElement('div');
        todoBtnContainer.classList.add('trip-btn-container');
        todoListContainer.appendChild(todoBtnContainer)

        let discardTodoBtn = document.createElement('button');
        discardTodoBtn.classList.add('save-trip-btn', 'discard', 'discard-todo-btn');
        discardTodoBtn.innerHTML = 'Discard Changes';

        let saveTodoBtn = document.createElement('button');
        saveTodoBtn.classList.add('save-trip-btn', 'save', 'save-todo-btn');
        saveTodoBtn.innerHTML = 'Save Changes';

        todoBtnContainer.appendChild(discardTodoBtn);
        todoBtnContainer.appendChild(saveTodoBtn);

        addMoreTodoBtn.addEventListener('click', function (event) {
            addMoreItems(event);
        });

        discardTodoBtn.addEventListener('click', discardSTVItems(todoListContainer, packingListContainer));
        saveTodoBtn.addEventListener('click', saveSTVItems(tripCity, tripDates, todoListContainer, packingListContainer));

        // WEATHER
        let weatherData = tripData[i].weather;
        weatherContainer.classList.add('forecast');
        let tripEnd = new Date(tripData[i].arrival);

        // remove old weather before trip date change
        if (weatherContainer.children.length > 0) { weatherContainer.children.remove() }

        // add new weather tripData
        for (let i = 0; i < weatherData.length; i++) {
            let newRow = document.createElement('div');
            const tripDate = document.createElement('div');
            const weatherIcon = document.createElement('img');
            const weather = document.createElement('div');
            weatherContainer.appendChild(newRow);

            setWeatherDOMStructure(newRow, tripDate, null, weatherIcon, weather);

            tripDate.innerHTML = weatherData[i].date;
            weatherIcon.src = `${weatherData[i].weatherIcon}`;
            weather.innerHTML = weatherData[i].weather;
        }

        // long forecast
        let longForecast = document.createElement('div');

        if (weatherData[0] !== undefined) {
            let weatherEnd = new Date(`${weatherData[weatherData.length - 1].date.slice(0, 1)}-${weatherData[weatherData.length - 1].date.slice(2, 4)}-21`);

            if (weatherEnd < tripEnd) {
                longForecast.innerHTML = `The forecast for some of your trip dates is outside the range of our weather app.`
                longForecast.style = 'width: 80vw; margin: 20px auto 0 auto; background-color: #83A8A6; padding: 20px;';
                weatherContainer.appendChild(longForecast);
            }
        } else if (weatherData[0] === undefined) {
            longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
            longForecast.style = 'width: 80vw; margin: 0 auto; background-color: #83A8A6; padding: 20px;';
            weatherContainer.appendChild(longForecast);
        }

        // trip data actions
        tripPackingList.addEventListener('click', displayData(packingListContainer, todoListContainer, weatherContainer))
        tripTodoList.addEventListener('click', displayData(packingListContainer, todoListContainer, weatherContainer))
        tripWeather.addEventListener('click', displayData(packingListContainer, todoListContainer, weatherContainer))
        editTrip.addEventListener('click', editTripDates)
        deleteTrip.addEventListener('click', removeData(tripData))
    }
}

// TRIP LEVEL FUNCTIONS
function displayData(packingListContainer, todoListContainer, weatherContainer) {
    return async function (event) {
        let allTrips = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children;
        let trips = document.querySelector('.saved-trips').children;

        // general display of data: packing, todo, weather
        if (event.target.classList[1] === 'fa-tshirt') {
            if (packingListContainer.style.display === 'none') {
                packingListContainer.style.display = 'block';
                weatherContainer.style.display = 'none';
                todoListContainer.style.display = 'none';

                for (let i = 0; i < allTrips.length; i++) {
                    if (event.target.classList[2] !== allTrips[i].id) { allTrips[i].style = "display: none;" }
                }
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none'
                for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }
            }
        } else if (event.target.classList[1] === 'fa-clipboard-list') {
            if (todoListContainer.style.display === 'none') {
                todoListContainer.style.display = 'block';
                packingListContainer.style.display = 'none';
                weatherContainer.style.display = 'none';

                for (let i = 0; i < allTrips.length; i++) {
                    if (event.target.classList[2] !== allTrips[i].id) { allTrips[i].style = "display: none;" }
                }
            } else if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none'
                for (let i = 0; i < trips.length; i++) { trips[i].style.display = 'block'; }
            }
        } else if (event.target.classList[1] === 'fa-sun') {
            if (weatherContainer.style.display === 'none') {
                weatherContainer.style.display = 'block';
                packingListContainer.style.display = 'none';
                todoListContainer.style.display = 'none';

                for (let i = 0; i < allTrips.length; i++) {
                    if (event.target.classList[2] !== allTrips[i].id) { allTrips[i].style = "display: none;" }
                }

            } else if (weatherContainer.style.display === 'block') {
                weatherContainer.style.display = 'none';
                for (let i = 0; i < trips.length; i++) { trips[i].style.display = 'block'; }
            }
        }
    }
}

function editTripDates(event) {
    let btn = event.target.parentElement;
    let tripCity = event.target.parentElement.parentElement.parentElement.children[1].innerText;
    let tripDates = event.target.parentElement.parentElement.parentElement.firstChild;
    let tripCityContainer = event.target.parentElement.parentElement.parentElement.children[1];
    let saveBtn = document.createElement('button');

    btn.disabled = true;
    tripDates.readOnly = false;
    tripDates.style = 'background-color: rgb(196, 69, 54); height: 5.7vh; box-sizing: border-box; padding: 15px 0 0 8px; margin-left: -15px;'
    tripCityContainer.style.width = "24%"
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style = 'margin: 0; height: 5.7vh; width: 10%; background-color: rgb(196, 69, 54); color: rgb(255, 255, 255);'
    tripDates.insertAdjacentElement('afterend', saveBtn);

    saveBtn.addEventListener('click', async function () {
        saveEditedTripDates(tripDates, saveBtn);

        // refresh page
        let trips = document.querySelector('.saved-trips').children;
        for (let i = trips.length - 1; i >= 0; i--) { trips[i].remove(); }

        let newTripDates = tripDates.value;
        let tripWeatherTestData = event.target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;

        await changeDatesInServer(newTripDates, tripCity, tripWeatherTestData)
        setTimeout(displayNewTrips, 1000);
    })
}

function saveEditedTripDates(editedItem) {
    let editBtn = editedItem.parentElement.children[3].children[3];
    let saveBtn = editedItem.parentElement.children[1];

    editedItem.readOnly = true;
    editedItem.style = 'background-color: transparent; padding-top: 18px;'
    editBtn.disabled = false;
    saveBtn.remove();
}

async function changeDatesInServer(newTripDates, tripCity, tripWeatherTestData) {
    addServerData('/tripdates', {
        city: tripCity,
        depart: newTripDates.slice(0, 5),
        return: newTripDates.slice(8, 13),
        weatherTest: tripWeatherTestData,
    });
}

async function displayNewTrips() { await getUserData('/all') }

function removeData() {
    return function (event) {
        let tripRow = event.target.parentElement.parentElement.parentElement.parentElement;
        let tripCity = event.target.parentElement.parentElement.previousElementSibling.innerText;
        let departDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
        let returnDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

        tripRow.remove();
        deleteFromServer(tripCity, departDate, returnDate)
    }
}

function deleteFromServer(tripCity, departDate, returnDate, itemToDelete) {
    deleteServerData('/remove', {
        city: tripCity,
        depart: departDate,
        return: returnDate,
        item: itemToDelete,
    });
}

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
        console.log(`DATA DELETED FROM SERVER`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO DELETE DATA FROM SERVER');
    }
};


// ITEM LEVEL FUNCTIONS
function addItemRows(itemRow, item, category) {
    let toggle = document.createElement('button');
    item.readOnly = true;
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    itemRow.appendChild(toggle);
    itemRow.appendChild(item)
    itemRow.appendChild(category);
    itemRow.appendChild(editBtn);
    itemRow.appendChild(deleteBtn);

    toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    deleteBtn.id = 'delete-item-btn';

    toggle.style = "width: 15vw; font-size: 1em;"
    item.style = "width: 30vw; font-size: 0.9em;"
    category.style = "width: 30vw; font-size: 0.9em;"
    editBtn.style = "width: 15vw; font-size: 1em; background: transparent;"
    deleteBtn.style = "width: 15vw; font-size: 1em; background: transparent;"

    editBtn.addEventListener('click', editItems)
    toggle.addEventListener('click', toggleData);
    deleteBtn.addEventListener('click', removeItem)
}

function saveSTVItems(tripCity, tripDates, todoListContainer, packingListContainer) {
    return function (event) {
        let allItemsContainer = event.target.parentElement.parentElement;
        let allItems = event.target.parentElement.parentElement.children;

        // delete items staged for removal
        for (let i = 0; i < allItems.length; i++) {
            while (allItemsContainer.children[i].style.display === 'none') { allItemsContainer.children[i].remove(); }
        }

        if (todoListContainer.style.display === 'block') {
            todoListContainer.style.display = 'none';
        } else if (packingListContainer.style.display === 'block') {
            packingListContainer.style.display = 'none';
        }

        // return hidden trips
        let trips = document.querySelector('.saved-trips').children;
        for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }

        let itemsArr = []

        for (let i = 0; i < allItems.length; i++) {
            // removed modified designation from STV view
            let classes = allItems[i].classList;
            let iterator = classes.entries();

            for (let value of iterator) {
                if (value[1] === 'modified') { allItems[i].classList.remove('modified'); }
            }

            // if no list items
            if (allItems.length < 3) {
                let newItem = {};
                let flag = event.target.parentElement.parentElement.id;
                newItem['item'] = null

                if (flag === 'todo-list') { newItem['listType'] = 'todo' }
                else if (flag === 'packing-list') { newItem['listType'] = 'packing' }
                itemsArr.push(newItem)
            }
            // if yes list items
            else {
                if (allItems[i].classList[0] === 'saved-trip-packing-list') {
                    let newItem = {}
                    let flag = allItems[i].classList[1]

                    newItem['item'] = allItems[i].children[1].value;
                    newItem['category'] = allItems[i].children[2].innerText;

                    // cite from MDN https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/entries
                    // iterates through classes to find packed flag and toggle
                    let classes = allItems[i].classList;
                    let iterator = classes.entries();

                    for (let value of iterator) {
                        if (value[1] === 'packed') { newItem['toggle'] = true }
                        else { newItem['toggle'] = false; }
                    }

                    if (flag === 'todo') { newItem['listType'] = 'todo' }
                    else if (flag === 'packing') { newItem['listType'] = 'packing' }

                    itemsArr.push(newItem)
                }
            }
        }
        updateServerLists(itemsArr, tripCity, tripDates)
    }
}

function updateServerLists(itemsArr, tripCity, tripDates) {
    addServerData('/list', {
        city: tripCity.innerText,
        depart: tripDates.innerHTML.slice(0, 5),
        return: tripDates.innerHTML.slice(8, 13),
        list: itemsArr
    });
}

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

function discardSTVItems(todoListContainer, packingListContainer) {
    return function (event) {
        if (todoListContainer.style.display === 'block') {
            todoListContainer.style.display = 'none';
            let children = todoListContainer.children;

            // return hidden trips
            let trips = document.querySelector('.saved-trips').children;
            for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }

            for (let i = 0; i < children.length; i++) {
                // remove items added via add more
                if (children[i].classList[2] == 'new-todo-item') { children[i].remove(); }

                // return 'deleted' items
                if (children[i].style.display = 'none') { children[i].style.display = 'flex'; }

                // fix toggle modifications
                let classes = children[i].classList;
                let iterator = classes.entries();

                for (let value of iterator) {
                    if (value[1] === 'modified') { children[i].classList.toggle('packed'); }
                }
            }
        } else if (packingListContainer.style.display === 'block') {
            packingListContainer.style.display = 'none';

            let children = packingListContainer.children;
            for (let i = 0; i < children.length; i++) {
                // remove items added via add more
                if (children[i].classList[2] == 'new-packing-item') { children[i].remove(); }

                // return 'deleted' items
                if (children[i].style.display = 'none') { children[i].style.display = 'flex'; }

                // fix toggle modifications
                let classes = children[i].classList;
                let iterator = classes.entries();

                for (let value of iterator) {
                    if (value[1] === 'modified') { children[i].classList.toggle('packed'); }
                }
            }
        }

        try {
            let allTrips = event.target.parentElement.parentElement.parentElement.parentElement.children;
            for (let i = 0; i < allTrips.length; i++) { allTrips[i].style = "display: block;" }
        } catch (e) { console.log(e) }
    }
};

function editItems(event) {
    let editedItem = event.target.parentElement.parentElement.children[1];
    let btn = event.target.parentElement;
    let saveBtn = document.createElement('button');

    editedItem.readOnly = false;
    editedItem.style = 'width: 50vw; background-color: #c44536; color: "#fff"; box-sizing: border-box; padding: 10px 0 0 20px; height: 5vh;';
    editedItem.insertAdjacentElement('afterend', saveBtn);

    btn.disabled = true;

    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style = 'margin: 0; padding: 0; background-color: #c44536; color: "#fff"; width: 12vw; height: 5vh;'
    saveBtn.addEventListener('click', function () { saveEditedItem(editedItem); })
}

function saveEditedItem(editedItem) {
    let editBtn = editedItem.parentElement.children[4];
    let saveBtn = editedItem.parentElement.children[2];

    editedItem.readOnly = true;
    editedItem.style = 'background-color: transparent; padding-top: 18px;'
    editBtn.disabled = false;
    saveBtn.remove();
}

function addMoreItems(event) {
    event.preventDefault();

    let itemRow = document.createElement('div');
    let item = document.createElement('textarea');
    let category = document.createElement('div');
    let nextItem = event.target.parentElement.children[0].value;
    let nextCat = event.target.parentElement.children[1].value;
    item.innerHTML = nextItem;
    category.innerHTML = nextCat;

    addItemRows(itemRow, item, category)

    event.target.parentElement.children[0].value = '';

    if (nextCat === 'Priority' || nextCat === 'High' || nextCat === 'Medium' || nextCat === 'Low') {
        itemRow.classList.add('saved-trip-packing-list', 'todo', 'new-todo-item');
        let todoList = event.target.parentElement.parentElement.parentElement.parentElement;
        todoList.insertBefore(itemRow, todoList.children[0])
    } else {
        itemRow.classList.add('saved-trip-packing-list', 'packing', 'new-packing-item');
        let packingList = event.target.parentElement.parentElement.parentElement.parentElement;
        packingList.insertBefore(itemRow, packingList.children[0])
    }
}

function toggleData(event) {
    event.target.parentElement.parentElement.classList.add('modified');
    event.target.parentElement.parentElement.classList.toggle('packed');
}

function removeItem(event) {
    let item = event.target.parentElement.parentElement;
    item.style.display = 'none';
}

export {
    removeData,
    viewSavedTrips,
    getUserData
}