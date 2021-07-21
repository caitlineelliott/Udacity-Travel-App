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
/* harmony import */ var _styles_trip_form_output_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/trip-form-output.scss */ "./src/client/styles/trip-form-output.scss");
/* harmony import */ var _styles_trip_form_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/trip-form.scss */ "./src/client/styles/trip-form.scss");

















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
// generates packing + todo list items on new trip view

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

    /* Collapse Items */
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

    for (let i = 0; i < appendedElements.length; i++) {
        categoryArr.push(appendedElements[i].id);
    }

    if (!categoryArr.includes(blockElements.newItemCategoryLabel.id)) {
        document.querySelector(`.${target}-container`).appendChild(blockElements.newItemCategoryLabel);
        blockElements.newItemCategoryLabel.appendChild(blockElements.newItemRow);

    } else {
        let extantRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        extantRow.appendChild(blockElements.newItemRow);
    }

    for (let i = 0; i < Object.keys(rowElements).length; i++) {
        blockElements.newItemRow.appendChild(Object.values(rowElements)[i])
        Object.values(rowElements)[i].id = Object.keys(rowElements)[i]
        Object.values(rowElements)[i].classList.add('packing-item-row-segment')
    }

    rowElements.deleteBtn.addEventListener('click', removeItems)
    rowElements.editBtn.addEventListener('click', editNewItems)
}

function editNewItems(event) {
    if (event.target.id === 'editBtn') {
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
            saveEditedItem(editibleItem, saveBtnNTV);
        })
    } else if (event.target.classList[1] === 'fa-edit') {
        let editBtn = event.target.parentElement;
        editBtn.disabled = true;

        let editibleItem = event.target.parentElement.previousSibling;
        editibleItem.readOnly = false;
        editibleItem.style = "background-color: #c44536"

        let saveBtnNTV = document.createElement('button');
        saveBtnNTV.innerHTML = '<i class="fas fa-save"></i>';
        saveBtnNTV.style = 'height: 6vh; box-sizing: border-box; margin: 0; color: white; width: 12vw; background-color: #c44536;'
        editibleItem.insertAdjacentElement('afterend', saveBtnNTV);
        saveBtnNTV.addEventListener('click', function () {
            saveEditedItem(editibleItem, saveBtnNTV);
        })
    }

}

function saveEditedItem(editibleItem, saveBtnNTV) {
    let btn = editibleItem.parentElement.children[2];
    btn.disabled = false;
    editibleItem.innerHTML = editibleItem.value;
    editibleItem.readOnly = true;
    editibleItem.style.backgroundColor = '#83A8A6';
    saveBtnNTV.remove();
}

function removeItems(event) {
    let item = event.target.parentElement.parentElement;
    let itemCategory = event.target.parentElement.parentElement.parentElement;

    if (event.target.classList.value === 'fas fa-times') {
        item.remove();
        if (itemCategory.children.length < 2) {
            itemCategory.remove()
        }
    } else if (event.target.classList.value === 'packing-item-row-segment') {
        let item = event.target.parentElement;
        let itemCategory = event.target.parentElement.parentElement;

        item.remove();
        if (itemCategory.children.length < 2) {
            itemCategory.remove()
        }
    }
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


// constrain form input dates date based on current date - NOT FUNCTIONAL RIGHT NOW
// from stack overflow - https://stackoverflow.com/questions/45529028/html-input-type-date-field-constraints
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

let departDate = document.querySelector('.depart-date');

document.querySelector('.depart-date').setAttribute("min", today);

document.querySelector('.return-date').addEventListener('click', function (event) {
    console.log(departDate.value)

    document.querySelector('.return-date').setAttribute("min", departDate.value);
})

document.querySelector('#initial-request').addEventListener('submit', function (event) {
    generate(event)
})

// submit event listener
async function generate(event) {
    event.preventDefault();

    const tripCity = document.querySelector('.trip-city').value
    let formDepart = document.querySelector('.depart-date').value;
    let formReturn = document.querySelector('.return-date').value;
    let compDepart = new Date(`${formDepart}T00:00:00`);
    let compReturn = new Date(`${formReturn}T00:00:00`);
    let today = new Date();

    const displayDepart = `${formDepart.slice(5, 7)}/${formDepart.slice(8, 10)}`
    const displayReturn = `${formReturn.slice(5, 7)}/${formReturn.slice(8, 10)}`

    const departDate = new Date(`${document.querySelector('.depart-date').value} 00:00:00`);
    const returnDate = new Date(`${document.querySelector('.return-date').value} 00:00:00`);

    const geonamesInfo = await getGeonames(tripCity, 'ceelliott'); // put username in .env file
    let city = geonamesInfo.geonames[0]; // city name

    // validation
    if (compDepart > compReturn) {
        alert('return date cannot be before departing date')
    } else {
        let userCity = geonamesInfo.geonames[0].name;

        let weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

        Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_0__["viewNewTrip"])(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo);
    }
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
/* harmony import */ var _addPackingItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPackingItem */ "./src/client/js/addPackingItem.js");
/* harmony import */ var _viewNewTrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewNewTrip */ "./src/client/js/viewNewTrip.js");
/* harmony import */ var _saveTrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveTrip */ "./src/client/js/saveTrip.js");







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
            } else {
                console.log('no')
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
                <option>Category</option>
                <option class="tops">Tops</option>
                <option class="bottoms">Bottoms</option>
                <option class="shoes">Shoes</option>
                <option class="accessories">Accessories</option>
                <option class="swimwear">Swimwear</option>
                <option class="toiletries">Toiletries</option>
                <option class="other">Other</option>
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
                weatherContainer.appendChild(longForecast);
            }
        } else if (weatherData[0] === undefined) {
            console.log('ALL weather out of range');
            longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
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
    let nextItem = document.querySelector('.packing-list-btn-item-stv').value; //change ids here
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

    document.querySelector('.packing-list-btn-item-stv').value = '';

    let packingList = document.querySelector('#packing-list');
    packingList.insertBefore(packingItemRow, packingList.children[0])

    editBtn.addEventListener('click', editItems)
    toggle.addEventListener('click', toggleData);
    deleteBtn.addEventListener('click', removeItem)
}

function addMoreTodos(event) {
    event.preventDefault();
    let nextItem = event.target.previousElementSibling.previousElementSibling.value;
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

    document.querySelector('#todo-list-input').value = '';

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
        let newItem = list[i].firstChild;
        let newItemText = list[i].firstChild.value;
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
        let deleteTripBtn = document.querySelector('#delete');
        let deleteItemBtn = document.querySelectorAll('#delete-item-btn');
        if (event.target === deleteTripBtn) {
            let tripRow = event.target.parentElement.parentElement.parentElement.parentElement;
            let tripCity = event.target.parentElement.parentElement.previousElementSibling.innerText;
            let departDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
            let returnDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

            tripRow.remove();
            deleteFromServer(tripCity, departDate, returnDate)
        } else {
            console.log('error')
        }
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
/* harmony import */ var _addPackingItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPackingItem */ "./src/client/js/addPackingItem.js");
/* harmony import */ var _saveTrip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTrip */ "./src/client/js/saveTrip.js");
/* harmony import */ var _savedTripsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savedTripsView */ "./src/client/js/savedTripsView.js");
// updates UI to new trip view






const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

async function viewNewTrip(userCity, departDate, returnDate, displayDepart, displayReturn, weatherInfo) {

    // remove default form from UI - need better class name here
    document.querySelector('.container').style.display = "none";
    let output = document.querySelector('.output')
    output.style.display = "flex"; // fix styling

    let bannerImg = await getHeaderPhoto(userCity);

    if (bannerImg.hits[getRandomNum(0, bannerImg.hits.length)] === undefined) {
        console.log('undefined bg')
    } else {
        document.querySelector('.banner').style.backgroundImage = `url('${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}')`;
    }

    // no city validation
    console.log(bannerImg)

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
    document.querySelector('#depart-date').innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    document.querySelector('#arrive-date').innerHTML = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    document.querySelector('#trip-days-count').innerHTML = ` ${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1} days`;
    document.querySelector('#trip-nights-count').innerHTML = `${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24)} nights`;
    document.querySelector('#trip-days-until').innerHTML = `${departDate.getDate() - currentDate.getDate()} days`;

    // Update Forecast
    let forecast = weatherInfo.data;
    let dates = [];

    for (let i = 0; i < forecast.length; i++) {
        dates[i] = new Date(`${forecast[i].datetime}T00:00:00`);
    }
    let tripDaysCount = [];
    let tripWeather = document.querySelector('.forecast');

    let tripWeatherArr = [];

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            let newRow = document.createElement('div');
            tripWeather.appendChild(newRow)
            tripDaysCount.push(newRow);

            newRow.classList.add('forecast-row');
            const tripDate = document.createElement('div');
            tripDate.classList.add('forecast-date');
            tripDate.innerHTML = `${dates[i].getMonth() + 1}/${dates[i].getDate()}`;
            newRow.appendChild(tripDate);

            const weatherIcon = document.createElement('img');
            weatherIcon.classList.add('forecast-icon');
            weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
            newRow.appendChild(weatherIcon);

            const weather = document.createElement('div');
            weather.classList.add('forecast-high');
            weather.innerHTML = `${forecast[i].high_temp}°F / ${forecast[i].low_temp}°F`;
            newRow.appendChild(weather);

            let tripDayData = {}
            tripDayData['date'] = tripDate.innerHTML;
            tripDayData['weatherIcon'] = weatherIcon.src;
            tripDayData['weather'] = weather.innerHTML;
            tripWeatherArr.push(tripDayData);
        }
    }

    if (tripWeather.childElementCount > 5) {
        let moreDays = document.createElement('div');
        moreDays.innerHTML = `Show more days <i class="fas fa-chevron-down"></i>`
        moreDays.classList.add('more-days');
        tripWeather.appendChild(moreDays);

        for (let i = 0; i < tripDaysCount.length; i++) {
            if (i > 4) {
                tripDaysCount[i].style.display = "none";
            }
        }

        moreDays.addEventListener('click', function () {
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

    let longForecast = document.createElement('div');

    console.log(tripDaysCount)

    if (departDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
        document.querySelector('.forecast').appendChild(longForecast);
    } else if (returnDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `The forecast for ${(((((returnDate.getTime() - dates[15]) / 1000) / 60) / 60) / 24)} day(s) of your trip is outside the range of our weather app.`
        document.querySelector('.forecast').appendChild(longForecast);
    } else if (tripDaysCount.length < 6) {
        document.querySelector('.forecast').style = "padding-bottom: 20px;"
    }

    // add form event listeners
    document.querySelector('.packing-list-btn').addEventListener('click', _addPackingItem__WEBPACK_IMPORTED_MODULE_0__["createElements"]); // target packing list
    document.querySelector('.todo-list-btn').addEventListener('click', _addPackingItem__WEBPACK_IMPORTED_MODULE_0__["createElements"]); // target to do list

    let tripBtnContainer = document.createElement('div');
    tripBtnContainer.style = "display: flex";
    output.appendChild(tripBtnContainer);

    // create discard trip info btn
    let discardTripBtn = document.createElement('button');
    discardTripBtn.innerHTML = '<a href="index.html">Discard Trip</a>';
    discardTripBtn.classList.add('save-trip-btn');
    discardTripBtn.style = "background-color: #772e25; color: #edddd4";
    tripBtnContainer.appendChild(discardTripBtn);

    // create save trip info btn
    let saveTripBtn = document.createElement('button');
    saveTripBtn.innerText = 'Save Trip';
    saveTripBtn.classList.add('save-trip-btn');
    tripBtnContainer.appendChild(saveTripBtn);

    saveTripBtn.addEventListener('click', function () {
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

        document.querySelector('.output').style.display = "none";
        const saveConfirmed = document.querySelector('.trip-saved-container');
        saveConfirmed.style.display = 'flex';
        saveConfirmed.innerHTML = `
                <h2>Happy trails!</h2>
                <div>Your trip details have been saved.</div>
                <button id="view-saved-trips">View Saved Trips</button>`
        document.querySelector('nav').insertAdjacentElement('afterend', saveConfirmed);
        let bookTripBtn = document.querySelector('.nav-saved-trips');
        bookTripBtn.innerHTML = '<a href="index.html">Book Trip</a>'
        let savedTripsBtn = document.querySelector('#view-saved-trips');
        savedTripsBtn.addEventListener('click', _savedTripsView__WEBPACK_IMPORTED_MODULE_2__["viewSavedTrips"])

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

/***/ "./src/client/styles/trip-form-output.scss":
/*!*************************************************!*\
  !*** ./src/client/styles/trip-form-output.scss ***!
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