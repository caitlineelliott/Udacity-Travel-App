document.querySelector('.packing-list-btn').addEventListener('click', createElements); // target packing list
document.querySelector('.todo-list-btn').addEventListener('click', createElements); // target to do list

let packingList = []
let todoList = []

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
                console.log('success')
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

    let item = {
        item: rowElements.newItemValue.innerText,
        category: blockElements.newItemCategoryLabel.innerText,
        toggleStatus: false,
        deleted: false
    }

    if (target === 'packing-list-btn') {
        packingList.push(item);
    } else {
        todoList.push(item)
    }

    console.log(packingList)
    console.log(todoList)

    appendItem(target, blockElements, rowElements, checkboxElements);

    await postData('/api/list', {
        packingList: packingList,
        todoList: todoList,
        tripCity: document.querySelector('h1').innerText
    });

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
        console.log('new row')

    } else {
        let extantRow = document.querySelector(`#${blockElements.newItemCategoryLabel.id}`);
        extantRow.appendChild(blockElements.newItemRow);
        console.log('old row')
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
    console.log(event.target.parentElement.parentElement)
}

// function editItems(event) {
//     let item = rowElements.editBtn.previousSibling.previousSibling
//     item.readOnly = false;
//     item.setAttribute('style', 'width: 24vw; background: #c44536; color: #fff;');

//     let saveBtn = document.createElement('div');
//     saveBtn.innerHTML = '<i class= "fas fa-save"></i>';
//     saveBtn.classList.add('packing-item-row-segment', 'delete-btn');
//     saveBtn.setAttribute('style', 'width: 6vw; height: 4vh; background: #c44536; color: #fff;');

//     item.insertAdjacentElement('afterend', saveBtn);
//     rowElements.editBtn.setAttribute('disabled', 'disabled');

//     saveBtn.addEventListener('click', function () {
//         saveBtn.remove();
//         item.setAttribute('style', 'width: 35vw; background: #197278; color: #fff; border: none;');
//         item.readOnly = true;
//         rowElements.editBtn.removeAttribute('disabled');
//     });
// }

function removeItems(event) {
    if (event.target.classList.value === 'fas fa-times') {
        console.log('timesbtn')
        event.target.parentElement.parentElement.remove();
        console.log(blockElements.newItemCategoryLabel, blockElements.newItemCategoryLabel.children.length)
        if (blockElements.newItemCategoryLabel.children.length < 2) {
            blockElements.newItemCategoryLabel.remove()
        }
    } else if (event.target.classList.value === 'packing-item-row-segment') {
        console.log('button');
        event.target.parentElement.remove();
        console.log(blockElements.newItemCategoryLabel, blockElements.newItemCategoryLabel.children.length)
        if (blockElements.newItemCategoryLabel.children.length < 2) {
            blockElements.newItemCategoryLabel.remove()
        }
    }

    deleteData('/remove', {
        packingItem: document.querySelector('#newItemValue').value,
        city: document.querySelector('h1').innerText
    });
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(`DATA SENT TO SERVER ${makeDateAndTime()}`);
        return await response.json();
    }
    catch (e) {
        console.log('FAILED TO POST DATA TO SERVER', e);
    }
};

export {
    createElements,
    removeItems,
    toggleItems
}