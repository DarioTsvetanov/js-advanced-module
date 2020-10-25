function addItem() {
    
    const textInput = document.querySelector('#newItemText');

    const list = document.querySelector('ul');

    const newItem = document.createElement('li');

    newItem.textContent = textInput.value;

    list.appendChild(newItem);

    textInput.value = '';
}