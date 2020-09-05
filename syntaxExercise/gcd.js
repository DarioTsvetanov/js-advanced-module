function solve(numOne, numTwo) {

    let biggestDivisor = 1;

    let biggerNumber = numOne;

    if (numOne < numTwo) biggerNumber = numTwo;

    for (let i = 1; i < biggerNumber; i ++) {

        if (numOne % i == 0 && numTwo % i == 0) biggestDivisor = i;
    }
    
    console.log(biggestDivisor);
}
solve(2154, 458)