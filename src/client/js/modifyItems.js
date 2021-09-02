import { postData, getUserData, deleteServerData } from "./serverRequests";

const editItems = (event) => {
    let editBtn = event.target;
    editBtn.disabled = true;
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = '<i class="fas fa-save"></i>';

    if (event.target.classList.contains('edit-items-ntv')) {
        let item = event.target.previousSibling;
        item.style = 'color: white;';
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-trip')) {
        let item = event.target.parentElement.parentElement.firstChild;
        item.style = 'box-sizing: border-box; padding: 15px 0 0 8px; color: black; height: 5.7vh';
        saveBtn.style = 'padding: 0; height: 5.7vh; color: black; margin: 0';
        modifyEditedItems(item, saveBtn, editBtn);
    } else if (event.target.classList.contains('edit-items-stv')) {
        let item = event.target.parentElement.children[1];
        item.style = "box-sizing: border-box; padding: 10px; height: 5vh; color: white;";
        saveBtn.style = 'height: 5vh';
        modifyEditedItems(item, saveBtn, editBtn);
    }
};

const modifyEditedItems = (item, saveBtn, editBtn) => {
    item.readOnly = false;
    item.style.backgroundColor = "#c44536";
    saveBtn.classList.add('save-btn');
    item.insertAdjacentElement('afterend', saveBtn);
    saveBtn.addEventListener('click', function () { saveEditedItem(item, saveBtn, editBtn); });
};

const saveEditedItem = (item, saveBtn, editBtn) => {
    item.readOnly = true;
    item.style.backgroundColor = '#83A8A6';
    editBtn.disabled = false;
    saveBtn.remove();

    if (item.classList.contains('trip-dates')) {
        item.style.backgroundColor = '#197278';
        item.style.color = 'white';
        updateTripDates(item);
    } else { item.style.color = 'black'; }
};

const updateTripDates = async (item) => {
    // remove old trips from DOM
    let trips = document.querySelector('.saved-trips').children;
    for (let i = trips.length - 1; i >= 0; i--) { trips[i].remove(); }

    let newTripDates = item.value;
    let tripCity = item.parentElement.children[1].innerText;
    let tripWeatherTestData = item.parentElement.parentElement.lastChild.firstChild.lastChild.innerText;

    setTimeout(displayNewTrips, 1000);
    await postData('/tripdates', { city: tripCity, depart: newTripDates.slice(0, 5), return: newTripDates.slice(8, 13), weatherTest: tripWeatherTestData, });
};

// display new trips
const displayNewTrips = async () => { await getUserData('/all'); };

// delete items - NTV packing & todo, STV packing & todo, STV trips
const removeItems = (event) => {
    if (!event.target.classList.contains('delete-trip')) {
        let item = event.target.parentElement;
        if (event.target.classList.contains('delete-items-ntv')) {
            let itemCategory = event.target.parentElement.parentElement;
            if (itemCategory.children.length < 3) { itemCategory.remove(); }
            item.remove();
        } else if (event.target.classList.contains('delete-items-stv')) {
            item.style.display = 'none';
        }
    } else {
        let item = event.target.parentElement.parentElement;
        let tripCity = event.target.parentElement.previousElementSibling.innerText;
        let departDate = event.target.parentElement.parentElement.firstChild.innerHTML.slice(0, 5);
        let returnDate = event.target.parentElement.parentElement.firstChild.innerHTML.slice(8, 13);

        item.remove();
        deleteServerData('/remove', { city: tripCity, depart: departDate, return: returnDate });
    }
};

const toggleItems = (event) => {
    event.target.parentElement.classList.add('modified');
    event.target.parentElement.classList.toggle('packed');
};

export { editItems, removeItems, toggleItems };