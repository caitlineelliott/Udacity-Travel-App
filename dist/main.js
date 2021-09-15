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
/* harmony import */ var _js_modifyItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modifyItems */ "./src/client/js/modifyItems.js");
/* harmony import */ var _js_savedTripsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/savedTripsView */ "./src/client/js/savedTripsView.js");
/* harmony import */ var _js_serverRequests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/serverRequests */ "./src/client/js/serverRequests.js");
/* harmony import */ var _js_viewNewTrip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/viewNewTrip */ "./src/client/js/viewNewTrip.js");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_trip_form_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/trip-form.scss */ "./src/client/styles/trip-form.scss");
/* harmony import */ var _styles_new_trip_view_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/new-trip-view.scss */ "./src/client/styles/new-trip-view.scss");
/* harmony import */ var _styles_saved_trips_view_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/saved-trips-view.scss */ "./src/client/styles/saved-trips-view.scss");












/***/ }),

/***/ "./src/client/js/appendItems.js":
/*!**************************************!*\
  !*** ./src/client/js/appendItems.js ***!
  \**************************************/
/*! exports provided: appendItems, appendNewItems, appendExistingItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendItems", function() { return appendItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendNewItems", function() { return appendNewItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendExistingItems", function() { return appendExistingItems; });
/* harmony import */ var _modifyItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyItems */ "./src/client/js/modifyItems.js");


const appendItems = (itemRow, item, category) => {
    let toggle = document.createElement('button');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

    editBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["editItems"]);
    deleteBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["removeItems"]);
    toggle.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["toggleItems"]);


    if (itemRow !== null) { appendExistingItems(itemRow, item, category, toggle, editBtn, deleteBtn); } // stv

    return function (event) {
        event.preventDefault();

        let toggle = document.createElement('button');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
        editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
        deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

        editBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["editItems"]);
        deleteBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["removeItems"]);
        toggle.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["toggleItems"]);

        if (itemRow === null) { appendNewItems(event, toggle, editBtn, deleteBtn); } // ntv
    };
};

const appendNewItems = (event, toggle, editBtn, deleteBtn) => {
    event.preventDefault();

    let itemRow = document.createElement('div');
    let item = document.createElement('textarea');
    let category = document.createElement('div');
    let categoryLabel = document.createElement('div');

    item.innerHTML = event.target.parentElement.children[0].value;
    category.innerHTML = event.target.parentElement.children[1].value;
    categoryLabel.innerHTML = `<div class="select-categories">${category.innerHTML} <i class="fas fa-chevron-down"></i></div>`;

    // split function basedn on ntv or stv
    let target = event.target.classList[0];
    let newTarget = target.substring(target.length - 3);
    if (newTarget === 'ntv') {
        itemRow.classList.add('new-items-row');
        editBtn.classList.add('edit-items-ntv');
        deleteBtn.classList.add('delete-items-ntv');
        categoryLabel.id = `${category.innerHTML}`;
        categoryLabel.classList.add('category-group');

        itemRow.appendChild(item);
        itemRow.appendChild(editBtn);
        itemRow.appendChild(deleteBtn);

        const categoryArr = [];
        let appendedElements = event.target.parentElement.parentElement.children;
        let itemContainer = event.target.parentElement.parentElement;

        for (let i = 2; i < appendedElements.length; i++) { categoryArr.push(appendedElements[i].id); }

        // Determines which category to append items under
        if (!categoryArr.includes(categoryLabel.id)) {
            itemContainer.appendChild(categoryLabel);
            categoryLabel.appendChild(itemRow);
        } else {
            let existingRow = document.querySelector(`#${categoryLabel.id}`);
            existingRow.appendChild(itemRow);
        }
    } else if (newTarget === 'stv') {
        styleItems(itemRow, item, category, toggle, editBtn, deleteBtn);
        if (category.innerText === 'Priority' || category.innerText === 'High' || category.innerText === 'Medium' || category.innerText === 'Low') {
            itemRow.classList.add('saved-trip-packing-list', 'todo', 'new-todo-item');
            let todoList = event.target.parentElement.parentElement;
            todoList.insertBefore(itemRow, todoList.children[0]);
        } else {
            itemRow.classList.add('saved-trip-packing-list', 'packing', 'new-packing-item');
            let packingList = event.target.parentElement.parentElement;
            packingList.insertBefore(itemRow, packingList.children[0]);
        }
    }

    event.target.parentElement.children[0].value = '';

    // Toggles each item category open/closed
    categoryLabel.addEventListener('click', function (event) {
        Array.from(event.target.parentElement.children).forEach(function (item) {
            if (item.classList[0] === 'new-items-row') {
                if (item.style.display === 'none') { item.style.display = 'flex'; }
                else { item.style.display = 'none'; }
            } else if (item.lastChild.classList.contains('fa-chevron-down')) {
                item.lastChild.classList.toggle('fa-chevron-up');
            }
        });
    });
};

const appendExistingItems = (itemRow, item, category, toggle, editBtn, deleteBtn) => {
    styleItems(itemRow, item, category, toggle, editBtn, deleteBtn);
};

const styleItems = (itemRow, item, category, toggle, editBtn, deleteBtn) => {
    toggle.classList.add('toggle');
    item.classList.add('stv-item');
    category.classList.add('stv-category');
    editBtn.classList.add('edit-items-stv');
    deleteBtn.classList.add('delete-items-stv');

    itemRow.appendChild(toggle);
    itemRow.appendChild(item);
    itemRow.appendChild(category);
    itemRow.appendChild(editBtn);
    itemRow.appendChild(deleteBtn);
};



/***/ }),

/***/ "./src/client/js/createForm.js":
/*!*************************************!*\
  !*** ./src/client/js/createForm.js ***!
  \*************************************/
/*! exports provided: createForm, discardSTVItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discardSTVItems", function() { return discardSTVItems; });
/* harmony import */ var _appendItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendItems */ "./src/client/js/appendItems.js");
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");




const createForm = (tripCity, tripDates, packingListContainer, todoListContainer) => {
    let packingContainer = document.querySelector('.packing-list-container');
    let todoContainer = document.querySelector('.todo-list-container');
    let packForm = packingContainer.children[1].cloneNode(true);
    let todoForm = todoContainer.children[1].cloneNode(true);
    let addPackBtn = packForm.children[2];
    let addTodoBtn = todoForm.children[2];
    let addMoreHeading = document.createElement('p');
    let btnContainer = document.querySelector('.trip-btn-container').cloneNode(true);
    let todoBtnContainer = btnContainer.cloneNode(true);
    let discardPackBtn = btnContainer.children[0];
    let discardTodoBtn = todoBtnContainer.children[0];
    let savePackBtn = btnContainer.children[1];
    let saveTodoBtn = todoBtnContainer.children[1];

    addPackBtn.classList.remove('add-more-pack-btn-ntv');
    addTodoBtn.classList.remove('add-more-todo-btn-ntv');
    addTodoBtn.classList.add('add-more-todo-btn-stv');
    addPackBtn.classList.add('add-more-pack-btn-stv');

    addMoreHeading.innerHTML = `Missing something? Add more here:`;
    discardPackBtn.innerHTML = 'Discard Changes';
    discardTodoBtn.innerHTML = 'Discard Changes';
    savePackBtn.innerHTML = 'Save Changes';
    saveTodoBtn.innerHTML = 'Save Changes';

    packingListContainer.appendChild(addMoreHeading);
    packingListContainer.appendChild(packForm);
    packingListContainer.appendChild(btnContainer);

    todoListContainer.appendChild(addMoreHeading.cloneNode(true));
    todoListContainer.appendChild(todoForm);
    todoListContainer.appendChild(todoBtnContainer);

    addPackBtn.addEventListener('click', Object(_appendItems__WEBPACK_IMPORTED_MODULE_0__["appendItems"])(null, null, null));
    addTodoBtn.addEventListener('click', Object(_appendItems__WEBPACK_IMPORTED_MODULE_0__["appendItems"])(null, null, null));
    discardPackBtn.addEventListener('click', discardSTVItems);
    discardTodoBtn.addEventListener('click', discardSTVItems);
    savePackBtn.addEventListener('click', saveSTVItems(tripCity, tripDates));
    saveTodoBtn.addEventListener('click', saveSTVItems(tripCity, tripDates));
};

const discardSTVItems = (event) => {
    console.log(event.target)
    let allItemsContainer = event.target.parentElement.parentElement;

    console.log(allItemsContainer)

    if (allItemsContainer.style.display === 'block') {
        allItemsContainer.style.display = 'none';
    }

    // return hidden trips
    let trips = document.querySelector('.saved-trips').children;
    for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;'; }

    let children = allItemsContainer.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList[2] == 'new-todo-item' || children[i].classList[2] == 'new-packing-item') { children[i].remove(); }
        if (children[i].style.display = 'none') { children[i].style.display = 'flex;'; }
        let classes = children[i].classList;
        let iterator = classes.entries();
        for (let value of iterator) { if (value[1] === 'modified') { children[i].classList.toggle('packed'); } }
    }
};

const saveSTVItems = (tripCity, tripDates) => {
    return function (event) {
        let allItemsContainer = event.target.parentElement.parentElement;
        let allItems = event.target.parentElement.parentElement.children;

        // delete items staged for removal
        for (let i = 0; i < allItems.length; i++) {
            while (allItemsContainer.children[i].style.display === 'none') { allItemsContainer.children[i].remove(); }
        }

        if (allItemsContainer.style.display === 'block') { allItemsContainer.style.display = 'none'; }

        // return hidden trips
        let trips = document.querySelector('.saved-trips').children;
        for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;'; }

        let itemsArr = [];
        for (let i = 0; i < allItems.length; i++) {
            // removed modified designation from STV view
            let classes = allItems[i].classList;
            let iterator = classes.entries();
            for (let value of iterator) { if (value[1] === 'modified') { allItems[i].classList.remove('modified'); } }

            // if no list items
            if (allItems.length < 3) {
                let newItem = {};
                let flag = event.target.parentElement.parentElement.classList[0];
                newItem.item = null;

                if (flag === 'todo-list') { newItem.listType = 'todo'; }
                else if (flag === 'packing-list') { newItem.listType = 'packing'; }
                itemsArr.push(newItem);
            }
            // if yes list items
            else {
                if (allItems[i].classList[0] === 'saved-trip-packing-list') {
                    let newItem = {};
                    let flag = allItems[i].classList[1];
                    newItem.item = allItems[i].children[1].value;
                    newItem.category = allItems[i].children[2].innerText;

                    // cite from MDN https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/entries
                    // iterates through classes to find packed flag and toggle
                    let classes = allItems[i].classList;
                    let iterator = classes.entries();

                    for (let value of iterator) {
                        if (value[1] === 'packed') { newItem.toggle = true; }
                        else { newItem.toggle = false; }
                    }

                    if (flag === 'todo') { newItem.listType = 'todo'; }
                    else if (flag === 'packing') { newItem.listType = 'packing'; }

                    itemsArr.push(newItem);
                }
            }
        }
        Object(_serverRequests__WEBPACK_IMPORTED_MODULE_1__["postData"])('/list', { city: tripCity.innerText, depart: tripDates.innerHTML.slice(0, 5), return: tripDates.innerHTML.slice(8, 13), list: itemsArr });
    };
};



/***/ }),

/***/ "./src/client/js/displayWeather.js":
/*!*****************************************!*\
  !*** ./src/client/js/displayWeather.js ***!
  \*****************************************/
/*! exports provided: displayWeather, displayLongForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayWeather", function() { return displayWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayLongForecast", function() { return displayLongForecast; });
const displayWeather = (weatherContainer, newTripContainer, loopDates, loopForecast, tripDaysCount, tripWeatherArr, loopWeather) => {
    let newRow = document.createElement('div');
    const tripDate = document.createElement('div');
    const weatherIcon = document.createElement('img');
    const weather = document.createElement('div');

    newRow.classList.add('forecast-row');
    tripDate.classList.add('forecast-date');
    weatherIcon.classList.add('forecast-icon');
    weather.classList.add('forecast-temp');

    newRow.appendChild(tripDate);
    newRow.appendChild(weatherIcon);
    newRow.appendChild(weather);

    weatherContainer.appendChild(newRow);

    if (newTripContainer) {
        let tripDates = loopDates;
        let tripWeather = loopForecast;

        tripDate.innerHTML = `${tripDates.getMonth() + 1} /${tripDates.getDate()}`;
        weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${tripWeather.weather.icon}.png`;
        weather.innerHTML = `${tripWeather.high_temp}°F / ${tripWeather.low_temp}°F`;

        tripDaysCount.push(newRow);

        if (loopForecast.app_temp) {
            weatherContainer.firstElementChild.innerHTML = 'Current Weather';
            weather.innerHTML = `${loopForecast.app_temp}°F`;
        }

        let tripDayData = {};
        tripDayData.date = tripDate.innerHTML;
        tripDayData.weatherIcon = weatherIcon.src;
        tripDayData.weather = weather.innerHTML;
        tripWeatherArr.push(tripDayData);
    }
    else if (newTripContainer === undefined) {
        tripDate.innerHTML = loopWeather.date;
        weatherIcon.src = `${loopWeather.weatherIcon}`;
        weather.innerHTML = loopWeather.weather;
    }
};

const displayLongForecast = (departDate, returnDate, lastDay, weatherData, tripEnd, weatherContainer, tripDaysCount) => {
    let longForecast = document.createElement('div');
    console.log(typeof returnDate, typeof lastDay)

    if (departDate > lastDay) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`;
    } else if (returnDate > lastDay) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `The forecast for some of your trip dates is outside the range of our weather app.`;
    }

    weatherContainer.appendChild(longForecast);

    if (tripDaysCount.length < 6) { weatherContainer.style = "padding-bottom: 20px;"; }
    if (weatherContainer.parentElement.parentElement.classList[0] === 'saved-trips') {
        console.log(weatherContainer)
        weatherContainer.lastChild.style = 'padding: 20px; margin: 0 auto';
    }
};



/***/ }),

/***/ "./src/client/js/handleSubmit.js":
/*!***************************************!*\
  !*** ./src/client/js/handleSubmit.js ***!
  \***************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _viewNewTrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewNewTrip */ "./src/client/js/viewNewTrip.js");
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayWeather */ "./src/client/js/displayWeather.js");




// Lines 5-12 from StackOverflow: https://stackoverflow.com/questions/45529028/html-input-type-date-field-constraints
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) { dd = '0' + dd; }
if (mm < 10) { mm = '0' + mm; }
let currentDate = yyyy + '-' + mm + '-' + dd;

document.addEventListener('DOMContentLoaded', function () {
    let departDate = document.querySelector('.depart-date');
    departDate.setAttribute("min", currentDate);

    document.querySelector('.return-date').addEventListener('click', function () {
        document.querySelector('.return-date').setAttribute("min", departDate.value);
    });

    document.querySelector('#initial-request-form').addEventListener('submit', function (event) { generate(event); });
});

// Generate trip data
const generate = async (event) => {
    event.preventDefault();

    const tripCity = document.querySelector('.user-city').value;
    const formDepart = document.querySelector('.depart-date').value;
    const formReturn = document.querySelector('.return-date').value;
    const departDate = new Date(`${formDepart} 00:00:00`);
    const returnDate = new Date(`${formReturn} 00:00:00`);
    const displayDepart = `${formDepart.slice(5, 7)}/${formDepart.slice(8, 10)}`;
    const displayReturn = `${formReturn.slice(5, 7)}/${formReturn.slice(8, 10)}`;

    await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_1__["postData"])('/api', { city: tripCity, departDate: departDate, returnDate: returnDate, displayDepart: displayDepart, displayReturn: displayReturn });
    await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_1__["getUnsavedTrip"])('/api/unsaved');
};



/***/ }),

/***/ "./src/client/js/modifyItems.js":
/*!**************************************!*\
  !*** ./src/client/js/modifyItems.js ***!
  \**************************************/
/*! exports provided: editItems, removeItems, toggleItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editItems", function() { return editItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItems", function() { return removeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleItems", function() { return toggleItems; });
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");


const editItems = (event) => {
    let editBtn = event.target;
    editBtn.disabled = true;
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';

    if (event.target.classList.contains('edit-items-ntv')) {
        let item = event.target.previousSibling;
        item.style = 'color: white;';
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-trip')) {
        let item = event.target.parentElement.parentElement.firstChild;
        item.style = 'box-sizing: border-box; padding: 20px 0 0 8px; color: black; height: 8vh';
        saveBtn.style = 'padding: 0; height: 8vh; font-size: 1.25vw; color: black; margin: 0';
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-items-stv')) {
        let item = event.target.parentElement.children[1];
        item.style = "box-sizing: border-box; padding: 18px 10px 10px 10px; height: 7vh; color: white;";
        saveBtn.style = 'height: 7vh';
        modifyEditedItems(item, saveBtn, editBtn);
    }
};

const modifyEditedItems = (item, saveBtn, editBtn) => {
    item.readOnly = false;
    item.style.backgroundColor = "#c44536";
    saveBtn.classList.add('save-btn');
    item.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () { saveEditedItem(item, saveBtn, editBtn); });
};

const saveEditedItem = (item, saveBtn, editBtn) => {
    item.readOnly = true;
    item.style.backgroundColor = '#83A8A6';
    editBtn.disabled = false;
    saveBtn.remove();

    if (item.classList.contains('trip-dates')) {
        item.style.backgroundColor = '#197278';
        item.style.color = 'white';
        updateTripDates(item);
    } else { item.style.color = 'black'; }
};

const updateTripDates = async (item) => {
    // remove old trips from DOM
    let trips = document.querySelector('.saved-trips').children;
    for (let i = trips.length - 1; i >= 0; i--) { trips[i].remove(); }

    let newTripDates = item.value;
    let tripCity = item.parentElement.children[1].innerText;
    let tripWeatherTestData = item.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;

    setTimeout(displayNewTrips, 1000);
    await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_0__["postData"])('/tripdates', { city: tripCity, depart: newTripDates.slice(0, 5), return: newTripDates.slice(8, 13), weatherTest: tripWeatherTestData, });
};

// display new trips
const displayNewTrips = async () => { await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_0__["getUserData"])('/all'); };

// delete items - NTV packing & todo, STV packing & todo, STV trips
const removeItems = (event) => {
    if (!event.target.classList.contains('delete-trip')) {
        let item = event.target.parentElement;
        if (event.target.classList.contains('delete-items-ntv')) {
            let itemCategory = event.target.parentElement.parentElement;
            if (itemCategory.children.length < 3) { itemCategory.remove(); }
            item.remove();
        } else if (event.target.classList.contains('delete-items-stv')) {
            item.style.display = 'none';
        }
    } else {
        let item = event.target.parentElement.parentElement;
        let tripCity = event.target.parentElement.previousElementSibling.innerText;
        let departDate = event.target.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
        let returnDate = event.target.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

        item.remove();
        Object(_serverRequests__WEBPACK_IMPORTED_MODULE_0__["deleteServerData"])('/remove', { city: tripCity, depart: departDate, return: returnDate });
    }
};

const toggleItems = (event) => {
    console.log(event.target)
    event.target.parentElement.classList.add('modified');
    event.target.parentElement.classList.toggle('packed');
};



/***/ }),

/***/ "./src/client/js/savedTripsView.js":
/*!*****************************************!*\
  !*** ./src/client/js/savedTripsView.js ***!
  \*****************************************/
/*! exports provided: displayTrip, viewSavedTrips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTrip", function() { return displayTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSavedTrips", function() { return viewSavedTrips; });
/* harmony import */ var _modifyItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyItems */ "./src/client/js/modifyItems.js");
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");
/* harmony import */ var _appendItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appendItems */ "./src/client/js/appendItems.js");
/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createForm */ "./src/client/js/createForm.js");
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayWeather */ "./src/client/js/displayWeather.js");






const viewSavedTrips = async () => {
    let container = document.querySelector('main');
    for (let i = 0; i < container.children.length; i++) { container.children[i].style.display = 'none'; }

    document.querySelector('h1').innerHTML = 'Saved Trips';

    let savedTripsBtn = document.querySelector('.main-nav-btn');
    savedTripsBtn.removeEventListener('click', viewSavedTrips);
    savedTripsBtn.innerHTML = `Book Trip`;
    savedTripsBtn.setAttribute("onclick", 'location.href="index.html"');
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_1__["getUserData"])('/all');
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

                Object(_appendItems__WEBPACK_IMPORTED_MODULE_2__["appendItems"])(itemRow, item, category);
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

                Object(_appendItems__WEBPACK_IMPORTED_MODULE_2__["appendItems"])(itemRow, item, category);
                todoListContainer.appendChild(itemRow);
            }

            Object(_createForm__WEBPACK_IMPORTED_MODULE_3__["createForm"])(tripCity, tripDates, packingListContainer, todoListContainer);

            // WEATHER
            let weatherData = tripData[i].weather;
            let tripEnd = new Date(tripData[i].arrival);

            // remove old weather before trip date change
            if (weatherContainer.children.length > 0) { weatherContainer.children.remove(); }

            // add new weather tripData
            for (let i = 0; i < weatherData.length; i++) {
                let loopWeather = weatherData[i];
                Object(_displayWeather__WEBPACK_IMPORTED_MODULE_4__["displayWeather"])(weatherContainer, undefined, undefined, undefined, undefined, undefined, loopWeather);
            }

            Object(_displayWeather__WEBPACK_IMPORTED_MODULE_4__["displayLongForecast"])(null, 2, 1, weatherData, tripEnd, weatherContainer, 'tripDaysCount');

            tripPackingList.addEventListener('click', displayData);
            tripTodoList.addEventListener('click', displayData);
            tripWeather.addEventListener('click', displayData);
            editTrip.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["editItems"]);
            deleteTrip.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["removeItems"]);
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
                } else {
                    tripBlock.children[i].style.display = 'block';
                    let elements = tripBlock.children[i].children;
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.display = 'flex';
                    }
                }
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



/***/ }),

/***/ "./src/client/js/serverRequests.js":
/*!*****************************************!*\
  !*** ./src/client/js/serverRequests.js ***!
  \*****************************************/
/*! exports provided: getUserData, postData, deleteServerData, getUnsavedTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteServerData", function() { return deleteServerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnsavedTrip", function() { return getUnsavedTrip; });
/* harmony import */ var _savedTripsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedTripsView */ "./src/client/js/savedTripsView.js");
/* harmony import */ var _viewNewTrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewNewTrip */ "./src/client/js/viewNewTrip.js");



const getUnsavedTrip = async (url) => {
    try {
        const request = await fetch(url);
        const newTrip = await request.json();
        Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_1__["viewNewTrip"])(newTrip)
    }
    catch (e) { console.log('DATA NOT RETREIVED FROM SERVER', e); }
};

const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const tripData = await request.json();
        Object(_savedTripsView__WEBPACK_IMPORTED_MODULE_0__["displayTrip"])(tripData);
    }
    catch (e) { console.log('DATA NOT RETREIVED FROM SERVER', e); }
};

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
        return await response.json();
    }
    catch (e) { console.log('FAILED TO POST DATA TO SERVER', e); }
};

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
        return await response.json();
    }
    catch (e) { console.log('FAILED TO DELETE DATA FROM SERVER', e); }
};




/***/ }),

/***/ "./src/client/js/viewNewTrip.js":
/*!**************************************!*\
  !*** ./src/client/js/viewNewTrip.js ***!
  \**************************************/
/*! exports provided: viewNewTrip, getRandomNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewNewTrip", function() { return viewNewTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
/* harmony import */ var _savedTripsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedTripsView */ "./src/client/js/savedTripsView.js");
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");
/* harmony import */ var _appendItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appendItems */ "./src/client/js/appendItems.js");
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayWeather */ "./src/client/js/displayWeather.js");





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
        if (newTrip[0].whichWeather !== null) {
            if (dates[i] >= departDate && dates[i] <= returnDate) {
                let loopDates = dates[i];
                let loopForecast = forecast[i];
                Object(_displayWeather__WEBPACK_IMPORTED_MODULE_3__["displayWeather"])(weatherContainer, newTripContainer, loopDates, loopForecast, tripDaysCount, tripWeatherArr);
            }
        }
        else if (newTrip[0].whichWeather === null) {
            let today = new Date();
            today.setHours(0, 0, 0, 0);
            if (dates[0].getTime() === today.getTime()) {
                let date = dates[0];
                let dateWeather = forecast[0];
                Object(_displayWeather__WEBPACK_IMPORTED_MODULE_3__["displayWeather"])(weatherContainer, newTripContainer, date, dateWeather, tripDaysCount, tripWeatherArr);
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
    Object(_displayWeather__WEBPACK_IMPORTED_MODULE_3__["displayLongForecast"])(departDate, returnDate, lastDay, weatherData, null, weatherContainer, tripDaysCount);

    // Packing & Todo Add Item Form Listeners - executed in addPackingItem.js
    document.querySelector('.add-more-pack-btn-ntv').addEventListener('click', Object(_appendItems__WEBPACK_IMPORTED_MODULE_2__["appendItems"])(null, null, null));
    document.querySelector('.add-more-todo-btn-ntv').addEventListener('click', Object(_appendItems__WEBPACK_IMPORTED_MODULE_2__["appendItems"])(null, null, null));

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
        savedTripsBtn.addEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_0__["viewSavedTrips"]);

        let bookTripBtn = document.querySelector('.main-nav-btn');
        bookTripBtn.removeEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_0__["viewSavedTrips"]);
        bookTripBtn.innerHTML = `Book Trip`;
        bookTripBtn.setAttribute("onclick", 'location.href="index.html"');

        Object(_serverRequests__WEBPACK_IMPORTED_MODULE_1__["postData"])('/api/trip', { city: newTrip[0].userCity, departure: newTrip[0].departDate, displayDepart: newTrip[0].displayDepart, displayReturn: newTrip[0].displayReturn, arrival: newTrip[0].returnDate, packingList: packingList, todoList: todoList, weather: tripWeatherArr, });
    });
};

// Lines 113-117 modified from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};



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