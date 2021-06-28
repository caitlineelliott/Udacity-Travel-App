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
    console.log(data)
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

        tripPackingList.addEventListener('click', displayData(data))
        tripTodoList.addEventListener('click', displayData(data))
        tripWeather.addEventListener('click', displayData(data))
        editTrip.addEventListener('click', displayData(data))
        deleteTrip.addEventListener('click', displayData(data))

        //         // GENERATE PACKING LIST
        //         newItemRow.insertAdjacentElement('afterend', packingListContainer);
        //         console.log(data);

        //         // if (packingItems === undefined) {
        //         //     console.log('no items');

        //         //     let noItemsContainer = document.createElement('div');

        //         //     let nopackingItems = document.createElement('div');
        //         //     nopackingItems.style.cssText = 'padding: 20px; font-size: 0.9em; text-align: left;';

        //         //     let addItems = document.createElement('button');
        //         //     nopackingItems.innerHTML = `There are no items in the packing list for this trip. Would you like to add some?`
        //         //     addItems.innerHTML = `Add Items`

        //         //     noItemsContainer.appendChild(nopackingItems);
        //         //     noItemsContainer.appendChild(addItems);
        //         //     packingListContainer.style.cssText = 'display: none; flex-direction: column; text-align: center;';

        //         //     packingListContainer.appendChild(noItemsContainer);
        //         // } else {
        //         //     let addMoreBlock = document.createElement('div');

        //         //     // need to generate this dynamically
        //         //     addMoreBlock.innerHTML = `<div class="packing-list-row" style="background-color: transparent; color: #197278">Need to add more?</div>
        //         //     <div class="packing-list-btn-container">
        //         //     <form class="packing-list-form">
        //         //         <input type="text" placeholder="add item" class="packing-list-btn-item saved-trips-item" style="margin: 0 0 20px 0;">
        //         //         <select class="packing-list-btn-category saved-trips-category" style="margin: 0 0 20px 0;">
        //         //             <option>Category</option>
        //         //             <option class="tops">Tops</option>
        //         //             <option class="bottoms">Bottoms</option>
        //         //             <option class="shoes">Shoes</option>
        //         //             <option class="accessories">Accessories</option>
        //         //             <option class="swimwear">Swimwear</option>
        //         //             <option class="toiletries">Toiletries</option>
        //         //             <option class="other">Other</option>
        //         //         </select>
        //         //         <button class="saved-trips-add-btn" class="packing-list-btn" style="margin: 0 0 20px 0;"><i class="fas fa-plus"></i></button>
        //         //     </form>
        //         // </div>`
        //         //     packingListContainer.appendChild(addMoreBlock);
        //         // }

        //         // TODO Items View
        //         tripTodoList.addEventListener('click', function (event) {
        //             let clicked = event.target;
        //             displayData(clicked)
        //             // replicate packing list functions above and generalize based on event click
        //         })

        //         /* PACKING Items View */
        //         tripPackingList.addEventListener('click', function (event) {
        //             let clicked = event.target;
        //             displayData(clicked, data, packingListContainer)
        //         })

        //         /* REMOVE Items */
        //         deleteTrip.addEventListener('click', function () {
        //             console.log(deleteTrip.parentElement.parentElement)
        //             deleteTrip.parentElement.parentElement.remove()

        //             deleteData('/remove', {
        //                 city: tripCity.innerHTML
        //             });
        //         })
    }
}

// // function to display trip data - DOM ONLY - PIPES TO SERVER FUNCTIONS
function displayData(data) {
    return function (event) {
        console.log(data)
        let city = event.target.parentElement.parentElement.previousSibling;
        let clicked = event.target;

        let tripRow = city.parentElement
        let container = document.createElement('div');
        let toggle = document.createElement('div');
        let item = document.createElement('div');
        let category = document.createElement('div');
        let editBtn = document.createElement('div');
        let deleteBtn = document.createElement('div');

        container.classList.add('saved-trip-packing-list')
        container.appendChild(toggle);
        container.appendChild(item);
        container.appendChild(category);
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);

        container.id = clicked.id;

        tripRow.insertAdjacentElement('afterend', container);

        let elements = container.parentElement.children

        // toggle packing list
        if (clicked.classList[1] === 'fa-tshirt') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].city === city.innerText) {
                    console.log('same city')
                    for (let i = 0; i < data[i].packingList; i++) {
                        item.innerHTML = data[i].packingList[i].item
                        category.innerHTML = 'category';
                        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
                        editBtn.innerHTML = 'edit';
                        deleteBtn.innerHTML = 'delete';
                    }

                } else {
                    console.log('no')
                }
            }

            for (let i = 2; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        }

        // toggle to do list
        else if (clicked.classList[1] === 'fa-clipboard-list') {
            item.innerHTML = 'item';
            category.innerHTML = 'category';
            toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
            editBtn.innerHTML = 'edit';
            deleteBtn.innerHTML = 'delete';

            for (let i = 2; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        }

        // toggle weather
        else if (clicked.classList[1] === 'fa-sun') {
            for (let i = 2; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        }

        // edit function
        else if (clicked.classList[1] === 'fa-edit') {
            for (let i = 2; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        }

        // delete function - DOM DONE, NEED SERVER
        else if (clicked.classList[1] === 'fa-times') {
            tripRow.style.display = "none";
        }
    }

    //     // toggle packing list
    //     if (clicked.classList[1] === 'fa-tshirt') {
    //         console.log('packing list')
    //         let packingItems = data[i].packingList;
    //         // add packing list info HERE
    //         for (let i = 0; i < packingItems.length; i++) {
    //             item.innerHTML = packingItems[i].item;
    //             category.innerHTML = packingItems[i].category;
    //             toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    //             editBtn.innerHTML = editTrip.innerHTML;
    //             deleteBtn.innerHTML = deleteTrip.innerHTML;

    //             row.classList.add('saved-trip-packing-list')
    //             row.appendChild(packingToggle);
    //             row.appendChild(packingItem);
    //             row.appendChild(packingCategory);
    //             row.appendChild(editBtn);
    //             row.appendChild(deleteBtn);

    //             packingListContainer.appendChild(row);
    //             packingListContainer.style.display = 'none';

    //             if (packingItems.length < 1) {
    //                 console.log('no packing items')
    //             }
    //             deleteBtn.addEventListener('click', removeItems)
    //             packingToggle.addEventListener('click', toggleItems)
    //         }
    //     }

    //     // toggle to do list
    //     else if (clicked.classList[1] === 'fa-clipboard-list') {
    //         console.log('to do list')
    //     }

    //     // edit function
    //     else if (clicked.classList[1] === 'fa-clipboard-list') {
    //         console.log('to do list')
    //     }
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