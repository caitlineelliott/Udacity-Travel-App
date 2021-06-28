import { createElements } from "./addPackingItem";
import { removeItems } from "./addPackingItem";
import { appendItem } from "./addPackingItem";
import { viewNewTrip } from "./viewNewTrip";
import { toggleItems } from "./addPackingItem";
import { updateServer } from "./saveTrip";

// This js file should be used ONLY to generate the DOM view of saved trips (FROM SERVER DATA)
// This file will communicate with the server re: editing/deleting though
/// NEED A NO SAVED TRIPS OPTION

document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips)

async function viewSavedTrips() {
    document.querySelector('.output').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.trip-saved-container').style.display = 'none';

    document.querySelector('h1').innerHTML = 'Saved Trips';
    let savedTripsBtn = document.querySelector('.nav-saved-trips');
    savedTripsBtn.innerHTML = `<a href="index.html">Book Trip</a>` // STYLE THIS LINK
    document.querySelector('.banner').style.backgroundImage = `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80')`;

    await getUserData('/all');
}

/* Function to GET Project Data */
const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI`);
        displayTrip(data);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

async function displayTrip(data) {
    // adds a row for each trip the user has saved
    for (let i = 0; i < data.length; i++) {
        let newItemRow = document.createElement('div');
        let tripDates = document.createElement('div');
        let tripCity = document.createElement('div');
        let tripActions = document.createElement('div');
        const tripPackingList = document.createElement('span');
        const tripTodoList = document.createElement('span');
        const tripWeather = document.createElement('span');
        const editTrip = document.createElement('span');
        const deleteTrip = document.createElement('span');

        tripDates.innerHTML = `${data[i].departure.slice(5, 7)}/${data[i].departure.slice(8, 10)} - ${data[i].arrival.slice(5, 7)}/${data[i].arrival.slice(8, 10)}`;
        tripCity.innerHTML = data[i].city;
        tripPackingList.innerHTML = `<i id="packing" class="fas fa-tshirt"></i>`
        tripTodoList.innerHTML = `<i id="todo" class="fas fa-clipboard-list"></i>`
        tripWeather.innerHTML = `<i id="weather" class="fas fa-sun"></i>`
        editTrip.innerHTML = `<i id="edit" class="fas fa-edit"></i>`
        deleteTrip.innerHTML = `<i id="delete" class="fas fa-times"></i>`

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
        tripActions.appendChild(tripWeather);
        tripActions.appendChild(editTrip);
        tripActions.appendChild(deleteTrip);

        // trip data actions
        tripPackingList.addEventListener('click', displayData(data))
        tripTodoList.addEventListener('click', displayData(data))
        tripWeather.addEventListener('click', displayData(data))
        editTrip.addEventListener('click', displayData(data))
        deleteTrip.addEventListener('click', displayData(data))
    }
}

// function to display trip data - DOM ONLY - PIPES TO SERVER FUNCTIONS
function displayData(data) {
    return function (event) {
        let city = event.target.parentElement.parentElement.previousSibling;
        let clicked = event.target;

        let tripRow = city.parentElement // trip
        let container = document.createElement('div'); // whole list under trip

        container.id = clicked.id;

        // let elements = container.parentElement.children

        // function appendElements() {

        // }

        // toggle packing list
        if (clicked.classList[1] === 'fa-tshirt') {
            for (let i = 0; i < data.length; i++) {
                // search through all trips to find current trip
                if (data[i].city === city.innerText) {
                    let currentList = data[i].packingList
                    console.log(currentList.length)

                    for (let i = 0; i < currentList.length; i++) {


                        let containerRow = document.createElement('div'); // row of whole list under trip
                        container.appendChild(containerRow);
                        containerRow.classList.add('saved-trip-packing-list')


                        let toggle = document.createElement('div');
                        let item = document.createElement('div');
                        let category = document.createElement('div');
                        let editBtn = document.createElement('div');
                        let deleteBtn = document.createElement('div');

                        // elements within containerRow
                        containerRow.appendChild(item)
                        containerRow.appendChild(toggle);
                        containerRow.appendChild(category);
                        containerRow.appendChild(editBtn);
                        containerRow.appendChild(deleteBtn);

                        item.innerHTML = currentList[i].item
                        category.innerHTML = currentList[i].category;
                        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
                        editBtn.innerHTML = 'edit';
                        deleteBtn.innerHTML = 'delete';
                    }
                }
            }

            // for (let i = 2; i < elements.length; i++) {
            //     // elements[i].style.display = 'none';
            // }
        }

        // toggle to do list
        else if (clicked.classList[1] === 'fa-clipboard-list') {
            item.innerHTML = 'item';
            category.innerHTML = 'category';
            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            editBtn.innerHTML = 'edit';
            deleteBtn.innerHTML = 'delete';

            // for (let i = 2; i < elements.length; i++) {
            //     // elements[i].style.display = 'none';
            // }
        }

        // toggle weather
        else if (clicked.classList[1] === 'fa-sun') {
            // for (let i = 2; i < elements.length; i++) {
            //     elements[i].style.display = 'none';
            // }
        }

        // edit function
        else if (clicked.classList[1] === 'fa-edit') {
            // for (let i = 2; i < elements.length; i++) {
            //     elements[i].style.display = 'none';
            // }
        }

        // delete function - DOM DONE, NEED SERVER
        else if (clicked.classList[1] === 'fa-times') {
            tripRow.style.display = "none";
            // needs to delete child elements too, if open
        }

        tripRow.insertAdjacentElement('afterend', container);

    }
}

/* Function to POST data */
const deleteData = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(`DATA DELETED FROM SERVER ${makeDateAndTime()}`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO DELETE DATA FROM SERVER');
    }
};


// // deleteData('/remove', {
// //     packingItem: document.querySelector('#newItemValue').value,
// //     city: document.querySelector('h1').innerText
// // });

export {
    deleteData,
    viewSavedTrips,
    getUserData
}