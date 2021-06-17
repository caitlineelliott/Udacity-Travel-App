// generates packing + todo list items on new trip view

function createElements(event) {
    event.preventDefault();

    const blockElements = {
        "newItemCategoryLabel": document.createElement('div'),
        "newItemRow": document.createElement('div'),
    }

    const rowElements = {
        "newItemValue": document.createElement('textarea'),
        "packedFlag": document.createElement('button'),
        "editBtn": document.createElement('button'),
        "deleteBtn": document.createElement('button'),
    }

    const checkboxElements = {
        "toggleIcon": document.createElement('span'),
        "toggleLabel": document.createElement('span'),
    }

    rowElements.newItemValue.readOnly = true;
    rowElements.newItemValue.setAttribute('style', 'resize: none; ');

    let target = event.target.classList.value;

    setValues(target, blockElements, rowElements, checkboxElements);

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

async function setValues(target, blockElements, rowElements, checkboxElements) {
    blockElements.newItemCategoryLabel.innerHTML = `${document.querySelector(`.${target}-category`).value} <i class="fas fa-chevron-down"></i>`;

    blockElements.newItemCategoryLabel.id = document.querySelector(`.${target}-category`).value;
    blockElements.newItemRow.classList.add('packing-list-row');

    rowElements.editBtn.innerHTML = '<i class= "fas fa-edit"></i>';
    rowElements.deleteBtn.innerHTML = '<i class= "fas fa-times"></i>';
    rowElements.newItemValue.defaultValue = document.querySelector(`.${target}-item`).value;

    checkboxElements.toggleIcon.innerHTML = '<i class= "far fa-check-square"></i>';
    checkboxElements.toggleLabel.innerHTML = 'Packed';

    document.querySelector(`.${target}-item`).value = '';

    appendItem(target, blockElements, rowElements, checkboxElements);
}

function appendItem(target, blockElements, rowElements, checkboxElements) {
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

    rowElements.packedFlag.appendChild(checkboxElements.toggleIcon);
    rowElements.packedFlag.appendChild(checkboxElements.toggleLabel);

    rowElements.deleteBtn.addEventListener('click', removeItems)
    // rowElements.editBtn.addEventListener('click', editItems)
    rowElements.packedFlag.addEventListener('click', toggleItems)
}

function toggleItems(event) {
    event.target.parentElement.parentElement.classList.toggle('packed');
}

function removeItems(event) {
    if (event.target.classList.value === 'fas fa-times') {
        event.target.parentElement.parentElement.remove();
        if (blockElements.newItemCategoryLabel.children.length < 2) {
            blockElements.newItemCategoryLabel.remove()
        }
    } else if (event.target.classList.value === 'packing-item-row-segment') {
        event.target.parentElement.remove();
        if (blockElements.newItemCategoryLabel.children.length < 2) {
            blockElements.newItemCategoryLabel.remove()
        }
    }
}

export {
    createElements,
    removeItems,
    toggleItems,
    appendItem
}