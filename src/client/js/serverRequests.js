import { displayTrip } from './savedTripsView';

const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const tripData = await request.json();
        displayTrip(tripData, event);
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
        return await response.json();
    }
    catch (e) { console.log('FAILED TO POST DATA TO SERVER', e); }
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
        return await response.json();
    }
    catch (e) { console.log('FAILED TO DELETE DATA FROM SERVER', e); }
};

export { getUserData, postData, deleteServerData };
