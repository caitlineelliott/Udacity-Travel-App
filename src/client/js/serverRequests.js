import { displayTrip } from './savedTripsView'

const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const tripData = await request.json();
        displayTrip(tripData);
    }
    catch (e) { console.log('DATA NOT RETREIVED FROM SERVER', e); }
};

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
    catch { console.log('FAILED TO POST DATA TO SERVER', e); }
};

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
        console.log(`DATA DELETED FROM SERVER`);
        return await response.json();
    }
    catch { console.log('FAILED TO DELETE DATA FROM SERVER', e); }
};

export { getUserData, postData, deleteServerData }