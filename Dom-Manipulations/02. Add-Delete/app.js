function addItem() {
    
    const inputText = document.querySelector('#newText');

    const listElement = document.querySelector('#items');

    const newListElement = document.createElement('li');

    const deleteElement = document.createElement('a');

    deleteElement.textContent += '[Delete]';

    deleteElement.setAttribute('href', '#');

    newListElement.textContent = `${inputText.value} `;

    newListElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', (e) => {

        newListElement.remove();
    });

    listElement.appendChild(newListElement);
}