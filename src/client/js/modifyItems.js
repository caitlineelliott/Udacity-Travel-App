import { getUserData } from "./savedTripsView";
import { addServerData } from "./savedTripsView";

function editItems(event) {
    let editBtn = event.target;
    editBtn.disabled = true;

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';

    if (event.target.classList.contains('edit-items-ntv')) {
        let item = event.target.previousSibling;
        item.style = 'color: white;'
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-trip')) {
        let item = event.target.parentElement.parentElement.firstChild;
        item.style = 'box-sizing: border-box; padding: 15px 0 0 8px; width: 30vw; color: black; height: 5.7vh';
        saveBtn.style = 'padding: 0; height: 5.7vh; color: black;';
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-items-stv')) {
        let item = event.target.parentElement.children[1];
        item.style = "box-sizing: border-box; padding: 10px; height: 5vh; color: white;"
        saveBtn.style = 'height: 5vh;'
        modifyEditedItems(item, saveBtn, editBtn);
    }
}

function modifyEditedItems(item, saveBtn, editBtn) {
    item.readOnly = false;
    item.style.backgroundColor = "#c44536";
    saveBtn.classList.add('save-btn');
    item.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () { saveEditedItem(item, saveBtn, editBtn); })
}

function saveEditedItem(item, saveBtn, editBtn, event) {
    item.readOnly = true;
    item.style.backgroundColor = '#83A8A6';
    saveBtn.remove();
    editBtn.disabled = false;
    console.log(item)

    if (item.classList.contains('trip-dates')) {
        item.style.backgroundColor = '#197278';
        item.style.color = 'white';
        updateTripDates(item)
    } else if (item.classList.contains('stv-item')) {
        item.style.color = 'black';
    }
}

async function updateTripDates(item) {
    // remove old trips from DOM
    let trips = document.querySelector('.saved-trips').children;
    for (let i = trips.length - 1; i >= 0; i--) { trips[i].remove(); }

    let newTripDates = item.value;
    let tripCity = item.parentElement.children[1].innerText;
    let tripWeatherTestData = item.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;

    await changeDatesInServer(newTripDates, tripCity, tripWeatherTestData)
    setTimeout(displayNewTrips, 1000);
}

export { editItems }

// // update server
async function changeDatesInServer(newTripDates, tripCity, tripWeatherTestData) {
    addServerData('/tripdates', {
        city: tripCity,
        depart: newTripDates.slice(0, 5),
        return: newTripDates.slice(8, 13),
        weatherTest: tripWeatherTestData,
    });
}

// // display new trips
async function displayNewTrips() { await getUserData('/all') }

// // delete items - NTV packing & todo, STV packing & todo, STV trips
// // save & update server

// // delete NTV packing & todo items
// function removeItems(event) {
//     let item = event.target.parentElement;
//     let itemCategory = event.target.parentElement.parentElement;

//     item.remove();
//     if (itemCategory.children.length < 2) { itemCategory.remove() }
// }

// // delete STV packing & todo items
// function removeItem(event) {
//     let item = event.target.parentElement.parentElement;
//     item.style.display = 'none';
// }

// // toggle packed in STV
// function toggleData(event) {
//     event.target.parentElement.parentElement.classList.add('modified');
//     event.target.parentElement.parentElement.classList.toggle('packed');
// }

// // remove trip function
// function removeData() {
//     return function (event) {
//         let tripRow = event.target.parentElement.parentElement.parentElement.parentElement;
//         let tripCity = event.target.parentElement.parentElement.previousElementSibling.innerText;
//         let departDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
//         let returnDate = event.target.parentElement.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

//         tripRow.remove();
//         deleteFromServer(tripCity, departDate, returnDate)
//     }
// }

// // delete from server
// function deleteFromServer(tripCity, departDate, returnDate, itemToDelete) {
//     deleteServerData('/remove', {
//         city: tripCity,
//         depart: departDate,
//         return: returnDate,
//         item: itemToDelete,
//     });
// }

// // delete req
// const deleteServerData = async (url = '', data = {}) => {
//     try {
//         const response = await fetch(url, {
//             method: 'DELETE',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//         console.log(`DATA DELETED FROM SERVER`);
//         return await response.json();
//     }
//     catch {
//         console.log('FAILED TO DELETE DATA FROM SERVER');
//     }
// };