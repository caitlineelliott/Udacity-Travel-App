document.querySelector('.packing-list-btn').addEventListener('click', createElements); // target packing list
document.querySelector('.todo-list-btn').addEventListener('click', createElements); // target to do list

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
}

function setValues(target, blockElements, rowElements, checkboxElements) {
    blockElements.newItemCategoryLabel.innerHTML = document.querySelector(`.${target}-category`).value;
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

    document.querySelector('#packedFlag').addEventListener('click', function () {
        blockElements.newItemRow.classList.toggle('packed');
        if (checkboxElements.toggleIcon.innerHTML === '<i class= "fas fa-check-square"></i>') {
            checkboxElements.toggleIcon.innerHTML = '<i class= "far fa-check-square"></i>'
        } else {
            checkboxElements.toggleIcon.innerHTML = '<i class= "fas fa-check-square" ></i >'
        }
    });

    document.querySelector('#editBtn').addEventListener('click', function () {
        rowElements.newItemValue.readOnly = false;
        rowElements.newItemValue.setAttribute('style', 'width: 24vw; background: #c44536; color: #fff;');
        let saveBtn = document.createElement('div');
        saveBtn.innerHTML = '<i class= "fas fa-save"></i>';
        saveBtn.classList.add('packing-item-row-segment', 'delete-btn');
        saveBtn.setAttribute('style', 'width: 6vw; background: #c44536; color: #fff;');
        newItemValue.insertAdjacentElement('afterend', saveBtn);
        saveBtn.addEventListener('click', function () {
            saveBtn.style.display = 'none';
            newItemValue.setAttribute('style', 'width: 35vw; background: #197278; color: #fff; border: none;');
            newItemValue.readOnly = true;
        });
    });

    document.querySelector('#deleteBtn').addEventListener('click', function () {
        event.target.parentElement.parentElement.remove()
    });
}

export { createElements }