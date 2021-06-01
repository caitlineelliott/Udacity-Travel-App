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
        console.log(data.city);
        console.log(data.departure);
        console.log(data.arrival);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }


};

export {
    viewSavedTrips,
    getUserData
}