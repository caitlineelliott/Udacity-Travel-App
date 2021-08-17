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

export { getGeonames, getWeatherBit }