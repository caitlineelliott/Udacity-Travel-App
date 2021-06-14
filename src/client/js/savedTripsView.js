import { createElements } from "./addPackingItem";
import { removeItems } from "./addPackingItem";
import { updateUI } from "./updateUI";

document.querySelector('.nav-saved-trips').addEventListener('click', viewSavedTrips)

async function viewSavedTrips() {
    document.querySelector('.output').classList.remove('display-on');
    document.querySelector('.container').style.display = 'none';

    document.querySelector('h1').innerHTML = 'Saved Trips';

    // change nav links
    let savedTripsBtn = document.querySelector('.nav-saved-trips');
    savedTripsBtn.innerHTML = `<a href="index.html">Book Trip</a>` // STYLE THIS LINK

    await getUserData('/all');
}

/* Function to GET Project Data */
const getUserData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        console.log(`DATA POSTED TO UI`);

        addSavedTrip(data)
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

async function addSavedTrip(data) {
    for (let i = 0; i < data.length; i++) {
        let newItemRow = document.createElement('div');
        let tripDates = document.createElement('div');
        let tripCity = document.createElement('div');
        let tripActions = document.createElement('div');
        const tripPackingList = document.createElement('span');
        const tripTodoList = document.createElement('span');
        const editTrip = document.createElement('span');
        const deleteTrip = document.createElement('span');

        tripDates.innerHTML = `${data[i].departure.slice(5, 7)}/${data[i].departure.slice(8, 10)} - ${data[i].arrival.slice(5, 7)}/${data[i].arrival.slice(8, 10)}`;
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


        // GENERATE PACKING LIST
        let packingListContainer = document.createElement('div');
        newItemRow.insertAdjacentElement('afterend', packingListContainer);
        let packingItems = data[i].packingList;

        console.log(data);

        if (packingItems === undefined) {
            console.log('no items');

            let noItemsContainer = document.createElement('div');

            let nopackingItems = document.createElement('div');
            nopackingItems.style.cssText = 'padding: 20px; font-size: 0.9em; text-align: left;';

            let addItems = document.createElement('button');
            nopackingItems.innerHTML = `There are no items in the packing list for this trip. Would you like to add some?`
            addItems.innerHTML = `Add Items`

            noItemsContainer.appendChild(nopackingItems);
            noItemsContainer.appendChild(addItems);
            packingListContainer.style.cssText = 'display: none; flex-direction: column; text-align: center;';

            packingListContainer.appendChild(noItemsContainer);


        } else {
            for (let i = 0; i < packingItems.length; i++) {
                let packingListRow = document.createElement('div');

                let packingToggle = document.createElement('div');
                let packingItem = document.createElement('div');
                let packingCategory = document.createElement('div');
                let editBtn = document.createElement('div');
                let deleteBtn = document.createElement('div');

                packingItem.innerHTML = packingItems[i].item;
                packingCategory.innerHTML = packingItems[i].category;
                packingToggle.innerHTML = `<i class= "far fa-check-square"></i>`;
                editBtn.innerHTML = editTrip.innerHTML;
                deleteBtn.innerHTML = deleteTrip.innerHTML;

                packingListRow.classList.add('saved-trip-packing-list')

                packingListRow.appendChild(packingToggle);
                packingListRow.appendChild(packingItem);
                packingListRow.appendChild(packingCategory);
                packingListRow.appendChild(editBtn);
                packingListRow.appendChild(deleteBtn);

                packingListContainer.appendChild(packingListRow);
                packingListContainer.style.display = 'none';

                if (packingItems.length < 1) {
                    console.log('no packing items')
                }

                deleteBtn.addEventListener('click', removeItems)

                // newItemRow.insertAdjacentElement('afterend', packingList);
            }
        }

        /* PACKING Items View */
        tripPackingList.addEventListener('click', function (event) {
            let tripCity = event.target.parentElement.parentElement.previousSibling.innerText;

            for (let i = 0; i < data.length; i++) {

                // let packingListContainer = document.createElement('div');
                // newItemRow.appendChild(packingListContainer)
                // let packingItems = data[i].packingList;

                if (data[i].city === tripCity) {
                    if (packingListContainer.style.display === 'none') {
                        packingListContainer.style.display = 'flex';
                        packingListContainer.style.flexWrap = 'wrap';
                    } else {
                        packingListContainer.style.display = 'none'
                    }

                    // for (let i = 0; i < packingItems.length; i++) {
                    //     let packingList = document.createElement('div');
                    //     let packingToggle = document.createElement('div');
                    //     let packingItem = document.createElement('div');
                    //     let packingCategory = document.createElement('div');
                    //     let editBtn = document.createElement('div');
                    //     let deleteBtn = document.createElement('div');

                    //     packingItem.innerHTML = packingItems[i].item;
                    //     packingCategory.innerHTML = packingItems[i].category;
                    //     packingToggle.innerHTML = `<i class= "far fa-check-square"></i>`;
                    //     editBtn.innerHTML = editTrip.innerHTML;
                    //     deleteBtn.innerHTML = deleteTrip.innerHTML;

                    //     packingList.classList.add('saved-trip-packing-list')

                    //     packingList.appendChild(packingToggle);
                    //     packingList.appendChild(packingItem);
                    //     packingList.appendChild(packingCategory);
                    //     packingList.appendChild(editBtn);
                    //     packingList.appendChild(deleteBtn);

                    //     newItemRow.insertAdjacentElement('afterend', packingList);
                    // }

                }
            }

            // console.log(deleteTrip.parentElement.parentElement)
            // deleteTrip.parentElement.parentElement.remove()

            // deleteData('/remove', {
            //     city: tripCity.innerHTML
            // });
        })

        /* REMOVE Items */
        deleteTrip.addEventListener('click', function (event) {
            console.log(event.target)
            console.log(deleteTrip.parentElement.parentElement)
            deleteTrip.parentElement.parentElement.remove()

            deleteData('/remove', {
                city: tripCity.innerHTML
            });
        })
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

export {
    deleteData,
    viewSavedTrips,
    getUserData,
    addSavedTrip
}