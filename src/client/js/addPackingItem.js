document.querySelector('.packing-list-btn').addEventListener('click', addPackingItem);

function addPackingItem(event) {
    event.preventDefault();

    let newItemRow = document.createElement('div');
    newItemRow.classList.add('packing-list-row');
    document.querySelector('.packing-list').appendChild(newItemRow)

    let newItemValue = document.createElement('div');
    newItemValue.innerHTML = document.querySelector('.packing-list-item').value;
    newItemRow.appendChild(newItemValue);

    let newItemCategory = document.createElement('div');
    newItemCategory.innerHTML = document.querySelector('.packing-item-category').value;
    newItemRow.appendChild(newItemCategory);

    let packedFlag = document.createElement('input');
    packedFlag.setAttribute('type', 'checkbox');
    let packedFlagLabel = document.createElement('label');
    packedFlagLabel.innerHTML = 'Packed';
    newItemRow.appendChild(packedFlagLabel);
    packedFlagLabel.appendChild(packedFlag);


    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    deleteBtn.classList.add('delete-btn');
    newItemRow.appendChild(deleteBtn);

    document.querySelector('.packing-list-item').value = '';
}

export { addPackingItem }