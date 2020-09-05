function solve(numOne, numTwo, operator) {

    let sum;

    if (operator == '+') sum = numOne + numTwo;
    else if (operator == '-') sum = numOne - numTwo;
    else if (operator == '*') sum = numOne * numTwo;
    else if (operator == '/') sum = numOne / numTwo;
    else if (operator == '%') sum = numOne % numTwo;
    else if (operator == '**') sum = numOne ** numTwo;

    console.log(sum);
}
solve();