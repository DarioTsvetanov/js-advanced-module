function solve() {
    
    const onScreenButton = document.querySelectorAll('button')[0];
    const nameInput = document.querySelectorAll('input')[0];
    const hallInput = document.querySelectorAll('input')[1];
    const ticketPriceInput = document.querySelectorAll('input')[2];

    const moviesSectionUl = document.querySelector('#movies > ul');
    const archiveSection = document.querySelector('#archive');

    onScreenButton.addEventListener('click', (e) => {

        e.preventDefault();

        if (nameInput.value == '' || hallInput.value == '' ||
        ticketPriceInput.value == '' || isNaN(ticketPriceInput.value)) return;

        const newLi = document.createElement('li');

        const movieName = document.createElement('span');
        movieName.textContent = nameInput.value;

        const strongHallName = document.createElement('strong');
        strongHallName.textContent = `Hall: ${hallInput.value}`;

        const newDiv = document.createElement('div');

        const strongTicketPrice = document.createElement('strong');
        let ticketPrice = Number(ticketPriceInput.value).toFixed(2);
        strongTicketPrice.textContent = ticketPrice;

        const ticketsSoldInput = document.createElement('input');
        ticketsSoldInput.placeholder = 'Tickets Sold';

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        newDiv.appendChild(strongTicketPrice)
        newDiv.appendChild(ticketsSoldInput)
        newDiv.appendChild(archiveButton);

        newLi.appendChild(movieName)
        newLi.appendChild(strongHallName)
        newLi.appendChild(newDiv);

        moviesSectionUl.appendChild(newLi);

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';
    });

    moviesSectionUl.addEventListener('click', (e) => {

        if (e.target.tagName !== 'BUTTON') return;

        const soldTicketsInput = e.target.previousSibling;

        if (isNaN(soldTicketsInput.value) || soldTicketsInput.value <= 0) return;

        const newLi = document.createElement('li');

        const movieName = document.createElement('span');
        movieName.textContent = e.target.parentElement.parentElement.querySelector('span').textContent;

        const totalAmountElement = document.createElement('strong');
        let ticketPrice = Number(soldTicketsInput.previousSibling.textContent);
        let totalAmount = (soldTicketsInput.value * ticketPrice).toFixed(2);
        totalAmountElement.textContent = `Total amount: ${totalAmount}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        newLi.appendChild(movieName);
        newLi.appendChild(totalAmountElement);
        newLi.appendChild(deleteButton);

        archiveSection.querySelector('ul').appendChild(newLi);
        
        e.target.parentElement.parentElement.remove();
    });

    archiveSection.addEventListener('click', (e) => {

        if (e.target.textContent == 'Delete') e.target.parentElement.remove();
        else if (e.target.textContent == 'Clear') {
            
            let listElements = Array.from(e.target.parentElement.querySelectorAll('li'));
            
            listElements.forEach(el => el.remove());
        }
    });
}