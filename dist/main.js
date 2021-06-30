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
/*! exports provided: createElements, removeItems, toggleItems, appendItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElements", function() { return createElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItems", function() { return removeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleItems", function() { return toggleItems; });
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
        "packedFlag": document.createElement('button'),
        "editBtn": document.createElement('button'),
        "deleteBtn": document.createElement('button'),
    }

    const checkboxElements = {
        "toggleIcon": document.createElement('span'),
        "toggleLabel": document.createElement('span'),
    }

    rowElements.newItemValue.readOnly = true;
    rowElements.newItemValue.setAttribute('style', 'resize: none; ');

    let target = event.target.classList.value;

    setValues(target, blockElements, rowElements, checkboxElements);

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

async function setValues(target, blockElements, rowElements, checkboxElements) {
    blockElements.newItemCategoryLabel.innerHTML = `${document.querySelector(`.${target}-category`).value} <i class="fas fa-chevron-down"></i>`;

    blockElements.newItemCategoryLabel.id = document.querySelector(`.${target}-category`).value;
    blockElements.newItemRow.classList.add('packing-list-row');

    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    rowElements.newItemValue.defaultValue = document.querySelector(`.${target}-item`).value;

    checkboxElements.toggleIcon.innerHTML = '<i class= "far fa-check-square"></i>';
    checkboxElements.toggleLabel.innerHTML = 'Packed';

    document.querySelector(`.${target}-item`).value = '';

    appendItem(target, blockElements, rowElements, checkboxElements);
}

function appendItem(target, blockElements, rowElements, checkboxElements) {
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

    rowElements.packedFlag.appendChild(checkboxElements.toggleIcon);
    rowElements.packedFlag.appendChild(checkboxElements.toggleLabel);

    rowElements.deleteBtn.addEventListener('click', removeItems)
    rowElements.editBtn.addEventListener('click', editItems)
    rowElements.packedFlag.addEventListener('click', toggleItems)
}

function toggleItems(event) {
    event.target.parentElement.parentElement.classList.toggle('packed');
}

function editItems(event) {
    event.target.parentElement.previousSibling.previousSibling.readOnly = false;
    event.target.parentElement.previousSibling.previousSibling.style.backgroundColor = '#c44536';
}

function removeItems(event) {
    if (event.target.classList.value === 'fas fa-times') {
        event.target.parentElement.parentElement.remove();
        if (blockElements.newItemCategoryLabel.children.length < 2) {
            blockElements.newItemCategoryLabel.remove()
        }
    } else if (event.target.classList.value === 'packing-item-row-segment') {
        event.target.parentElement.remove();
        if (blockElements.newItemCategoryLabel.children.length < 2) {
            blockElements.newItemCategoryLabel.remove()
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
let currentDate = new Date()
document.querySelector('.trip-city').setAttribute('max', currentDate)

// submit btn event listener
document.querySelector('.submit-btn').addEventListener('click', generate);
async function generate(event) {
    event.preventDefault();

    const tripCity = document.querySelector('.trip-city').value
    const departDate = new Date(`${document.querySelector('.depart-date').value}T00:00:00`);
    const returnDate = new Date(`${document.querySelector('.return-date').value}T00:00:00`);

    const geonamesInfo = await getGeonames(tripCity, 'ceelliott'); // put username in .env file
    let userCity = geonamesInfo.geonames[0].name; // city name

    let weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    Object(_viewNewTrip__WEBPACK_IMPORTED_MODULE_0__["viewNewTrip"])(userCity, departDate, returnDate, weatherInfo);
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
function updateServer(userCity, departDate, returnDate, packingList, todoList) {
    postData('/api/trip', {
        city: userCity,
        departure: departDate,
        arrival: returnDate,
        packingList: packingList,
        todoList: todoList
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
        displayTrip(data);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};


// need to create shells of all data in this function & set display to NONE, trigger display in event listener func
async function displayTrip(data) {
    // adds a row for each trip the user has saved
    for (let i = 0; i < data.length; i++) {
        let tripContainer = document.querySelector('.saved-trips');
        let newTripContainer = document.createElement('div');
        let newTripHeading = document.createElement('div');
        let tripDates = document.createElement('div');
        let tripCity = document.createElement('div');
        let tripActions = document.createElement('div');

        const tripPackingList = document.createElement('span');
        const tripTodoList = document.createElement('span');
        const tripWeather = document.createElement('span');
        const editTrip = document.createElement('span');
        const deleteTrip = document.createElement('span');

        tripDates.innerHTML = `${data[i].departure.slice(5, 7)}/${data[i].departure.slice(8, 10)} - ${data[i].arrival.slice(5, 7)}/${data[i].arrival.slice(8, 10)}`;
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

            item.innerHTML = packingList[i].item;
            category.innerHTML = packingList[i].category;
            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            editBtn.innerHTML = 'edit';
            deleteBtn.innerHTML = 'delete';

            packingListContainer.appendChild(packingItemRow);
        }

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
            editBtn.innerHTML = 'edit';
            deleteBtn.innerHTML = 'delete'

            todoListContainer.appendChild(todoItemRow);
        }

        // trip data actions
        tripPackingList.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        tripTodoList.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        tripWeather.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))

        // change to edit/delete functions
        editTrip.addEventListener('click', displayData(data, packingListContainer, todoListContainer, weatherContainer))
        deleteTrip.addEventListener('click', removeData(data))
    }
}

/// how can I broaden this out so I only have to write it once for packing, todo, and weather?
function setTripDataValues(data) {
    let packingList = data[i].packingList;
    let todoList = data[i].todoList;

    for (let i = 0; i < packingList.length; i++) {
        item.innerHTML = packingList[i].item
        category.innerHTML = packingList[i].category;
        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
        editBtn.innerHTML = 'edit';
        deleteBtn.innerHTML = 'delete';
    }

    for (let i = 0; i < todoList.length; i++) {
        item.innerHTML = todoList[i].item
        category.innerHTML = todoList[i].category;
        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
        editBtn.innerHTML = 'edit';
        deleteBtn.innerHTML = 'delete';
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

        // // edit function
        // else if (clicked.classList[1] === 'fa-edit') {
        //     // for (let i = 2; i < elements.length; i++) {
        //     //     elements[i].style.display = 'none';
        //     // }
        // }
    }
}

function editData(data) {

}

function removeData(data) {
    return function (event) {
        let tripRow = event.target.parentElement.parentElement.parentElement.parentElement;
        tripRow.remove();
    }

}

/* Function to POST data */
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


// // deleteData('/remove', {
// //     packingItem: document.querySelector('#newItemValue').value,
// //     city: document.querySelector('h1').innerText
// // });



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
// updates UI to new trip view





const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

async function viewNewTrip(userCity, departDate, returnDate, weatherInfo) {
    // remove default form from UI - need better class name here
    document.querySelector('.container').style.display = "none";
    let output = document.querySelector('.output')
    output.style.display = "flex"; // fix styling

    let bannerImg = await getHeaderPhoto(userCity);
    document.querySelector('.banner').style.backgroundImage = `url('${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}')`;
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

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            let newRow = document.createElement('div');
            tripWeather.appendChild(newRow)
            tripDaysCount.push(newRow);

            newRow.classList.add('forecast-row');
            const tripDate = document.createElement('div');
            tripDate.classList.add('forecast-date');
            tripDate.innerHTML = `${dates[i].getMonth() + 1} / ${dates[i].getDate()}`;
            newRow.appendChild(tripDate);

            const weatherIcon = document.createElement('img');
            weatherIcon.classList.add('forecast-icon');
            weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
            newRow.appendChild(weatherIcon);

            const weather = document.createElement('div');
            weather.classList.add('forecast-high');
            weather.innerHTML = `${forecast[i].high_temp}°F / ${forecast[i].low_temp}°F`;
            newRow.appendChild(weather);
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

    if (departDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
        document.querySelector('.forecast').appendChild(longForecast);
    } else if (returnDate > dates[15]) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `The forecast for ${(((((returnDate.getTime() - dates[15]) / 1000) / 60) / 60) / 24)} day(s) of your trip is outside the range of our weather app.`
        document.querySelector('.forecast').appendChild(longForecast);
    };

    // add form event listeners
    document.querySelector('.packing-list-btn').addEventListener('click', _addPackingItem__WEBPACK_IMPORTED_MODULE_0__["createElements"]); // target packing list
    document.querySelector('.todo-list-btn').addEventListener('click', _addPackingItem__WEBPACK_IMPORTED_MODULE_0__["createElements"]); // target to do list


    // TODO: add provision for todo list vs packing list

    // if (target === 'packing-list-btn') {
    //     packingList.push(item);
    //     console.log(packingList)
    // } else {
    //     todoList.push(item)
    //     console.log(todoList)
    // }

    // create save trip info btn
    let saveTripBtn = document.createElement('button');
    saveTripBtn.innerText = 'Save Trip Information';
    saveTripBtn.classList.add('save-trip-btn');
    output.appendChild(saveTripBtn);

    saveTripBtn.addEventListener('click', function () {
        let packingList = []
        let todoList = []

        let items = document.querySelectorAll('.packing-list-row');
        for (let i = 0; i < items.length; i++) {
            let item = {}
            item["item"] = items[i].firstElementChild.innerHTML;
            item["category"] = items[i].parentNode.id;
            item["toggleStatus"] = items[i].classList;

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
                <div>Your trip details have been saved.</div>;`
        document.querySelector('nav').insertAdjacentElement('beforebegin', saveConfirmed);

        Object(_saveTrip__WEBPACK_IMPORTED_MODULE_1__["updateServer"])(userCity, departDate, returnDate, packingList, todoList);
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