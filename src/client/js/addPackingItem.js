document.querySelector('.packing-list-btn').addEventListener('click', addPackingItem);



let itemCategoryArr = new Object();
console.log(itemCategoryArr);

function addPackingItem(event) {
    event.preventDefault();

    // retrieve packing list categories
    let selectOptions = document.querySelectorAll('option'); // options in select
    let packingListOutput = document.querySelector('.packing-list'); // whole packing list (incl. form)

    // CREATES NEW ITEM ROW
    let newItemRow = document.createElement('div');
    newItemRow.classList.add('packing-list-row');

    // ADDS ITEM TO BLOCK
    let newItemValue = document.createElement('textarea');
    newItemValue.setAttribute('style', 'resize: none; height: 1vh; ');
    newItemValue.readOnly = true;
    newItemValue.defaultValue = `${document.querySelector('.packing-list-item').value}`;
    newItemValue.placeholder = `${document.querySelector('.packing-list-item').value}`;
    newItemValue.classList.add('packing-item-row-segment', 'packing-item');
    newItemRow.appendChild(newItemValue);

    // ADDS CATEGORY LABEL TO BLOCK
    let newItemCategoryLabel = document.createElement('div');
    newItemCategoryLabel.innerHTML = document.querySelector('.packing-item-category').value;
    newItemCategoryLabel.id = document.querySelector('.packing-item-category').value;
    newItemCategoryLabel.classList.add('category-labels');

    console.log(newItemCategoryLabel.id.length);

    // add initial values to array
    for (let i = 0; i < newItemCategoryLabel.length; i++) {
        itemCategoryArr.set(newItemCategoryLabel[i].id, 1);
    }

    // ADDS PACKED TOGGLE TO BLOCK
    let packedFlag = document.createElement('input');
    packedFlag.setAttribute('type', 'checkbox');
    packedFlag.classList.add('packed-flag')
    let packedFlagLabel = document.createElement('label');
    packedFlagLabel.innerHTML = 'Packed';
    packedFlagLabel.classList.add('packing-item-row-segment')
    newItemRow.appendChild(packedFlagLabel);
    packedFlagLabel.appendChild(packedFlag);

    // packed? function
    packedFlag.addEventListener('click', function () {
        newItemRow.classList.toggle('packed');
    });

    // ADDS EDIT BTN TO BLOCK
    let editBtn = document.createElement('button');
    editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    editBtn.classList.add('packing-item-row-segment', 'delete-btn')
    newItemRow.appendChild(editBtn);

    // edit function
    editBtn.addEventListener('click', function () {
        newItemValue.readOnly = false;
        // change color of newItemValue to indicate editable
        newItemValue.setAttribute('style', 'width: 29vw; height: 1vh; background: #c44536; color: #fff;');
        // add save btn
        let saveBtn = document.createElement('div');
        saveBtn.innerHTML = `<i class="fas fa-save"></i>`;
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

    // ADDS DELETE BTN TO BLOCK
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    deleteBtn.classList.add('packing-item-row-segment', 'delete-btn')
    newItemRow.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        newItemRow.parentElement.removeChild(newItemRow);
        console.log(itemCategoryArr);


        for (let i = 0; i < itemCategoryArr.length; i++) {
            console.log(itemCategoryArr[i]);

            if (itemCategoryArr[i].id < 2) {
                console.log('less');
            }
        }

        if (document.querySelectorAll('.packing-list-row').length < 1) {
            console.log('bey!');

            console.log(itemCategoryArr);
            // newItemRow.parentElement.remove();

            // store item category blocks in an array
            // for loop over the array
            // if child node length < #, delete label
        }
    });


    // APPEND TO PACKING LIST
    var children = packingListOutput.getElementsByTagName('div')
    let idArr = []
    for (var i = 0; i < children.length; i++) {
        idArr.push(children[i].id);
    }

    if (idArr.includes(newItemCategoryLabel.innerText)) { // category already present
        console.log('present');
        let extantRow = document.querySelector(`#${newItemCategoryLabel.innerText}`);
        extantRow.appendChild(newItemRow);
    } else { // append new row
        packingListOutput.appendChild(newItemCategoryLabel);
        newItemCategoryLabel.appendChild(newItemRow);
    }

    // APPEND TO MAP + increment
    itemCategoryArr[newItemCategoryLabel.id] ? itemCategoryArr[newItemCategoryLabel.id]++ : itemCategoryArr[newItemCategoryLabel.id] = 1;
    console.log('ARRAY', itemCategoryArr);

    document.querySelector('.packing-list-item').value = '';
}

export { addPackingItem }