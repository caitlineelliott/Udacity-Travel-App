import { updateUI } from './updateUI'

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

// Event listener to add function to existing HTML DOM element
document.querySelector('.submit-btn').addEventListener('click', generate);

/* Function called by event listener */
async function generate(event) {
    event.preventDefault();

    // Get user trip dates + city
    const tripCity = document.querySelector('.trip-city').value
    const departDate = new Date(document.querySelector('.depart-date').value);
    const returnDate = new Date(document.querySelector('.return-date').value);

    // console.log(departDate, returnDate)

    // get geonames info
    const geonamesInfo = await getGeonames(tripCity, 'ceelliott');
    console.log(geonamesInfo);
    let tripState = geonamesInfo.geonames[0].adminName1; // state
    let userCountry = geonamesInfo.geonames[0].countryName; // country
    let userCity = geonamesInfo.geonames[0].name; // city name

    //trigger WeatherBit
    let weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    updateUI(tripState, userCountry, userCity, departDate, returnDate, weatherInfo);

    await postData('/api/add', {
        city: tripCity,
        departure: departDate,
        arrival: returnDate
    });

    // await getData('/all');
}

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


/* Function to POST data */
const postData = async (url = '', data = {}) => {
    try {
        console.log(`DATA SENT TO SERVER ${makeDateAndTime()}`);
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
    catch {
        console.log('FAILED TO POST DATA TO SERVER');
    }
};

/* Function to GET Project Data */
const getData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        // UPDATE UI
        document.querySelector('#journal-prompt').style.display = "none";
        document.querySelector('#entryContainer').style.display = "block";

        // entry date
        document.querySelector('#date-label').innerHTML = data.date;

        // mood / weather / temp containers
        let mood = document.querySelector('#moodIcon');
        let weather = document.querySelector("#weather");
        let temp = document.querySelector('#temp');

        // changes mood icon + temp to match weather icon from API
        const colorChange = (hex) => {
            mood.style.color = hex;
            temp.style.color = hex;
        };

        const iconColor = () => {
            if (parseInt(data.weather.slice(0, 2)) === 3) {
                colorChange('#f2f2f1');
            } else if (data.weather.includes('n')) {
                colorChange('#48484a');
            } else if (parseInt(data.weather.slice(0, 2)) < 3) {
                colorChange('#ec6f4d');
            } else if (parseInt(data.weather.slice(0, 2)) === 10) {
                colorChange('#ec6f4d');
            } else {
                colorChange('#48484a');
            }
        };

        iconColor();

        // mood
        mood.classList.add(`${data.moodLabel}`);
        // mood name
        document.querySelector('#mood-name').innerHTML = data.mood;

        // weather
        let weatherIcon = document.querySelector('#weather').firstElementChild;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather}@2x.png`;
        // weather name
        document.querySelector('#weather-name').innerHTML = data.weatherName;

        // temp
        temp.innerHTML = data.temp;
        // daily high + low
        document.querySelector('#temp-feels').innerHTML = data.highLow;

        // journal entry
        let feelings = document.querySelector('#content');
        feelings.innerText = data.entry;

        console.log(`DATA POSTED TO UI ${makeDateAndTime()}`);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

// EXTRA NON RUBRIC JS

// back btn actions: remove previous entries + back btn + display prompt
// document.querySelector('#back').addEventListener('click', function () {
// window.location.reload();
// });

// export {
//     makeDateAndTime,
//     generate,
//     postData,
//     getData,
//     getWeather
// }