
import { appendItems } from "./appendItems";
import { postData } from "./serverRequests";

const createForm = (tripCity, tripDates, packingListContainer, todoListContainer) => {
    let packingContainer = document.querySelector('.packing-list-container');
    let todoContainer = document.querySelector('.todo-list-container');
    let packForm = packingContainer.children[1].cloneNode(true);
    let todoForm = todoContainer.children[1].cloneNode(true);
    let addPackBtn = packForm.children[2];
    let addTodoBtn = todoForm.children[2];
    let addMoreHeading = document.createElement('p');
    let btnContainer = document.querySelector('.trip-btn-container').cloneNode(true);
    let todoBtnContainer = btnContainer.cloneNode(true);
    let discardPackBtn = btnContainer.children[0];
    let discardTodoBtn = todoBtnContainer.children[0];
    let savePackBtn = btnContainer.children[1];
    let saveTodoBtn = todoBtnContainer.children[1];

    addPackBtn.classList.remove('add-more-pack-btn-ntv');
    addTodoBtn.classList.remove('add-more-todo-btn-ntv');
    addTodoBtn.classList.add('add-more-todo-btn-stv');
    addPackBtn.classList.add('add-more-pack-btn-stv');

    addMoreHeading.innerHTML = `Missing something? Add more here:`;
    discardPackBtn.innerHTML = 'Discard Changes';
    discardTodoBtn.innerHTML = 'Discard Changes';
    savePackBtn.innerHTML = 'Save Changes';
    saveTodoBtn.innerHTML = 'Save Changes';

    packingListContainer.appendChild(addMoreHeading);
    packingListContainer.appendChild(packForm);
    packingListContainer.appendChild(btnContainer);

    todoListContainer.appendChild(addMoreHeading.cloneNode(true));
    todoListContainer.appendChild(todoForm);
    todoListContainer.appendChild(todoBtnContainer);

    addPackBtn.addEventListener('click', appendItems(null, null, null));
    addTodoBtn.addEventListener('click', appendItems(null, null, null));
    discardPackBtn.addEventListener('click', discardSTVItems);
    discardTodoBtn.addEventListener('click', discardSTVItems);
    savePackBtn.addEventListener('click', saveSTVItems(tripCity, tripDates));
    saveTodoBtn.addEventListener('click', saveSTVItems(tripCity, tripDates));
};

const discardSTVItems = (event) => {
    let allItemsContainer = event.target.parentElement.parentElement;
    if (allItemsContainer.style.display === 'block') { allItemsContainer.style.display = 'none'; }

    // return hidden trips
    let trips = document.querySelector('.saved-trips').children;
    for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;'; }

    let children = allItemsContainer.children;

    for (let i = 0; i < children.length; i++) {
        if (children[i].classList[2] == 'new-todo-item' || children[i].classList[2] == 'new-packing-item') { children[i].remove(); }
        if (children[i].style.display = 'none') { children[i].style.display = 'flex;'; }
        let classes = children[i].classList;
        classes.forEach(function (value) { if (value.includes('modified')) { children[i].classList.toggle('packed'); } })
    }
};

const saveSTVItems = (tripCity, tripDates) => {
    return function (event) {
        let allItemsContainer = event.target.parentElement.parentElement;
        let allItems = event.target.parentElement.parentElement.children;

        // delete items staged for removal
        for (let i = 0; i < allItems.length; i++) {
            while (allItemsContainer.children[i].style.display === 'none') { allItemsContainer.children[i].remove(); }
        }

        if (allItemsContainer.style.display === 'block') { allItemsContainer.style.display = 'none'; }

        // return hidden trips
        let trips = document.querySelector('.saved-trips').children;
        for (let i = 0; i < trips.length; i++) { trips[i].style = 'display: block;'; }

        let itemsArr = [];
        for (let i = 0; i < allItems.length; i++) {
            // removed modified designation from STV view
            let classes = allItems[i].classList;
            let iterator = classes.entries();
            for (let value of iterator) { if (value[i] === 'modified') { allItems[i].classList.remove('modified'); } }

            // if no list items
            console.log(allItems.length)
            if (allItems.length < 4) {
                let newItem = {};
                let flag = event.target.parentElement.parentElement.classList[0];
                newItem.item = null;

                if (flag === 'todo-list') { newItem.listType = 'todo'; }
                else if (flag === 'packing-list') { newItem.listType = 'packing'; }
                itemsArr.push(newItem);
            }
            // if yes list items
            else {
                if (allItems[i].classList[0] === 'saved-trip-packing-list') {
                    let newItem = {};
                    let flag = allItems[i].classList[1];
                    newItem.item = allItems[i].children[1].value;
                    newItem.category = allItems[i].children[2].innerText;

                    let classes = allItems[i].classList;
                    classes.forEach(
                        function (value) {
                            if (value.includes('packed')) {
                                console.log('yes');
                                newItem.toggle = true;
                            } else { newItem.toggle = false; }
                        }
                    )

                    if (flag === 'todo') { newItem.listType = 'todo'; }
                    else if (flag === 'packing') { newItem.listType = 'packing'; }
                    itemsArr.push(newItem);
                }
            }
        }
        postData('/list', { city: tripCity.innerText, depart: tripDates.innerHTML.slice(0, 5), return: tripDates.innerHTML.slice(8, 13), list: itemsArr });
    };
};

export { createForm, discardSTVItems };