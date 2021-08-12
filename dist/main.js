/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_handleSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/handleSubmit */ "./src/client/js/handleSubmit.js");
/* harmony import */ var _js_savedTripsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/savedTripsView */ "./src/client/js/savedTripsView.js");
/* harmony import */ var _js_viewNewTrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/viewNewTrip */ "./src/client/js/viewNewTrip.js");
/* harmony import */ var _js_addPackingItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/addPackingItem */ "./src/client/js/addPackingItem.js");
/* harmony import */ var _js_saveTrip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/saveTrip */ "./src/client/js/saveTrip.js");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_trip_form_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/trip-form.scss */ "./src/client/styles/trip-form.scss");
/* harmony import */ var _styles_new_trip_view_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/new-trip-view.scss */ "./src/client/styles/new-trip-view.scss");
/* harmony import */ var _styles_saved_trips_view_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/saved-trips-view.scss */ "./src/client/styles/saved-trips-view.scss");

















/***/ }),

/***/ "./src/client/js/addPackingItem.js":
/*!*****************************************!*\
  !*** ./src/client/js/addPackingItem.js ***!
  \*****************************************/
/*! exports provided: createElements, removeItems, appendItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElements", function() { return createElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItems", function() { return removeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendItem", function() { return appendItem; });
function createElements(event) {
    event.preventDefault();

    const blockElements = {
        "newItemCategoryLabel": document.createElement('div'),
        "newItemRow": document.createElement('div'),
    }

    const rowElements = {
        "newItemValue": document.createElement('textarea'),
        "editBtn": document.createElement('button'),
        "deleteBtn": document.createElement('button'),
    }

    rowElements.newItemValue.readOnly = true;
    rowElements.newItemValue.setAttribute('style', 'resize: none; ');

    let target = event.target.classList.value;

    setValues(target, blockElements, rowElements);

    // Toggles each item category open/closed
    blockElements.newItemCategoryLabel.addEventListener('click', function (event) {
        Array.from(event.target.children).forEach(function (item) {
            if (item.classList.contains('packing-list-row')) {
                item.classList.toggle('item-display');
            } else if (item.classList.contains('fa-chevron-down')) {
                item.classList.toggle('fa-chevron-up')
            }
        })
    })
}

async function setValues(target, blockElements, rowElements) {
    blockElements.newItemCategoryLabel.innerHTML = `${document.querySelector(`.${target}-category`).value} <i class="fas fa-chevron-down"></i>`;

    blockElements.newItemCategoryLabel.id = document.querySelector(`.${target}-category`).value;
    blockElements.newItemCategoryLabel.classList.add('select-categories');
    blockElements.newItemRow.classList.add('packing-list-row');

    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    rowElements.newItemValue.defaultValue = document.querySelector(`.${target}-item`).value;

    document.querySelector(`.${target}-item`).value = '';

    appendItem(target, blockElements, rowElements);
}

function appendItem(target, blockElements, rowElements) {
    const categoryArr = []

    let appendedElements = document.querySelector(`.${target}-container`).children;

    for (let i = 0; i < appendedElements.length; i++) { categoryArr.push(appendedElements[i].id); }

    if (!categoryArr.includes(blockElements.newItemCategoryLabel.id)) {
        document.querySelector(`.${target}-container`).appendChild(blockElements.newItemCategoryLabel);
        blockElements.newItemCategoryLabel.appendChild(blockElements.newItemRow);

    } else {
        let existingRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        existingRow.appendChild(blockElements.newItemRow);
    }

    for (let i = 0; i < Object.keys(rowElements).length; i++) {
        blockElements.newItemRow.appendChild(Object.values(rowElements)[i]);
        Object.values(rowElements)[i].id = Object.keys(rowElements)[i];
        Object.values(rowElements)[i].classList.add('packing-item-row-segment');
    }

    rowElements.editBtn.addEventListener('click', editNewItems);
    rowElements.deleteBtn.addEventListener('click', removeItems);
}

function editNewItems(event) {
    let editBtn = event.target;
    editBtn.disabled = true;

    let editibleItem = event.target.previousSibling;
    editibleItem.readOnly = false;
    editibleItem.style = "background-color: #c44536"

    let saveBtnNTV = document.createElement('button');
    saveBtnNTV.innerHTML = '<i class="fas fa-save"></i>';
    saveBtnNTV.style = 'height: 6vh; box-sizing: border-box; margin: 0; color: white; width: 12vw; background-color: #c44536;'
    editibleItem.insertAdjacentElement('afterend', saveBtnNTV);
    saveBtnNTV.addEventListener('click', function () {
        saveEditedItem(editBtn, editibleItem, saveBtnNTV);
    });
}

function saveEditedItem(editBtn, editibleItem, saveBtnNTV) {
    editBtn.disabled = false;
    editibleItem.readOnly = true;
    editibleItem.style.backgroundColor = '#83A8A6';
    saveBtnNTV.remove();
}

function removeItems(event) {
    let item = event.target.parentElement;
    let itemCategory = event.target.parentElement.parentElement;

    item.remove();
    if (itemCategory.children.length < 2) { itemCategory.remove() }
}





/***/ }),

/***/ "./src/client/js/handleSubmit.js":
/*!***************************************!*\
  !*** ./src/client/js/handleSubmit.js ***!
  \***************************************/
/*! exports provided: generate, getGeonames, getWeatherBit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeonames", function() { return getGeonames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherBit", function() { return getWeatherBit; });
/* harmony import */ var _viewNewTrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewNewTrip */ "./src/client/js/viewNewTrip.js");


// constrain trip date inputs on #initial-request form
// Lines 5-12 from StackOverflow: https://stackoverflow.com/questions/45529028/html-input-type-date-field-constraints
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) { dd = '0' + dd }
if (mm < 10) { mm = '0' + mm }
today = yyyy + '-' + mm + '-' + dd;

let departDate = document.querySelector('.depart-date');
departDate.setAttribute("min", today);

document.querySelector('.return-date').addEventListener('click', function (event) {
    document.querySelector('.return-date').setAttribute("min", departDate.value);
})

// generate trip data
document.querySelector('#initial-request').addEventListener('submit', function (event) {
    generate(event)
});

async function generate(event) {
    event.preventDefault();

    const tripCity = document.querySelector('.user-city').value
    const formDepart = document.querySelector('.depart-date').value;
    const formReturn = document.querySelector('.return-date').value;

    const departDate = new Date(`${formDepart} 00:00:00`);
    const returnDate = new Date(`${formReturn} 00:00:00`);
    const displayDepart = `${formDepart.slice(5, 7)}/${formDepart.slice(8, 10)}`
    const displayReturn = `${formReturn.slice(5, 7)}/${formReturn.slice(8, 10)}`

    const geonamesInfo = await getGeonames(tripCity, 'ceelliott'); // put username in .env file
    const userCity = geonamesInfo.geonames[0].name;
    const weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_0__["viewNewTrip"])(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo);
}

const getGeonames = async (placename, username) => {
    try {
        const request =
            await fetch(`http://api.geonames.org/searchJSON?q=${placename}&maxRows=1&username=${username}`);
        return await request.json();
    }
    catch (e) {
        console.log('FAILED TO FETCH GEONAMES API DATA:', e);
    }
};

const getWeatherBit = async (lat, lng) => {
    try {
        const request =
            await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}&units=I`);
        return await request.json();
    }
    catch (e) {
        console.log('no weatherbit data :(', e);
    }
};



/***/ }),

/***/ "./src/client/js/saveTrip.js":
/*!***********************************!*\
  !*** ./src/client/js/saveTrip.js ***!
  \***********************************/
/*! exports provided: updateServer, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServer", function() { return updateServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
function updateServer(userCity, departDate, returnDate, displayDepart, displayReturn, packingList, todoList, tripWeatherArr) {
    postData('/api/trip', {
        city: userCity,
        departure: departDate,
        displayDepart: displayDepart,
        displayReturn: displayReturn,
        arrival: returnDate,
        packingList: packingList,
        todoList: todoList,
        weather: tripWeatherArr,
    });
}

const postData = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(`DATA SENT TO SERVER`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO POST DATA TO SERVER');
    }
};



/***/ }),

/***/ "./src/client/js/savedTripsView.js":
/*!*****************************************!*\
  !*** ./src/client/js/savedTripsView.js ***!
  \*****************************************/
/*! exports provided: removeData, viewSavedTrips, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSavedTrips", function() { return viewSavedTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _viewNewTrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewNewTrip */ "./src/client/js/viewNewTrip.js");


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
        let input = rootForm.parentElement.children[1].children[0].children[0];
        let select = rootForm.parentElement.children[1].children[0].children[1];

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

        addPackingItemsForm.appendChild(addMorePackBtn)

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
        let todoInput = rootTodoForm.parentElement.children[1].children[0].children[0];
        let todoSelect = rootTodoForm.parentElement.children[1].children[0].children[1];

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

        addTodosForm.appendChild(addMoreTodoBtn)

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

            Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_0__["setWeatherDOMStructure"])(newRow, tripDate, null, weatherIcon, weather);

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
    tripDates.style = 'background-color: rgb(196, 69, 54); height: 6.7vh; box-sizing: border-box; padding-left: 8px; margin-left: -15px;'
    tripCityContainer.style.width = "24%"
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';
    saveBtn.style = 'margin: 0; height: 6.7vh; width: 10%; background-color: rgb(196, 69, 54); color: rgb(255, 255, 255);'
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



/***/ }),

/***/ "./src/client/js/viewNewTrip.js":
/*!**************************************!*\
  !*** ./src/client/js/viewNewTrip.js ***!
  \**************************************/
/*! exports provided: viewNewTrip, getRandomNum, setWeatherDOMStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewNewTrip", function() { return viewNewTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWeatherDOMStructure", function() { return setWeatherDOMStructure; });
/* harmony import */ var _addPackingItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPackingItem */ "./src/client/js/addPackingItem.js");
/* harmony import */ var _saveTrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTrip */ "./src/client/js/saveTrip.js");
/* harmony import */ var _savedTripsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savedTripsView */ "./src/client/js/savedTripsView.js");




async function viewNewTrip(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo) {
    document.querySelector('.initial-req-container').style.display = "none";
    let newTripContainer = document.querySelector('.new-trip-container');
    newTripContainer.style.display = "flex";

    // Update Banner Img
    let bannerImg = await getHeaderPhoto(userCity);
    if (bannerImg.hits[getRandomNum(0, bannerImg.hits.length)] === undefined) {
        console.log('undefined/no background') // TODO: add custom bg here?
    } else {
        document.querySelector('.banner').style.backgroundImage = `url('${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}')`;
    }

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
    let tripWeatherContainer = document.querySelector('.forecast');

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

        for (let i = 0; i < tripDaysCount.length; i++) {
            if (i > 4) { tripDaysCount[i].style.display = "none"; }
        }

        showMoreDays.addEventListener('click', function () {
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
    } else if (tripDaysCount.length < 6) {
        tripWeatherContainer.style = "padding-bottom: 20px;"
    }

    // Packing & Todo Add Item Form Listeners - executed in addPackingItem.js
    document.querySelector('.packing-list-btn').addEventListener('click', _addPackingItem__WEBPACK_IMPORTED_MODULE_0__["createElements"]);
    document.querySelector('.todo-list-btn').addEventListener('click', _addPackingItem__WEBPACK_IMPORTED_MODULE_0__["createElements"]);

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
            } else {
                packingList.push(item)
            }
        };

        // Save Confirmed View
        newTripContainer.style.display = "none";
        const saveConfirmed = document.querySelector('.trip-saved-container');
        saveConfirmed.style.display = 'flex';
        saveConfirmed.innerHTML = `
                <h2>Happy trails!</h2>
                <div>Your trip details have been saved.</div>
                <button id="view-saved-trips" style="margin-top: 20px">View Saved Trips</button>`
        document.querySelector('nav').insertAdjacentElement('afterend', saveConfirmed);

        let savedTripsBtn = document.querySelector('#view-saved-trips');
        savedTripsBtn.addEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_2__["viewSavedTrips"])

        let bookTripBtn = document.querySelector('.nav-saved-trips');
        bookTripBtn.removeEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_2__["viewSavedTrips"])
        bookTripBtn.innerHTML = `Book Trip`
        bookTripBtn.setAttribute("onclick", 'location.href="index.html"')

        Object(_saveTrip__WEBPACK_IMPORTED_MODULE_1__["updateServer"])(userCity, departDate, returnDate, displayDepart, displayReturn, packingList, todoList, tripWeatherArr);
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

    if (newTripContainer) {
        setWeatherValues(newRow, tripDate, tripDates, weatherIcon, tripWeather, weather, tripDaysCount, tripWeatherArr)
    } else if (newTripContainer === undefined) {
        return;
    }
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



/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/new-trip-view.scss":
/*!**********************************************!*\
  !*** ./src/client/styles/new-trip-view.scss ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/saved-trips-view.scss":
/*!*************************************************!*\
  !*** ./src/client/styles/saved-trips-view.scss ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/trip-form.scss":
/*!******************************************!*\
  !*** ./src/client/styles/trip-form.scss ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=main.js.map