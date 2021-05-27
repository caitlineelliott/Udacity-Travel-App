import { getElementsByTagName } from "domutils";

document.querySelector('.packing-list-btn').addEventListener('click', createElements); // target packing list
document.querySelector('.todo-list-btn').addEventListener('click', createElements); // target to do list

const packingListOutput = document.querySelector('.packing-list'); // whole packing list (incl. form)
const todoListOutput = document.querySelector('.todo-list'); // whole todo list (incl. form)

let newItemCategoryLabel = document.createElement('div');
newItemCategoryLabel.classList.add('category-labels');

function createElements(event) {
    event.preventDefault();

    let newItemRow = document.createElement('div');
    let newItemValue = document.createElement('textarea');
    newItemValue.setAttribute('style', 'resize: none; ');
    newItemValue.readOnly = true;

    let packedFlag = document.createElement('button');
    let packedFlagLabel = document.createElement('span');
    let packedFlagIcon = document.createElement('span');
    let editBtn = document.createElement('button');

    const elements = []
    elements.push(newItemRow, newItemValue, packedFlag, packedFlagLabel, packedFlagIcon, editBtn)

    appendItem(event, elements);
}

function appendItem(event, elements) {
    packingListOutput.appendChild(newItemCategoryLabel);
    newItemCategoryLabel.appendChild(elements[0]);

    for (let i = 1; i < elements.length; i++) {
        console.log(elements[i])
        newItemCategoryLabel.appendChild(elements[i]);
        elements[i].classList.add('packing-item-row-segment');
    }


    // ADDS ITEM TO ROW BLOCK

    newItemValue.classList.add('packing-item-row-segment', 'packing-item');

    // ADDS TOGGLE TO BLOCK

    packedFlag.classList.add('packing-item-row-segment')
    packedFlagLabel.classList.add('packing-item-row-segment')
    packedFlagIcon.classList.add('packed-flag')
    packedFlagIcon.classList.add('packing-item-row-segment')

    setPackListValues(event.target.classList.value);
    setToDoListValues(event.target.classList.value);

    // packed? function
    packedFlag.addEventListener('click', function () {
        newItemRow.classList.toggle('packed');
        if (packedFlag.innerHTML === `<i class="fas fa-check-square"></i>`) {
            packedFlag.innerHTML = `<i class="far fa-check-square"></i>`
        } else {
            packedFlag.innerHTML = `<i class="fas fa-check-square"></i>`
        }
    });

    // ADDS EDIT BTN TO BLOCK
    editBtn.innerHTML = `<i class= "fas fa-edit"></i> `;
    editBtn.classList.add('packing-item-row-segment', 'delete-btn')

    // edit function
    editBtn.addEventListener('click', function () {
        newItemValue.readOnly = false;
        // change color of newItemValue to indicate editable
        newItemValue.setAttribute('style', 'width: 29vw; height: 1vh; background: #c44536; color: #fff;');
        // add save btn
        let saveBtn = document.createElement('div');
        saveBtn.innerHTML = `<i class= "fas fa-save"></i> `;
        saveBtn.classList.add('packing-item-row-segment', 'delete-btn');
        saveBtn.setAttribute('style', 'width: 6vw; background: #c44536; color: #fff;');
        newItemValue.insertAdjacentElement('afterend', saveBtn);
        // change color back // remove save btn
        saveBtn.addEventListener('click', function () {
            saveBtn.style.display = 'none';
            newItemValue.setAttribute('style', 'width: 40vw; height: 1vh;background: #197278; color: #fff; border: none;');
            newItemValue.readOnly = true;
        });
    });

    var children = packingListOutput.getElementsByTagName('div')

    // ADDS DELETE BTN TO BLOCK
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class= "fas fa-times"></i> `;
    deleteBtn.classList.add('packing-item-row-segment', 'delete-btn')
    newItemRow.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        console.log(newItemCategoryLabel.innerText, newItemCategoryLabel.children.length)
        console.log(newItemCategoryLabel.children)
        if (newItemCategoryLabel.children.length <= 0) {
            console.log('last');
            newItemCategoryLabel.remove();
        }
        newItemRow.parentElement.removeChild(newItemRow);
    });

    // APPEND TO LIST - OBJECT
    let categoryObj = {}

    for (var i = 0; i < children.length; i++) {
        categoryObj[children[i].id] = new Array();
        if (children[i].id) {
        } else {
            categoryObj[children[i].id].push('goodbye')
        }
    }

    console.log(categoryObj)

    // APPEND TO PACKING LIST
    let idArr = []
    for (var i = 0; i < children.length; i++) {
        idArr.push(children[i].id);
    }

    if (idArr.includes(newItemCategoryLabel.innerText)) { // category already present
        if (event.target.classList.value === 'packing-list-btn') {
            let extantRow = document.querySelector(`#${newItemCategoryLabel.innerText}`);
            extantRow.appendChild(newItemRow);
        } else if (event.target.classList.value === 'todo-list-btn') {
            console.log('poop')
        }

    } else { // append new row
        if (event.target.classList.value === 'packing-list-btn') {
            packingListOutput.appendChild(newItemCategoryLabel);
            newItemCategoryLabel.appendChild(newItemRow);
        } else if (event.target.classList.value === 'todo-list-btn') {
            todoListOutput.appendChild(newItemCategoryLabel);
            newItemCategoryLabel.appendChild(newItemRow);
        }
    }

    document.querySelector('.packing-list-item').value = '';
    document.querySelector('#todo-list-input').value = '';
}


function setPackListValues(btnClick) {
    if (btnClick === 'packing-list-btn') {
        newItemCategoryLabel.innerHTML = document.querySelector('.packing-item-category').value;
        newItemCategoryLabel.id = document.querySelector('.packing-item-category').value;
        newItemRow.classList.add('packing-list-row');
        newItemValue.defaultValue = `${document.querySelector('.packing-list-item').value}`;
        packedFlag.innerHTML = `<i class="far fa-check-square"></i>`
        packedFlagLabel.innerHTML = 'Packed';
        packedFlag.appendChild(packedFlagLabel);
    }
}

function setToDoListValues(btnClick) {
    if (btnClick === 'todo-list-btn') {
        newItemCategoryLabel.innerHTML = document.querySelector('.todo-item-category').value;
        newItemCategoryLabel.id = document.querySelector('.todo-item-category').value;
        newItemRow.classList.add('todo-list-row');
        newItemValue.defaultValue = `${document.querySelector('#todo-list-input').value}`;
        packedFlag.innerHTML = `<i class="far fa-check-square"></i>`
        packedFlagLabel.innerHTML = `Completed`
        packedFlag.appendChild(packedFlagLabel);
    }
}

export { appendItem }