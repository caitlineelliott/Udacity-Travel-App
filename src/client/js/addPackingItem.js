import { editItems } from './modifyItems'
import { removeItems } from './modifyItems'

function createElements(event) {
    event.preventDefault();

    const blockElements = {
        "itemContainer": event.target.parentElement.parentElement,
        "newItemCategoryLabel": document.createElement('div'),
        "itemCategory": event.target.parentElement.children[1].value,
        "newItemRow": document.createElement('div'),
        "item": event.target.parentElement.children[0],
    }

    const rowElements = {
        "newItemValue": document.createElement('textarea'),
        "editBtn": document.createElement('button'),
        "deleteBtn": document.createElement('button'),
    }

    rowElements.newItemValue.readOnly = true;
    rowElements.newItemValue.setAttribute('style', 'resize: none; ');

    setValues(event, blockElements, rowElements);

    // Toggles each item category open/closed
    blockElements.newItemCategoryLabel.addEventListener('click', function (event) {
        Array.from(event.target.children).forEach(function (item) {
            if (item.classList[0] === 'new-items-row') {
                if (item.style.display === 'none') { item.style.display = 'flex' }
                else { item.style.display = 'none' }
            } else if (item.classList.contains('fa-chevron-down')) {
                item.classList.toggle('fa-chevron-up')
            }
        })
    })
}

async function setValues(event, blockElements, rowElements) {
    blockElements.newItemRow.classList.add('new-items-row');

    blockElements.newItemCategoryLabel.innerHTML = `${blockElements.itemCategory} <i class="fas fa-chevron-down"></i>`;
    blockElements.newItemCategoryLabel.id = `${blockElements.itemCategory}-category`;

    rowElements.newItemValue.defaultValue = blockElements.item.value;
    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';

    blockElements.newItemCategoryLabel.classList.add('select-categories');
    rowElements.editBtn.classList.add('edit-items-ntv');
    rowElements.deleteBtn.classList.add('delete-items-ntv');

    event.target.parentElement.children[0].value = '';

    appendItem(blockElements, rowElements);
}

function appendItem(blockElements, rowElements) {
    const categoryArr = []
    let appendedElements = blockElements.itemContainer.children;

    for (let i = 2; i < appendedElements.length; i++) { categoryArr.push(appendedElements[i].id); }

    // Determines which category to append items under
    if (!categoryArr.includes(blockElements.newItemCategoryLabel.id)) {
        blockElements.itemContainer.appendChild(blockElements.newItemCategoryLabel);
        blockElements.newItemCategoryLabel.appendChild(blockElements.newItemRow);

    } else {
        let existingRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        existingRow.appendChild(blockElements.newItemRow);
    }

    for (let i = 0; i < Object.keys(rowElements).length; i++) {
        blockElements.newItemRow.appendChild(Object.values(rowElements)[i]);
    }

    rowElements.editBtn.addEventListener('click', editItems);
    rowElements.deleteBtn.addEventListener('click', removeItems);
}

export { createElements, appendItem }