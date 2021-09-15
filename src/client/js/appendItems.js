import { editItems, removeItems, toggleItems } from "./modifyItems";

const appendItems = (itemRow, item, category) => {
    let toggle = document.createElement('button');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
    editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

    editBtn.addEventListener('click', editItems);
    deleteBtn.addEventListener('click', removeItems);
    toggle.addEventListener('click', toggleItems);

    if (itemRow !== null) { appendExistingItems(itemRow, item, category, toggle, editBtn, deleteBtn); } // stv

    return function (event) {
        event.preventDefault();

        let toggle = document.createElement('button');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        toggle.innerHTML = `<i class= "far fa-check-square"></i>`;
        editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
        deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

        editBtn.addEventListener('click', editItems);
        deleteBtn.addEventListener('click', removeItems);
        toggle.addEventListener('click', toggleItems);

        if (itemRow === null) { appendNewItems(event, toggle, editBtn, deleteBtn); } // ntv
    };
};

const appendNewItems = (event, toggle, editBtn, deleteBtn) => {
    event.preventDefault();

    let itemRow = document.createElement('div');
    let item = document.createElement('textarea');
    let category = document.createElement('div');
    let categoryLabel = document.createElement('div');

    item.innerHTML = event.target.parentElement.children[0].value;
    category.innerHTML = event.target.parentElement.children[1].value;
    categoryLabel.innerHTML = `<div class="select-categories">${category.innerHTML} <i class="fas fa-chevron-down"></i></div>`;

    // split function basedn on ntv or stv
    let target = event.target.classList[0];
    let newTarget = target.substring(target.length - 3);
    if (newTarget === 'ntv') {
        itemRow.classList.add('new-items-row');
        editBtn.classList.add('edit-items-ntv');
        deleteBtn.classList.add('delete-items-ntv');
        categoryLabel.id = `${category.innerHTML}`;
        categoryLabel.classList.add('category-group');

        itemRow.appendChild(item);
        itemRow.appendChild(editBtn);
        itemRow.appendChild(deleteBtn);

        const categoryArr = [];
        let appendedElements = event.target.parentElement.parentElement.children;
        let itemContainer = event.target.parentElement.parentElement;

        for (let i = 2; i < appendedElements.length; i++) { categoryArr.push(appendedElements[i].id); }

        // Determines which category to append items under
        if (!categoryArr.includes(categoryLabel.id)) {
            itemContainer.appendChild(categoryLabel);
            categoryLabel.appendChild(itemRow);
        } else {
            let existingRow = document.querySelector(`#${categoryLabel.id}`);
            existingRow.appendChild(itemRow);
        }
    } else if (newTarget === 'stv') {
        styleItems(itemRow, item, category, toggle, editBtn, deleteBtn);
        if (category.innerText === 'Priority' || category.innerText === 'High' || category.innerText === 'Medium' || category.innerText === 'Low') {
            itemRow.classList.add('saved-trip-packing-list', 'todo', 'new-todo-item');
            let todoList = event.target.parentElement.parentElement;
            todoList.insertBefore(itemRow, todoList.children[0]);
        } else {
            itemRow.classList.add('saved-trip-packing-list', 'packing', 'new-packing-item');
            let packingList = event.target.parentElement.parentElement;
            packingList.insertBefore(itemRow, packingList.children[0]);
        }
    }

    event.target.parentElement.children[0].value = '';

    // Toggles each item category open/closed
    categoryLabel.addEventListener('click', function (event) {
        Array.from(event.target.parentElement.children).forEach(function (item) {
            if (item.classList[0] === 'new-items-row') {
                if (item.style.display === 'none') { item.style.display = 'flex'; }
                else { item.style.display = 'none'; }
            } else if (item.lastChild.classList.contains('fa-chevron-down')) {
                item.lastChild.classList.toggle('fa-chevron-up');
            }
        });
    });
};

const appendExistingItems = (itemRow, item, category, toggle, editBtn, deleteBtn) => {
    styleItems(itemRow, item, category, toggle, editBtn, deleteBtn);
};

const styleItems = (itemRow, item, category, toggle, editBtn, deleteBtn) => {
    toggle.classList.add('toggle');
    item.classList.add('stv-item');
    category.classList.add('stv-category');
    editBtn.classList.add('edit-items-stv');
    deleteBtn.classList.add('delete-items-stv');

    itemRow.appendChild(toggle);
    itemRow.appendChild(item);
    itemRow.appendChild(category);
    itemRow.appendChild(editBtn);
    itemRow.appendChild(deleteBtn);
};

export { appendItems, appendNewItems, appendExistingItems };