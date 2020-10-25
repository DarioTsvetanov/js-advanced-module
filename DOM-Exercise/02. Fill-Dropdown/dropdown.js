function addItem() {

    let textFromInput = document.querySelector('#newItemText');

    let valueFromInput = document.querySelector('#newItemValue');

    let selectMenu = document.querySelector('#menu');

    let newOption = document.createElement('option');

    newOption.textContent = textFromInput.value;

    newOption.value = valueFromInput.value;

    selectMenu.appendChild(newOption);

    textFromInput.value = '';

    valueFromInput.value = '';
}