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
/* harmony import */ var _js_serverRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/serverRequests */ "./src/client/js/serverRequests.js");
/* harmony import */ var _js_viewNewTrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/viewNewTrip */ "./src/client/js/viewNewTrip.js");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_trip_form_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/trip-form.scss */ "./src/client/styles/trip-form.scss");
/* harmony import */ var _styles_new_trip_view_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/new-trip-view.scss */ "./src/client/styles/new-trip-view.scss");
/* harmony import */ var _styles_saved_trips_view_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/saved-trips-view.scss */ "./src/client/styles/saved-trips-view.scss");










/***/ }),

/***/ "./src/client/js/addPackingItem.js":
/*!*****************************************!*\
  !*** ./src/client/js/addPackingItem.js ***!
  \*****************************************/
/*! exports provided: createElements, appendItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElements", function() { return createElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendItem", function() { return appendItem; });
/* harmony import */ var _modifyItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyItems */ "./src/client/js/modifyItems.js");



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
            if (item.classList[0] === 'packing-list-row') {
                if (item.style.display === 'none') { item.style.display = 'flex' }
                else { item.style.display = 'none' }
            } else if (item.classList.contains('fa-chevron-down')) {
                item.classList.toggle('fa-chevron-up')
            }
        })
    })
}

async function setValues(target, blockElements, rowElements) {
    blockElements.newItemRow.classList.add('packing-list-row');

    blockElements.newItemCategoryLabel.innerHTML = `${document.querySelector(`.${target}-category`).value} <i class="fas fa-chevron-down"></i>`;
    blockElements.newItemCategoryLabel.id = document.querySelector(`.${target}-category`).value;
    blockElements.newItemCategoryLabel.classList.add('select-categories');

    rowElements.newItemValue.defaultValue = document.querySelector(`.${target}-item`).value;
    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

    rowElements.editBtn.classList.add('edit-items-ntv');
    rowElements.deleteBtn.classList.add('delete-items-ntv');

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

    rowElements.editBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["editItems"]);
    rowElements.deleteBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["removeItems"]);
}



/***/ }),

/***/ "./src/client/js/apiRequests.js":
/*!**************************************!*\
  !*** ./src/client/js/apiRequests.js ***!
  \**************************************/
/*! exports provided: getGeonames, getWeatherBit, getHeaderPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeonames", function() { return getGeonames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherBit", function() { return getWeatherBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderPhoto", function() { return getHeaderPhoto; });
const getGeonames = async (placename, username) => {
    try {
        const request = await fetch(`http://api.geonames.org/searchJSON?q=${placename}&maxRows=1&username=${username}`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
};

const getWeatherBit = async (lat, lng) => {
    try {
        const request = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}&units=I`);
        return await request.json();
    }
    catch (e) { console.log('no weatherbit data :(', e); }
};

async function getHeaderPhoto(userCity) {
    try {
        const request = await fetch(`https://pixabay.com/api/?key=16153283-467e1a7d2957b8817b31c679d&q=${userCity}&image_type=photo&pretty=true&category=places&orientation=horizontal`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
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
/* harmony import */ var _apiRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiRequests */ "./src/client/js/apiRequests.js");



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
});

// Generate trip data
document.querySelector('#initial-request').addEventListener('submit', function (event) { generate(event) });

async function generate(event) {
    event.preventDefault();

    const tripCity = document.querySelector('.user-city').value
    const formDepart = document.querySelector('.depart-date').value;
    const formReturn = document.querySelector('.return-date').value;

    const departDate = new Date(`${formDepart} 00:00:00`);
    const returnDate = new Date(`${formReturn} 00:00:00`);
    const displayDepart = `${formDepart.slice(5, 7)}/${formDepart.slice(8, 10)}`
    const displayReturn = `${formReturn.slice(5, 7)}/${formReturn.slice(8, 10)}`

    const geonamesInfo = await Object(_apiRequests__WEBPACK_IMPORTED_MODULE_1__["getGeonames"])(tripCity, 'ceelliott'); // put username in .env file
    const userCity = geonamesInfo.geonames[0].name;
    const weatherInfo = await Object(_apiRequests__WEBPACK_IMPORTED_MODULE_1__["getWeatherBit"])(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_0__["viewNewTrip"])(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo);
}



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


function editItems(event) {
    let editBtn = event.target;
    editBtn.disabled = true;

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';

    if (event.target.classList.contains('edit-items-ntv')) {
        let item = event.target.previousSibling;
        item.style = 'color: white;'
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-trip')) {
        let item = event.target.parentElement.parentElement.firstChild;
        item.style = 'box-sizing: border-box; padding: 15px 0 0 8px; width: 30vw; color: black; height: 5.7vh';
        saveBtn.style = 'padding: 0; height: 5.7vh; color: black;';
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-items-stv')) {
        let item = event.target.parentElement.children[1];
        item.style = "box-sizing: border-box; padding: 10px; height: 5vh; color: white;"
        saveBtn.style = 'height: 5vh;'
        modifyEditedItems(item, saveBtn, editBtn);
    }
}

function modifyEditedItems(item, saveBtn, editBtn) {
    item.readOnly = false;
    item.style.backgroundColor = "#c44536";
    saveBtn.classList.add('save-btn');
    item.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () { saveEditedItem(item, saveBtn, editBtn); })
}

function saveEditedItem(item, saveBtn, editBtn, event) {
    item.readOnly = true;
    item.style.backgroundColor = '#83A8A6';
    saveBtn.remove();
    editBtn.disabled = false;
    console.log(item)

    if (item.classList.contains('trip-dates')) {
        item.style.backgroundColor = '#197278';
        item.style.color = 'white';
        updateTripDates(item)
    } else if (item.classList.contains('stv-item')) {
        item.style.color = 'black';
    }
}

async function updateTripDates(item) {
    // remove old trips from DOM
    let trips = document.querySelector('.saved-trips').children;
    for (let i = trips.length - 1; i >= 0; i--) { trips[i].remove(); }

    let newTripDates = item.value;
    let tripCity = item.parentElement.children[1].innerText;
    let tripWeatherTestData = item.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;

    setTimeout(displayNewTrips, 1000);
    await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_0__["postData"])('/tripdates', { city: tripCity, depart: newTripDates.slice(0, 5), return: newTripDates.slice(8, 13), weatherTest: tripWeatherTestData, });
}

// // display new trips
async function displayNewTrips() { await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_0__["getUserData"])('/all') }

// // delete items - NTV packing & todo, STV packing & todo, STV trips
function removeItems(event) {
    if (!event.target.classList.contains('delete-trip')) {
        let item = event.target.parentElement;

        if (event.target.classList.contains('delete-items-ntv')) {
            let itemCategory = event.target.parentElement.parentElement;
            if (itemCategory.children.length < 3) { itemCategory.remove() }
            item.remove();
        } else if (event.target.classList.contains('delete-items-stv')) {
            item.style.display = 'none';
        }
    } else {
        let item = event.target.parentElement.parentElement // whole trip stv
        let tripCity = event.target.parentElement.previousElementSibling.innerText;
        let departDate = event.target.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
        let returnDate = event.target.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

        item.remove()
        Object(_serverRequests__WEBPACK_IMPORTED_MODULE_0__["deleteServerData"])('/remove', { city: tripCity, depart: departDate, return: returnDate });
    }
}

function toggleItems(event) {
    event.target.parentElement.parentElement.classList.add('modified');
    event.target.parentElement.parentElement.classList.toggle('packed');
}



/***/ }),

/***/ "./src/client/js/savedTripsView.js":
/*!*****************************************!*\
  !*** ./src/client/js/savedTripsView.js ***!
  \*****************************************/
/*! exports provided: displayTrip, viewSavedTrips, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTrip", function() { return displayTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSavedTrips", function() { return viewSavedTrips; });
/* harmony import */ var _modifyItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyItems */ "./src/client/js/modifyItems.js");
/* harmony import */ var _viewNewTrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewNewTrip */ "./src/client/js/viewNewTrip.js");
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return _serverRequests__WEBPACK_IMPORTED_MODULE_2__["getUserData"]; });





document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips);

async function viewSavedTrips() {
    let container = document.querySelector('main');
    for (let i = 0; i < container.children.length; i++) { container.children[i].style.display = 'none' }

    document.querySelector('h1').innerHTML = 'Saved Trips';

    let savedTripsBtn = document.querySelector('.nav-saved-trips');
    savedTripsBtn.removeEventListener('click', viewSavedTrips)
    savedTripsBtn.innerHTML = `Book Trip`
    savedTripsBtn.setAttribute("onclick", 'location.href="index.html"')
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await Object(_serverRequests__WEBPACK_IMPORTED_MODULE_2__["getUserData"])('/all');
}

function displayTrip(tripData) {
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
            editTrip.innerHTML = `<i id="edit" class="fas fa-edit"></i>`
            deleteTrip.innerHTML = `<i id="delete" class="fas fa-times"></i>`

            tripDates.readOnly = true;
            tripPackingList.classList.add('packing-list-btn')
            tripTodoList.classList.add('todo-list-btn')
            tripWeather.classList.add('weather-btn')
            editTrip.classList.add('edit-trip');
            deleteTrip.classList.add('delete-trip');
            packingListContainer.classList.add('packing-list')
            todoListContainer.classList.add('todo-list')
            weatherContainer.classList.add('weather')
            newTripHeading.classList.add('packing-list-row');
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
                tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${newID}-trip"></i>`
                tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${newID}-trip"></i>`
                tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${newID}-trip"></i>`
            } else {
                newTripContainer.id = `${tripData[i].city}-trip`;
                tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt ${tripCity.innerHTML}-trip"></i>`
                tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list ${tripCity.innerHTML}-trip"></i>`
                tripWeather.innerHTML = `<i id="weather" class="fas fa-sun ${tripCity.innerHTML}-trip"></i>`
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

                addItemRows(itemRow, item, category);
                packingListContainer.appendChild(itemRow);
            }

            let addPackingItemsForm = document.createElement('div');
            let rootForm = document.querySelector('.packing-list-btn-container');
            let formWrapper = document.createElement('form');
            let input = rootForm.parentElement.children[1].children[0].children[0].cloneNode(true);
            let select = rootForm.parentElement.children[1].children[0].children[1].cloneNode(true);

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

            addMorePackBtn.addEventListener('click', function (event) { addMoreItems(event); });
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

            addMoreTodoBtn.addEventListener('click', function (event) { addMoreItems(event); });
            discardTodoBtn.addEventListener('click', discardSTVItems(todoListContainer, packingListContainer));
            saveTodoBtn.addEventListener('click', saveSTVItems(tripCity, tripDates, todoListContainer, packingListContainer));

            // WEATHER
            let weatherData = tripData[i].weather;
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

                Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_1__["setWeatherDOMStructure"])(newRow, tripDate, null, weatherIcon, weather);

                tripDate.innerHTML = weatherData[i].date;
                weatherIcon.src = `${weatherData[i].weatherIcon}`;
                weather.innerHTML = weatherData[i].weather;
            }

            // long forecast
            let longForecast = document.createElement('div');

            if (weatherData[0] !== undefined) {
                let weatherEnd = new Date(`${weatherData[weatherData.length - 1].date}/2021`);
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
            tripPackingList.addEventListener('click', displayData);
            tripTodoList.addEventListener('click', displayData);
            tripWeather.addEventListener('click', displayData);
            editTrip.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["editItems"]);
            deleteTrip.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["removeItems"]);
        }
    }
}

// TRIP LEVEL FUNCTIONS
function displayData(event) {
    // return async function (event) {
    let trips = document.querySelector('.saved-trips').children;
    let tripBlock = event.target.parentElement.parentElement.parentElement;
    let btn = event.target.classList[0];

    for (let i = 1; i < tripBlock.children.length; i++) {
        if (tripBlock.children[i].classList.contains(btn.slice(0, -4))) {
            if (tripBlock.children[i].style.display === 'none') {
                tripBlock.children[i].style.display = 'block'

                for (let i = 0; i < trips.length; i++) {
                    if (event.target.parentElement.parentElement.parentElement.id !== trips[i].id) { trips[i].style = "display: none;" }
                }
            } else if (tripBlock.children[i].style.display === 'block') {
                tripBlock.children[i].style.display = 'none'
                for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }
            }
        } else {
            tripBlock.children[i].style.display = 'none';
        }
    }
    // }
}

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

    item.classList.add('stv-item');
    editBtn.classList.add('edit-items-stv');
    deleteBtn.classList.add('delete-items-stv');

    editBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["editItems"])
    toggle.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["toggleItems"]);
    deleteBtn.addEventListener('click', _modifyItems__WEBPACK_IMPORTED_MODULE_0__["removeItems"])
}

function saveSTVItems(tripCity, tripDates) {
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
        for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }

        let itemsArr = []

        for (let i = 0; i < allItems.length; i++) {
            // removed modified designation from STV view
            let classes = allItems[i].classList;
            let iterator = classes.entries();

            for (let value of iterator) { if (value[1] === 'modified') { allItems[i].classList.remove('modified'); } }

            // if no list items
            if (allItems.length < 3) {
                let newItem = {};
                let flag = event.target.parentElement.parentElement.id;
                newItem['item'] = null;

                if (flag === 'todo-list') { newItem['listType'] = 'todo' }
                else if (flag === 'packing-list') { newItem['listType'] = 'packing' }
                itemsArr.push(newItem);
            }
            // if yes list items
            else {
                if (allItems[i].classList[0] === 'saved-trip-packing-list') {
                    let newItem = {};
                    let flag = allItems[i].classList[1];
                    newItem['item'] = allItems[i].children[1].value;
                    newItem['category'] = allItems[i].children[2].innerText;

                    // cite from MDN https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/entries
                    // iterates through classes to find packed flag and toggle
                    let classes = allItems[i].classList;
                    let iterator = classes.entries();

                    for (let value of iterator) {
                        if (value[1] === 'packed') { newItem['toggle'] = true }
                        else { newItem['toggle'] = false; };
                    }

                    if (flag === 'todo') { newItem['listType'] = 'todo' }
                    else if (flag === 'packing') { newItem['listType'] = 'packing' };

                    itemsArr.push(newItem);
                }
            }
        }
        Object(_serverRequests__WEBPACK_IMPORTED_MODULE_2__["postData"])('/list', { city: tripCity.innerText, depart: tripDates.innerHTML.slice(0, 5), return: tripDates.innerHTML.slice(8, 13), list: itemsArr });
    }
}

function discardSTVItems(todoListContainer, packingListContainer) {
    return function (event) {
        let allItemsContainer = event.target.parentElement.parentElement;
        if (allItemsContainer.style.display === 'block') { allItemsContainer.style.display = 'none'; }

        let children = allItemsContainer.children;

        // return hidden trips
        let trips = document.querySelector('.saved-trips').children;
        for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }

        for (let i = 0; i < children.length; i++) {
            // remove newly added items
            if (children[i].classList[2] == 'new-todo-item' || children[i].classList[2] == 'new-packing-item') { children[i].remove(); }
            // return 'deleted' items
            if (children[i].style.display = 'none') { children[i].style.display = 'flex'; }
            // fix toggle modifications
            let classes = children[i].classList;
            let iterator = classes.entries();
            for (let value of iterator) { if (value[1] === 'modified') { children[i].classList.toggle('packed'); } }
        }



        // if (todoListContainer.style.display === 'block') {
        // todoListContainer.style.display = 'none';
        // let children = todoListContainer.children;

        // return hidden trips
        // let trips = document.querySelector('.saved-trips').children;
        // for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;' }

        // for (let i = 0; i < children.length; i++) {
        // remove items added via add more
        // if (children[i].classList[2] == 'new-todo-item') { children[i].remove(); }

        // return 'deleted' items
        // if (children[i].style.display = 'none') { children[i].style.display = 'flex'; }

        // fix toggle modifications
        // let classes = children[i].classList;
        // let iterator = classes.entries();

        // for (let value of iterator) {
        //     if (value[1] === 'modified') { children[i].classList.toggle('packed'); }
        // }
        //     }
        // } else if (packingListContainer.style.display === 'block') {
        //     packingListContainer.style.display = 'none';

        //     let children = packingListContainer.children;
        //     for (let i = 0; i < children.length; i++) {
        //         // remove items added via add more
        //         if (children[i].classList[2] == 'new-packing-item') { children[i].remove(); }

        //         // return 'deleted' items
        //         if (children[i].style.display = 'none') { children[i].style.display = 'flex'; }

        //         // fix toggle modifications
        //         let classes = children[i].classList;
        //         let iterator = classes.entries();

        //         for (let value of iterator) {
        //             if (value[1] === 'modified') { children[i].classList.toggle('packed'); }
        //         }
        //     }
        // }
        let allTrips = event.target.parentElement.parentElement.parentElement.parentElement.children;
        for (let i = 0; i < allTrips.length; i++) { allTrips[i].style = "display: block;" }
    }
};

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
        let todoList = event.target.parentElement.parentElement.parentElement;
        todoList.insertBefore(itemRow, todoList.children[0])
    } else {
        itemRow.classList.add('saved-trip-packing-list', 'packing', 'new-packing-item');
        let packingList = event.target.parentElement.parentElement.parentElement;
        packingList.insertBefore(itemRow, packingList.children[0])
    }
}



/***/ }),

/***/ "./src/client/js/serverRequests.js":
/*!*****************************************!*\
  !*** ./src/client/js/serverRequests.js ***!
  \*****************************************/
/*! exports provided: getUserData, postData, deleteServerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteServerData", function() { return deleteServerData; });
/* harmony import */ var _savedTripsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedTripsView */ "./src/client/js/savedTripsView.js");


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
        console.log(`DATA SENT TO SERVER`);
        return await response.json();
    }
    catch { console.log('FAILED TO POST DATA TO SERVER', e); }
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
        console.log(`DATA DELETED FROM SERVER`);
        return await response.json();
    }
    catch { console.log('FAILED TO DELETE DATA FROM SERVER', e); }
};



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
/* harmony import */ var _savedTripsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savedTripsView */ "./src/client/js/savedTripsView.js");
/* harmony import */ var _serverRequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverRequests */ "./src/client/js/serverRequests.js");
/* harmony import */ var _apiRequests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiRequests */ "./src/client/js/apiRequests.js");





async function viewNewTrip(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo) {
    document.querySelector('.initial-req-container').style.display = "none";
    let newTripContainer = document.querySelector('.new-trip-container');
    newTripContainer.style.display = "flex";

    // Update Header
    let bannerImg = await Object(_apiRequests__WEBPACK_IMPORTED_MODULE_3__["getHeaderPhoto"])(userCity);
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
            } else { packingList.push(item) }
        };

        // View Saved Confirmed Message
        newTripContainer.style.display = "none";
        document.querySelector('.trip-saved-container').style.display = 'flex';

        let savedTripsBtn = document.querySelector('#view-saved-trips');
        savedTripsBtn.addEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_1__["viewSavedTrips"])

        let bookTripBtn = document.querySelector('.nav-saved-trips');
        bookTripBtn.removeEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_1__["viewSavedTrips"])
        bookTripBtn.innerHTML = `Book Trip`
        bookTripBtn.setAttribute("onclick", 'location.href="index.html"')

        Object(_serverRequests__WEBPACK_IMPORTED_MODULE_2__["postData"])('/api/trip', { city: userCity, departure: departDate, displayDepart: displayDepart, displayReturn: displayReturn, arrival: returnDate, packingList: packingList, todoList: todoList, weather: tripWeatherArr, });
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