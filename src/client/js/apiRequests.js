const getGeonames = async (placename, username) => {
    try {
        const request = await fetch(`http://api.geonames.org/searchJSON?q=${placename}&maxRows=1&username=${username}`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
};

const getWeatherBit = async (lat, lng, newForecastDate, departDate) => {
    try {
        console.log(departDate, newForecastDate)
        if (departDate > newForecastDate) {
            console.log('long')
            let request = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}&units=I`);
            return await request.json();
        } else {
            console.log('current')
            let request = await fetch(`http://api.weatherbit.io/v2.0/current/daily?&key=9723bbea9d1b4001877f42ad8068f478&lat=${lat}&lon=${lng}&units=I`);
            return await request.json();
        }
    }
    catch (e) { console.log('no weatherbit data :(', e); }
};

async function getHeaderPhoto(userCity) {
    try {
        const request = await fetch(`https://pixabay.com/api/?key=16153283-467e1a7d2957b8817b31c679d&q=${userCity}&image_type=photo&pretty=true&category=places&orientation=horizontal`);
        return await request.json();
    }
    catch (e) { console.log('FAILED TO FETCH GEONAMES API DATA:', e); }
}


export { getGeonames, getWeatherBit, getHeaderPhoto };