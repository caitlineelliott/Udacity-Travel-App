import { updateUI } from './updateUI'
import { getGeonames } from './getGeonames'
import { getWeatherBit } from './getWeatherbit'

// Event listener to add function to existing HTML DOM element
document.querySelector('.submit-btn').addEventListener('click', generate);

/* Function called by event listener */
async function generate(event) {
    event.preventDefault();

    // Get user trip dates + city
    const tripCity = document.querySelector('.trip-city').value
    const departDate = new Date(`${document.querySelector('.depart-date').value}T00:00:00`);
    const returnDate = new Date(`${document.querySelector('.return-date').value}T00:00:00`);

    const geonamesInfo = await getGeonames(tripCity, 'ceelliott');
    let tripState = geonamesInfo.geonames[0].adminName1; // state
    let userCountry = geonamesInfo.geonames[0].countryName; // country
    let userCity = geonamesInfo.geonames[0].name; // city name

    let weatherInfo = await getWeatherBit(geonamesInfo.geonames[0].lat, geonamesInfo.geonames[0].lng);

    updateUI(tripState, userCountry, userCity, departDate, returnDate, weatherInfo);

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

export {
    makeDateAndTime,
    generate,
    getGeonames,
    getWeatherBit,
    getRandomNum,
    getData,
    postData
}