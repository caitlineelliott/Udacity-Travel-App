// generates packing + todo list items on new trip view

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

    /* Collapse Items */
    blockElements.newItemCategoryLabel.addEventListener('click', function (event) {
        Array.from(event.target.children).forEach(function (item) {
            if (item.classList.contains('packing-list-row')) {
                item.classList.toggle('item-display');
            } else if (item.classList.contains('fa-chevron-down')) {
                item.classList.toggle('fa-chevron-up')
            }
        })
    })
}

async function setValues(target, blockElements, rowElements) {
    blockElements.newItemCategoryLabel.innerHTML = `${document.querySelector(`.${target}-category`).value} <i class="fas fa-chevron-down"></i>`;

    blockElements.newItemCategoryLabel.id = document.querySelector(`.${target}-category`).value;
    blockElements.newItemRow.classList.add('packing-list-row');

    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    rowElements.newItemValue.defaultValue = document.querySelector(`.${target}-item`).value;

    document.querySelector(`.${target}-item`).value = '';

    appendItem(target, blockElements, rowElements);
}

function appendItem(target, blockElements, rowElements) {
    const categoryArr = []
    let appendedElements = document.querySelector(`.${target}-container`).children;

    for (let i = 0; i < appendedElements.length; i++) {
        categoryArr.push(appendedElements[i].id);
    }

    if (!categoryArr.includes(blockElements.newItemCategoryLabel.id)) {
        document.querySelector(`.${target}-container`).appendChild(blockElements.newItemCategoryLabel);
        blockElements.newItemCategoryLabel.appendChild(blockElements.newItemRow);

    } else {
        let extantRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        extantRow.appendChild(blockElements.newItemRow);
    }

    for (let i = 0; i < Object.keys(rowElements).length; i++) {
        blockElements.newItemRow.appendChild(Object.values(rowElements)[i])
        Object.values(rowElements)[i].id = Object.keys(rowElements)[i]
        Object.values(rowElements)[i].classList.add('packing-item-row-segment')
    }

    rowElements.deleteBtn.addEventListener('click', removeItems)
    rowElements.editBtn.addEventListener('click', editNewItems)
}

function editNewItems(event) {
    console.log(event.target)
    let editibleItem = event.target.previousSibling;
    editibleItem.readOnly = false;
    editibleItem.backgroundColor = '#c44536';
    editibleItem.style.width = '46vw';

    let saveBtnNTV = document.createElement('button');
    saveBtnNTV.innerHTML = 'save';
    saveBtnNTV.style.width = '12vw';
    editibleItem.insertAdjacentElement('afterend', saveBtnNTV);
    saveBtnNTV.addEventListener('click', function () {
        saveEditedItem(editibleItem, saveBtnNTV);
    })
}

function saveEditedItem(editibleItem, saveBtnNTV) {
    editibleItem.innerHTML = editibleItem.value;
    editibleItem.readOnly = true;
    editibleItem.style.backgroundColor = '#000';
    // editibleItem.style.width = '23vw';
    saveBtnNTV.remove();
}

function removeItems(event) {
    let item = event.target.parentElement.parentElement;
    let itemCategory = event.target.parentElement.parentElement.parentElement;

    if (event.target.classList.value === 'fas fa-times') {
        item.remove();
        if (itemCategory.children.length < 2) {
            itemCategory.remove()
        }
    } else if (event.target.classList.value === 'packing-item-row-segment') {
        event.target.parentElement.remove();
        if (itemCategory.children.length < 2) {
            itemCategory.remove()
        }
    }
}



export {
    createElements,
    removeItems,
    appendItem
}