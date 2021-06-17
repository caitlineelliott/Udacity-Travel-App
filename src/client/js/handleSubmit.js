import { viewNewTrip } from './viewNewTrip'

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

    viewNewTrip(userCity, departDate, returnDate, weatherInfo);
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

export {
    generate,
    getGeonames,
    getWeatherBit
}