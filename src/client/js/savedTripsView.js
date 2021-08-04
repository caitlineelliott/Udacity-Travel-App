document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips)

async function viewSavedTrips() {
    document.querySelector('.output').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
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
        const data = await request.json();
        displayTrip(data);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

function displayTrip(data) {
    // If no trips
    if (data.length === 0) {
        let noTripsContainer = document.createElement('div');
        noTripsContainer.classList.add('no-trips-container');
        noTripsContainer.innerHTML = `
                <h2>Uh oh!</h2>
                <div>You have no trips booked at this time.</div>
                <button id="book-trip" style="margin-top: 20px" onclick="location.href='index.html'">Book now!</button>`
        document.querySelector('nav').insertAdjacentElement('afterend', noTripsContainer);
    }

    // Display all trips
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

        // handle spaces in trip names for id setting
        if (data[i].city.indexOf(' ') >= 0) {
            let newID = data[i].city.replace(/\s/g, '');
            newTripContainer.id = `${newID}-trip`;
            tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${newID}-trip"></i>`
            tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${newID}-trip"></i>`
            tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${newID}-trip"></i>`
        } else {
            newTripContainer.id = `${data[i].city}-trip`;
            tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${tripCity.innerHTML}-trip"></i>`
            tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${tripCity.innerHTML}-trip"></i>`
            tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${tripCity.innerHTML}-trip"></i>`
        }

        tripContainer.appendChild(newTripContainer)

        // PACKING LIST
        let packedItems = data[i].packingList;
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
        </form>
    </div>`;

        {/*
                        <button id="add-more-packing-stv" class="add-more-btn packing-list-btn-stv"><i class="fas fa-plus"></i></button>
s
            
            <div class="trip-btn-container">
            <button class="save-trip-btn discard discard-packing-btn">Discard Changes</button>
            <button class="save-trip-btn save save-packing-btn">Save Changes</button>
        </div> */}

        let addMorePackBtn = document.createElement('button');
        addMorePackBtn.classList.add('add-more-btn', 'packing-list-btn-stv');
        addMorePackBtn.id = 'add-more-packing-stv';
        addMorePackBtn.innerHTML = `<i class="fas fa-plus"></i>`;

        let form = addMoreForm.childNodes[1].children[1];
        console.log(addMoreForm.childNodes[1].children[1])
        form.appendChild(addMorePackBtn)

        packingListContainer.appendChild(addMoreForm);
        packingListContainer.id = 'packing-list'

        let btnContainer = document.createElement('div');
        btnContainer.classList.add('trip-btn-container');
        packingListContainer.appendChild(btnContainer)

        let discardPackBtn = document.createElement('button');
        discardPackBtn.classList.add('save-trip-btn', 'discard', 'discard-packing-btn');
        discardPackBtn.innerHTML = 'Discard Changes';

        let savePackBtn = document.createElement('div');
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
        let todoList = data[i].todoList;
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

        // ADD MORE FORM
        let addMoreTodosForm = document.createElement('div');
        addMoreTodosForm.innerHTML = `
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
        </form>
    </div>`;

        let addMoreTodoBtn = document.createElement('button');
        addMoreTodoBtn.classList.add('add-more-btn', 'packing-list-btn-stv');
        addMoreTodoBtn.id = 'add-more-packing-stv';
        addMoreTodoBtn.innerHTML = `<i class="fas fa-plus"></i>`;

        let todoForm = addMoreTodosForm.childNodes[1].children[1];
        todoForm.appendChild(addMoreTodoBtn)

        todoListContainer.appendChild(addMoreTodosForm);
        todoListContainer.id = 'todo-list'

        let todoBtnContainer = document.createElement('div');
        todoBtnContainer.classList.add('trip-btn-container');
        todoListContainer.appendChild(todoBtnContainer)

        let discardTodoBtn = document.createElement('button');
        discardTodoBtn.classList.add('save-trip-btn', 'discard', 'discard-todo-btn');
        discardTodoBtn.innerHTML = 'Discard Changes';

        let saveTodoBtn = document.createElement('div');
        saveTodoBtn.classList.add('save-trip-btn', 'save', 'save-todo-btn');
        saveTodoBtn.innerHTML = 'Save Changes';

        todoBtnContainer.appendChild(discardTodoBtn);
        todoBtnContainer.appendChild(saveTodoBtn);

        // let addMorePack = document.querySelector('#add-more-packing-stv');
        addMoreTodoBtn.addEventListener('click', function (event) {
            addMoreItems(event);
        });

        discardTodoBtn.addEventListener('click', discardSTVItems(todoListContainer, packingListContainer));
        saveTodoBtn.addEventListener('click', saveSTVItems(tripCity, tripDates, todoListContainer, packingListContainer));

        // WEATHER
        let weatherData = data[i].weather;
        weatherContainer.classList.add('forecast');
        let tripStart = new Date(data[i].departure);
        let tripEnd = new Date(data[i].arrival);

        // remove old weather before trip date change
        if (weatherContainer.children.length > 0) { weatherContainer.children.remove() }

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
        tripPackingList.addEventListener('click', displayData(packingListContainer, todoListContainer, weatherContainer))
        tripTodoList.addEventListener('click', displayData(packingListContainer, todoListContainer, weatherContainer))
        tripWeather.addEventListener('click', displayData(packingListContainer, todoListContainer, weatherContainer))
        editTrip.addEventListener('click', editTripDates)
        deleteTrip.addEventListener('click', removeData(data))
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
                    if (event.target.classList[2] !== allTrips[i].id) {
                        allTrips[i].style = "display: none;"
                    }
                }
            } else if (packingListContainer.style.display === 'block') {
                packingListContainer.style.display = 'none'

                for (let i = 0; i < trips.length; i++) {
                    trips[i].style = 'display: block;'
                }
            }
        } else if (event.target.classList[1] === 'fa-clipboard-list') {
            if (todoListContainer.style.display === 'none') {
                todoListContainer.style.display = 'block';
                packingListContainer.style.display = 'none';
                weatherContainer.style.display = 'none';

                for (let i = 0; i < allTrips.length; i++) {
                    if (event.target.classList[2] !== allTrips[i].id) {
                        allTrips[i].style = "display: none;"
                    }
                }
            } else if (todoListContainer.style.display === 'block') {
                todoListContainer.style.display = 'none'

                for (let i = 0; i < trips.length; i++) {
                    trips[i].style.display = 'block';
                }
            }
        } else if (event.target.classList[1] === 'fa-sun') {
            if (weatherContainer.style.display === 'none') {
                weatherContainer.style.display = 'block';
                packingListContainer.style.display = 'none';
                todoListContainer.style.display = 'none';

                for (let i = 0; i < allTrips.length; i++) {
                    if (event.target.classList[2] !== allTrips[i].id) {
                        allTrips[i].style = "display: none;"
                    }
                }

            } else if (weatherContainer.style.display === 'block') {
                weatherContainer.style.display = 'none';

                for (let i = 0; i < trips.length; i++) {
                    trips[i].style.display = 'block';
                }
            }
        }
    }
}

function editTripDates(event) {
    let btn = event.target;
    let tripCity = event.target.parentElement.parentElement.parentElement.children[1].innerText;
    let tripDates = event.target.parentElement.parentElement.parentElement.firstChild;
    let tripCityContainer = event.target.parentElement.parentElement.parentElement.children[1];
    let saveBtn = document.createElement('button');

    btn.disabled = true;
    tripDates.readOnly = false;
    tripDates.style = 'background-color: rgb(196, 69, 54); height: 6.7vh; box-sizing: border-box; padding-left: 8px; margin-left: -15px;'
    tripCityContainer.style.width = "24%"
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style = 'margin: 0; height: 6.7vh; width: 10%; background-color: rgb(196, 69, 54); color: rgb(255, 255, 255);'
    tripDates.insertAdjacentElement('afterend', saveBtn);

    saveBtn.addEventListener('click', async function () {
        saveEditedTripDates(tripDates, saveBtn);

        // refresh page
        let trips = document.querySelector('.saved-trips').children;
        let tripsContainer = document.querySelector('.saved-trips');
        for (let i = trips.length - 1; i >= 0; i--) { trips[i].remove(); }

        let newTripDates = tripDates.value;
        let tripWeatherTestData = event.target.parentElement.parentElement.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;

        await changeDatesInServer(newTripDates, tripCity, tripWeatherTestData)

        tripsContainer.appendChild(loader);
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

async function displayNewTrips(loader) {
    await getUserData('/all')
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
        console.log(`DATA DELETED FROM SERVER ${makeDateAndTime()}`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO DELETE DATA FROM SERVER');
    }
};


// ITEM LEVE FUNCTIONS
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

    // leave off item and category here
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
        if (todoListContainer.style.display === 'block') {
            todoListContainer.style.display = 'none';
        } else if (packingListContainer.style.display === 'block') {
            packingListContainer.style.display = 'none';
        }

        let allItems = event.target.parentElement.parentElement.children;
        console.log(allItems)

        let itemsArr = []

        for (let i = 0; i < allItems.length; i++) {
            allItems[i].style = "display: flex;"

            // if no list items
            if (allItems.length < 3) {
                let newItem = {};

                let flag = event.target.parentElement.parentElement.id;
                console.log(flag)

                newItem['item'] = null

                if (flag === 'todo-list') {
                    newItem['listType'] = 'todo'
                } else if (flag === 'packing-list') {
                    newItem['listType'] = 'packing'
                }
                itemsArr.push(newItem)
                console.log(itemsArr)
            }
            // if yes list items
            else {
                if (allItems[i].classList[0] === 'saved-trip-packing-list') {
                    let newItem = {}
                    let flag = allItems[i].classList[1]

                    newItem['item'] = allItems[i].children[1].value;
                    newItem['category'] = allItems[i].children[2].innerText;

                    if (allItems[i].classList[2] === 'packed') {
                        newItem['toggle'] = true;
                    } else {
                        newItem['toggle'] = false;
                    }

                    if (flag === 'todo') {
                        newItem['listType'] = 'todo'
                    } else if (flag === 'packing') {
                        newItem['listType'] = 'packing'
                    }
                    itemsArr.push(newItem)
                }
            }
        }
        console.log(itemsArr)
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
            // remove discarded items
            let children = todoListContainer.children;
            for (let i = 0; i < children.length; i++) {
                if (children[i].classList[0] == 'saved-trip-packing-list') {
                    children[i].remove();
                }
            }
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

        try {
            let allTrips = event.target.parentElement.parentElement.parentElement.parentElement.children;

            for (let i = 0; i < allTrips.length; i++) {
                allTrips[i].style = "display: block;"

            }
        } catch (e) {
            console.log(e)
        }
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
    saveBtn.addEventListener('click', function () {
        saveEditedItem(editedItem);
    })
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

    console.log(nextItem, nextCat)

    addItemRows(itemRow, item, category)

    event.target.parentElement.children[0].value = '';

    if (nextCat === 'Priority' || nextCat === 'High' || nextCat === 'Medium' || nextCat === 'Low') {
        itemRow.classList.add('saved-trip-packing-list', 'todo');
        let todoList = event.target.parentElement.parentElement.parentElement.parentElement;
        todoList.insertBefore(itemRow, todoList.children[0])
    } else {
        itemRow.classList.add('saved-trip-packing-list', 'packing');
        let packingList = event.target.parentElement.parentElement.parentElement.parentElement;
        packingList.insertBefore(itemRow, packingList.children[0])
    }
}

function toggleData(event) {
    event.target.parentElement.parentElement.classList.toggle('packed');
    // add server link
}

function removeItem(event) {
    let item = event.target.parentElement.parentElement;
    item.remove();
}

export {
    removeData,
    viewSavedTrips,
    getUserData
}