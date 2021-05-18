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

export { getGeonames }