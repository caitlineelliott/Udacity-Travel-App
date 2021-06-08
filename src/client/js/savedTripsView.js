import { createElements } from "./addPackingItem";
import { updateUI } from "./updateUI";

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

        console.log(data)

        addSavedTrip(data)
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);

        // let city = 'Dallas';
        // let d1 = '06/01';
        // let d2 = '06/02';

        // addSavedTrip(city, d1, d2)
    }
};

function addSavedTrip(data) {
    for (let i = 0; i < data.length; i++) {
        let newItemRow = document.createElement('div');
        let tripDates = document.createElement('div');
        let tripCity = document.createElement('div');
        let tripActions = document.createElement('div');
        const tripPackingList = document.createElement('span');
        const tripTodoList = document.createElement('span');
        const editTrip = document.createElement('span');
        const deleteTrip = document.createElement('span');

        tripDates.innerHTML = `${data[i].arrival.slice(5, 7)}/${data[i].arrival.slice(8, 10)} - ${data[i].departure.slice(5, 7)}/${data[i].departure.slice(8, 10)}`;
        tripCity.innerHTML = data[i].city;
        tripPackingList.innerHTML = `<i class="fas fa-tshirt"></i>`
        tripTodoList.innerHTML = `<i class="fas fa-clipboard-list"></i>`
        editTrip.innerHTML = `<i class="fas fa-edit"></i>`
        deleteTrip.innerHTML = `<i class="fas fa-times"></i>`

        newItemRow.classList.add('packing-list-row');
        tripDates.classList.add('trip-dates');
        tripCity.classList.add('trip-city');
        tripActions.classList.add('trip-actions');

        document.querySelector('.saved-trips').appendChild(newItemRow);
        newItemRow.appendChild(tripDates);
        newItemRow.appendChild(tripCity);
        newItemRow.appendChild(tripActions);
        tripActions.appendChild(tripPackingList);
        tripActions.appendChild(tripTodoList);
        tripActions.appendChild(editTrip);
        tripActions.appendChild(deleteTrip);
    }

}

export {
    viewSavedTrips,
    getUserData,
    addSavedTrip
}