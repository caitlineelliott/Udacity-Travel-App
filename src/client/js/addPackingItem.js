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
    blockElements.newItemCategoryLabel.classList.add('select-categories');
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
    if (event.target.id === 'editBtn') {
        let editibleItem = event.target.previousSibling;
        editibleItem.readOnly = false;
        editibleItem.style = "background-color: #c44536"

        let saveBtnNTV = document.createElement('button');
        saveBtnNTV.innerHTML = '<i class="fas fa-save"></i>';
        saveBtnNTV.style = 'height: 6vh; margin: 0; color: white; width: 12vw; background-color: #c44536;'
        editibleItem.insertAdjacentElement('afterend', saveBtnNTV);
        saveBtnNTV.addEventListener('click', function () {
            saveEditedItem(editibleItem, saveBtnNTV);
        })
    } else if (event.target.classList[1] === 'fa-edit') {
        let editibleItem = event.target.parentElement.previousSibling;
        editibleItem.readOnly = false;
        editibleItem.style = "background-color: #c44536"


        let saveBtnNTV = document.createElement('button');
        saveBtnNTV.innerHTML = '<i class="fas fa-save"></i>';
        saveBtnNTV.style = 'margin: 0; color: white; width: 12vw; background-color: #c44536;'
        editibleItem.insertAdjacentElement('afterend', saveBtnNTV);
        saveBtnNTV.addEventListener('click', function () {
            saveEditedItem(editibleItem, saveBtnNTV);
        })
    }

}

function saveEditedItem(editibleItem, saveBtnNTV) {
    editibleItem.innerHTML = editibleItem.value;
    editibleItem.readOnly = true;
    editibleItem.style.backgroundColor = '#83A8A6';
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
        let item = event.target.parentElement;
        let itemCategory = event.target.parentElement.parentElement;

        item.remove();
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