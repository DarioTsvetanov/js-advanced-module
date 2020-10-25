function solve() {

    let allButtons = document.querySelectorAll('.keys button');

    const expression = document.querySelector('#expressionOutput');

    const resultOutput = document.querySelector('#resultOutput');

    const clear = document.querySelector('.clear');

    let buttons = Array.from(allButtons);

    buttons.forEach(el => el.addEventListener('click', (e) => {

        console.log(e.target.textContent);

        if (e.target.textContent == '=') {

            let array = expression.textContent.split(' ');
            
            const [numOne, operand, numTwo] = array;
 
            if (!numTwo) {
                
                resultOutput.textContent = 'NaN';

                return;
            }

            let result = 0;

            if (operand == '/') result = Number(numOne) / Number(numTwo);
            else if (operand == '+') result = Number(numOne) + Number(numTwo);
            else if (operand == '-') result = Number(numOne) - Number(numTwo);
            else if (operand == 'x') result = Number(numOne) * Number(numTwo);

            resultOutput.textContent = result;
        }
        else if (e.target.textContent == '/' || e.target.textContent == 'x' ||
                e.target.textContent == '-' || e.target.textContent == '+') {

            expression.textContent += ` ${e.target.textContent} `;
        }
        else {

            if (e.target.textContent == '.') expression.textContent += `${e.target.textContent}`;
            else expression.textContent += `${Number(e.target.textContent)}`;
        }
    }))

    clear.addEventListener('click', () => {

        expression.textContent = '';

        resultOutput.textContent = '';
    })
}