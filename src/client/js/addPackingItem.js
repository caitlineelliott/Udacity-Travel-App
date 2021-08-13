import { editItems } from './modifyItems'
import { removeItems } from './modifyItems'

function createElements(event) {
    event.preventDefault();

    const blockElements = {
        "newItemCategoryLabel": document.createElement('div'),
        "newItemRow": document.createElement('div'),
    }

    const rowElements = {
        "newItemValue": document.createElement('textarea'),
        "editBtn": document.createElement('button'),
        "deleteBtn": document.createElement('button'),
    }

    rowElements.newItemValue.readOnly = true;
    rowElements.newItemValue.setAttribute('style', 'resize: none; ');

    let target = event.target.classList.value;

    setValues(target, blockElements, rowElements);

    // Toggles each item category open/closed
    blockElements.newItemCategoryLabel.addEventListener('click', function (event) {
        Array.from(event.target.children).forEach(function (item) {
            if (item.classList[0] === 'packing-list-row') {
                if (item.style.display === 'none') { item.style.display = 'flex' }
                else { item.style.display = 'none' }
            } else if (item.classList.contains('fa-chevron-down')) {
                item.classList.toggle('fa-chevron-up')
            }
        })
    })
}

async function setValues(target, blockElements, rowElements) {
    blockElements.newItemRow.classList.add('packing-list-row');

    blockElements.newItemCategoryLabel.innerHTML = `${document.querySelector(`.${target}-category`).value} <i class="fas fa-chevron-down"></i>`;
    blockElements.newItemCategoryLabel.id = document.querySelector(`.${target}-category`).value;
    blockElements.newItemCategoryLabel.classList.add('select-categories');

    rowElements.newItemValue.defaultValue = document.querySelector(`.${target}-item`).value;
    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

    rowElements.editBtn.classList.add('edit-items-ntv');
    rowElements.deleteBtn.classList.add('delete-items-ntv');

    document.querySelector(`.${target}-item`).value = '';

    appendItem(target, blockElements, rowElements);
}

function appendItem(target, blockElements, rowElements) {
    const categoryArr = []

    let appendedElements = document.querySelector(`.${target}-container`).children;

    for (let i = 0; i < appendedElements.length; i++) { categoryArr.push(appendedElements[i].id); }

    if (!categoryArr.includes(blockElements.newItemCategoryLabel.id)) {
        document.querySelector(`.${target}-container`).appendChild(blockElements.newItemCategoryLabel);
        blockElements.newItemCategoryLabel.appendChild(blockElements.newItemRow);

    } else {
        let existingRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        existingRow.appendChild(blockElements.newItemRow);
    }

    for (let i = 0; i < Object.keys(rowElements).length; i++) {
        blockElements.newItemRow.appendChild(Object.values(rowElements)[i]);
        Object.values(rowElements)[i].id = Object.keys(rowElements)[i];
        Object.values(rowElements)[i].classList.add('packing-item-row-segment');
    }

    rowElements.editBtn.addEventListener('click', editItems);
    rowElements.deleteBtn.addEventListener('click', removeItems);
}

export {
    createElements,
    // removeItems,
    appendItem
}