function solve() {

    const numberInput = document.querySelector('#input');

    const selectMenu = document.querySelector('#selectMenuTo');

    const binaryOption = document.createElement('option');

    const convert = document.querySelector('button');

    const result = document.querySelector('#result');

    binaryOption.textContent = 'Binary';

    binaryOption.setAttribute('value', 'binary');

    selectMenu.appendChild(binaryOption);

    const hexOption = document.createElement('option');

    hexOption.textContent = 'Hexadecimal';

    hexOption.setAttribute('value', 'hexadecimal');

    selectMenu.appendChild(hexOption);

    convert.addEventListener('click', () => {

        let output;

        if (selectMenu.value == 'binary') output = convertToBinary(Number(numberInput.value));
        else if (selectMenu.value == 'hexadecimal') output = convertToHex(Number(numberInput.value));

        result.value = output;
    });

    function convertToBinary(num) {
    
        return num.toString(2);
    }

    function convertToHex(num) {

        hexString = num.toString(16);

        return hexString.toUpperCase();
    }
} 