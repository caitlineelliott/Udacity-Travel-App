import { displayTrip } from './savedTripsView';
import { viewNewTrip } from './viewNewTrip';

const getUnsavedTrip = async (url) => {
    try {
        const request = await fetch(url);
        const newTrip = await request.json();
        viewNewTrip(newTrip)
    }
    catch (e) { console.log('DATA NOT RETREIVED FROM SERVER', e); }
};

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

export { getUserData, postData, deleteServerData, getUnsavedTrip };
