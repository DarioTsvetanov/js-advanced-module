function solve() {
    
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const ageInput = document.querySelector('input[placeholder="Age"]');
    const kindInput = document.querySelector('input[placeholder="Kind"]');
    const currentOwnerInput = document.querySelector('input[placeholder="Current Owner"]');
    const addButton = document.querySelector('#container button');
    const adoptionSection = document.querySelector('#adoption');
    const adoptedSection = document.querySelector('#adopted');
    const adoptionSectionUl = adoptionSection.querySelector('ul');

    addButton.addEventListener('click', (e) => {

        e.preventDefault();
        
        if (nameInput.value == '' || ageInput.value == '' || 
            kindInput.value == '' || currentOwnerInput.value == '' ||
            isNaN(ageInput.value)) {

            return;
        }

        const newLi = document.createElement('li');
        const newParagraph = document.createElement('p');
        const newSpan = document.createElement('span');
        const button = document.createElement('button');

        newParagraph.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;

        newSpan.textContent = `Owner: ${currentOwnerInput.value}`;

        button.textContent = 'Contact with owner';

        newLi.appendChild(newParagraph);
        newLi.appendChild(newSpan);
        newLi.appendChild(button);

        adoptionSectionUl.appendChild(newLi);

        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        currentOwnerInput.value = '';
    });

    adoptionSection.addEventListener('click', (e) => {
        // throw new Error(document.body.innerHTML);
        if (e.target.tagName !== 'BUTTON') return;

        if (e.target.textContent == 'Contact with owner') {

            const div = document.createElement('div');

            const input = document.createElement('input');
            input.setAttribute("type", "text");
            input.placeholder = 'Enter your names';
            div.appendChild(input);

            const button = document.createElement('button');
            button.textContent = 'Yes! I take it!';
            div.appendChild(button);
            console.log(e.target);
            const closestLi = e.target.parentElement;
            closestLi.appendChild(div);
            e.target.remove();
            // console.log(closestLi.innerHTML);
        }
        else if (e.target.textContent == 'Yes! I take it!' && e.target.previousSibling.value !== '') {

            const newButton = document.createElement('button');
            newButton.textContent = 'Checked';

            e.target.parentElement.parentElement.querySelector('span').textContent = `New Owner:${e.target.previousSibling.value}`;

            const closestDiv = e.target.parentElement;
            closestDiv.parentElement.replaceChild(newButton, closestDiv);
            
            newButton.parentElement.remove();

            adoptedSection.appendChild(newButton.parentElement);
        }
    }); 

    adoptedSection.addEventListener('click', (e) => {

        if (e.target.tagName !== 'BUTTON') return;

        e.target.parentElement.remove();
    });
}

