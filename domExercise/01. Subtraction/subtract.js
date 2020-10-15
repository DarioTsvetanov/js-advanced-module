function subtract() {
    
    let firstNumber = document.querySelector('#firstNumber').value;

    let secondNumber = document.querySelector('#secondNumber').value;

    let diff = Number(firstNumber) - Number(secondNumber);

    let newDiv = document.createElement('div');

    newDiv.innerHTML = diff;

    let resultDiv = document.querySelector('#result');

    resultDiv.appendChild(newDiv);
}