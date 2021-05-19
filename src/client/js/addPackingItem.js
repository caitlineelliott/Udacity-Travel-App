document.querySelector('.packing-list-btn').addEventListener('click', addPackingItem);

function addPackingItem(event) {
    event.preventDefault();

    let newItemRow = document.createElement('div');
    newItemRow.classList.add('packing-list-row');
    document.querySelector('.packing-list').appendChild(newItemRow)

    let newItemValue = document.createElement('div');
    newItemValue.innerHTML = document.querySelector('.packing-list-item').value;
    newItemValue.classList.add('packing-item-row-segment')
    newItemRow.appendChild(newItemValue);

    let newItemCategory = document.createElement('div');
    newItemCategory.innerHTML = document.querySelector('.packing-item-category').value;
    newItemCategory.classList.add('packing-item-row-segment')
    newItemCategory.classList.add('item-category')
    newItemRow.appendChild(newItemCategory);

    let packedFlag = document.createElement('input');
    packedFlag.setAttribute('type', 'checkbox');
    packedFlag.classList.add('packed-flag')
    let packedFlagLabel = document.createElement('label');
    packedFlagLabel.innerHTML = 'Packed';
    packedFlagLabel.classList.add('packing-item-row-segment')
    newItemRow.appendChild(packedFlagLabel);
    packedFlagLabel.appendChild(packedFlag);

    packedFlag.addEventListener('click', function () {
        newItemRow.classList.toggle('packed');
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    deleteBtn.classList.add('packing-item-row-segment')
    deleteBtn.classList.add('delete-btn');
    newItemRow.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        newItemRow.style.display = 'none';
    });

    document.querySelector('.packing-list-item').value = '';
}

export { addPackingItem }