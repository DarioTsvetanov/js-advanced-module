function solve() {

    document.querySelector('button')
    .addEventListener('click', () => {

        let nameInput = document.getElementsByTagName('input')[0];

        let nameInputValue = nameInput.value.toLowerCase();

        let firstLetterAscii = (nameInputValue.charCodeAt(0)) - 65;
        
        if (firstLetterAscii > 26) firstLetterAscii -= 32;
        
        let alphabetList = document.querySelectorAll('li')[firstLetterAscii];

        nameInputValue = nameInputValue.charAt(0).toUpperCase() + nameInputValue.slice(1);

        if (alphabetList.textContent !== '' ) {

            alphabetList.textContent += `, ${nameInputValue}`;
        }
        else alphabetList.textContent = nameInputValue;

        nameInput.value = '';
    });
}