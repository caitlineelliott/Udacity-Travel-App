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
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony import */ var _js_savedTripsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/savedTripsView */ "./src/client/js/savedTripsView.js");
/* harmony import */ var _js_getWeatherbit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/getWeatherbit */ "./src/client/js/getWeatherbit.js");
/* harmony import */ var _js_getGeonames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/getGeonames */ "./src/client/js/getGeonames.js");
/* harmony import */ var _js_updateUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/updateUI */ "./src/client/js/updateUI.js");
/* harmony import */ var _js_addPackingItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/addPackingItem */ "./src/client/js/addPackingItem.js");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_trip_form_output_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/trip-form-output.scss */ "./src/client/styles/trip-form-output.scss");
/* harmony import */ var _styles_trip_form_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/trip-form.scss */ "./src/client/styles/trip-form.scss");





















/***/ }),

/***/ "./src/client/js/addPackingItem.js":
/*!*****************************************!*\
  !*** ./src/client/js/addPackingItem.js ***!
  \*****************************************/
/*! exports provided: createElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElements", function() { return createElements; });
document.querySelector('.packing-list-btn').addEventListener('click', createElements); // target packing list
document.querySelector('.todo-list-btn').addEventListener('click', createElements); // target to do list

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
}

function setValues(target, blockElements, rowElements, checkboxElements) {
    blockElements.newItemCategoryLabel.innerHTML = document.querySelector(`.${target}-category`).value;
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
        console.log('new row')

    } else {
        let extantRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        extantRow.appendChild(blockElements.newItemRow);
        console.log('old row')
    }

    for (let i = 0; i < Object.keys(rowElements).length; i++) {
        blockElements.newItemRow.appendChild(Object.values(rowElements)[i])
        Object.values(rowElements)[i].id = Object.keys(rowElements)[i]
        Object.values(rowElements)[i].classList.add('packing-item-row-segment')
    }

    rowElements.packedFlag.appendChild(checkboxElements.toggleIcon);
    rowElements.packedFlag.appendChild(checkboxElements.toggleLabel);

    document.querySelector('#packedFlag').addEventListener('click', function () {
        blockElements.newItemRow.classList.toggle('packed');
        if (checkboxElements.toggleIcon.innerHTML === '<i class= "fas fa-check-square"></i>') {
            checkboxElements.toggleIcon.innerHTML = '<i class= "far fa-check-square"></i>'
        } else {
            checkboxElements.toggleIcon.innerHTML = '<i class= "fas fa-check-square" ></i >'
        }
    });

    document.querySelector('#editBtn').addEventListener('click', function () {
        rowElements.newItemValue.readOnly = false;
        rowElements.newItemValue.setAttribute('style', 'width: 24vw; background: #c44536; color: #fff;');
        let saveBtn = document.createElement('div');
        saveBtn.innerHTML = '<i class= "fas fa-save"></i>';
        saveBtn.classList.add('packing-item-row-segment', 'delete-btn');
        saveBtn.setAttribute('style', 'width: 6vw; background: #c44536; color: #fff;');
        newItemValue.insertAdjacentElement('afterend', saveBtn);
        saveBtn.addEventListener('click', function () {
            saveBtn.style.display = 'none';
            newItemValue.setAttribute('style', 'width: 35vw; background: #197278; color: #fff; border: none;');
            newItemValue.readOnly = true;
        });
    });

    document.querySelector('#deleteBtn').addEventListener('click', function () {
        event.target.parentElement.parentElement.remove()
    });
}



/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: makeDateAndTime, generate, getGeonames, getWeatherBit, getRandomNum, getData, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDateAndTime", function() { return makeDateAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateUI */ "./src/client/js/updateUI.js");
/* harmony import */ var _getGeonames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getGeonames */ "./src/client/js/getGeonames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGeonames", function() { return _getGeonames__WEBPACK_IMPORTED_MODULE_1__["getGeonames"]; });

/* harmony import */ var _getWeatherbit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeatherbit */ "./src/client/js/getWeatherbit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeatherBit", function() { return _getWeatherbit__WEBPACK_IMPORTED_MODULE_2__["getWeatherBit"]; });





// Event listener to add function to existing HTML DOM element
document.querySelector('.submit-btn').addEventListener('click', generate);

/* Function called by event listener */
async function generate(event) {
    event.preventDefault();

    // Get user trip dates + city
    const tripCity = document.querySelector('.trip-city').value
    const departDate = new Date(`${document.querySelector('.depart-date').value}T00:00:00`);
    const returnDate = new Date(`${document.querySelector('.return-date').value}T00:00:00`);

    const geonamesInfo = await Object(_getGeonames__WEBPACK_IMPORTED_MODULE_1__["getGeonames"])(tripCity, 'ceelliott');
    let tripState = geonamesInfo.geonames[0].adminName1; // state
    let userCountry = geonamesInfo.geonames[0].countryName; // country
    let userCity = geonamesInfo.geonames[0].name; // city name

    let weatherInfo = await Object(_getWeatherbit__WEBPACK_IMPORTED_MODULE_2__["getWeatherBit"])(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    Object(_updateUI__WEBPACK_IMPORTED_MODULE_0__["updateUI"])(tripState, userCountry, userCity, departDate, returnDate, weatherInfo);

    let bannerImg = await getHeaderPhoto(userCity);

    document.querySelector('.banner').style.backgroundImage = `url('${bannerImg.hits[getRandomNum(0, bannerImg.hits.length)].largeImageURL}')`;

    await postData('/api/add', {
        city: tripCity,
        departure: departDate,
        arrival: returnDate
    });
}

// from MDN docs >>
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

// Make Date + Time
const makeDateAndTime = () => {
    const today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    if (today.getHours() > 12) {
        let dateTime = `${date} | ${today.getHours() - 12}:${today.getMinutes()} p.m.`;
        return dateTime;
    } else {
        let dateTime = `${date} | ${today.getHours()}:${today.getMinutes()} a.m.`;
        return dateTime;
    }
};

/* Function to POST data */
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
        console.log(`DATA SENT TO SERVER ${makeDateAndTime()}`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO POST DATA TO SERVER');
    }
};

/* Function to GET Project Data */
const getData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI ${makeDateAndTime()}`);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};



/***/ }),

/***/ "./src/client/js/getGeonames.js":
/*!**************************************!*\
  !*** ./src/client/js/getGeonames.js ***!
  \**************************************/
/*! exports provided: getGeonames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeonames", function() { return getGeonames; });
/* Function to GET Web API Data*/
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



/***/ }),

/***/ "./src/client/js/getWeatherbit.js":
/*!****************************************!*\
  !*** ./src/client/js/getWeatherbit.js ***!
  \****************************************/
/*! exports provided: getWeatherBit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherBit", function() { return getWeatherBit; });
/* function to get weather data */
const getWeatherBit = async (lat, lng) => {
    try {
        const request =
            await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}`);
        return await request.json();
    }
    catch (e) {
        console.log('no weatherbit data :(', e);
    }
}



/***/ }),

/***/ "./src/client/js/savedTripsView.js":
/*!*****************************************!*\
  !*** ./src/client/js/savedTripsView.js ***!
  \*****************************************/
/*! exports provided: viewSavedTrips, getUserData, addSavedTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSavedTrips", function() { return viewSavedTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSavedTrip", function() { return addSavedTrip; });
/* harmony import */ var _addPackingItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPackingItem */ "./src/client/js/addPackingItem.js");
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateUI */ "./src/client/js/updateUI.js");



document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips)

async function viewSavedTrips() {
    document.querySelector('.output').classList.remove('display-on');
    document.querySelector('.container').style.display = 'none';

    document.querySelector('h1').innerHTML = 'Saved Trips';

    await getUserData('/all');
}

/* Function to GET Project Data */
const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI`);

        console.log(data)

        addSavedTrip(data)
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);

        // let city = 'Dallas';
        // let d1 = '06/01';
        // let d2 = '06/02';

        // addSavedTrip(city, d1, d2)
    }
};

function addSavedTrip(data) {
    for (let i = 0; i < data.length; i++) {
        let newItemRow = document.createElement('div');
        let tripDates = document.createElement('div');
        let tripCity = document.createElement('div');
        let tripActions = document.createElement('div');
        const tripPackingList = document.createElement('span');
        const tripTodoList = document.createElement('span');
        const editTrip = document.createElement('span');
        const deleteTrip = document.createElement('span');

        tripDates.innerHTML = `${data[i].arrival.slice(5, 7)}/${data[i].arrival.slice(8, 10)} - ${data[i].departure.slice(5, 7)}/${data[i].departure.slice(8, 10)}`;
        tripCity.innerHTML = data[i].city;
        tripPackingList.innerHTML = `<i class="fas fa-tshirt"></i>`
        tripTodoList.innerHTML = `<i class="fas fa-clipboard-list"></i>`
        editTrip.innerHTML = `<i class="fas fa-edit"></i>`
        deleteTrip.innerHTML = `<i class="fas fa-times"></i>`

        newItemRow.classList.add('packing-list-row');
        tripDates.classList.add('packing-item-row-segment', 'trip-dates');
        tripCity.classList.add('packing-item-row-segment');
        tripActions.classList.add('packing-item-row-segment', 'trip-actions');

        document.querySelector('.saved-trips').appendChild(newItemRow);
        newItemRow.appendChild(tripDates);
        newItemRow.appendChild(tripCity);
        newItemRow.appendChild(tripActions);
        tripActions.appendChild(tripPackingList);
        tripActions.appendChild(tripTodoList);
        tripActions.appendChild(editTrip);
        tripActions.appendChild(deleteTrip);
    }
}



/***/ }),

/***/ "./src/client/js/updateUI.js":
/*!***********************************!*\
  !*** ./src/client/js/updateUI.js ***!
  \***********************************/
/*! exports provided: updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function updateUI(tripState, userCountry, userCity, departDate, returnDate, weatherInfo) {

    document.querySelector('.container').style.display = "none";

    let forecast = weatherInfo.data;
    let dates = [];

    for (let i = 0; i < forecast.length; i++) {
        dates[i] = new Date(`${forecast[i].datetime}T00:00:00`);
    }

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {

            const newRow = document.createElement('div');
            newRow.classList.add('forecast-row');
            document.querySelector('.forecast').appendChild(newRow)

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
            weather.innerHTML = `${forecast[i].high_temp}*F / ${forecast[i].low_temp}*F`;
            newRow.appendChild(weather);
        }

        else if (returnDate >= dates[i]) {
            let currentDate = new Date();
        }

        else {
            console.log('feet');
        }
    }

    const h1 = document.querySelector('.title');
    const h2 = document.querySelector('.subtitle');
    const output = document.querySelector('.output');
    const currentDate = new Date();
    output.classList.add('display-on');

    h1.innerHTML = `${userCity}`;

    document.querySelector('#depart-date').innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    document.querySelector('#arrive-date').innerHTML = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    document.querySelector('#trip-days-count').innerHTML = ` ${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1} days`;
    document.querySelector('#trip-nights-count').innerHTML = `${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24)} nights`;
    document.querySelector('#trip-days-until').innerHTML = `${departDate.getDate() - currentDate.getDate()} days`;
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