function solve(numOne, numTwo, numThree) {

    let array = [numOne, numTwo, numThree];

    let biggestNum = Math.max(...array);

    console.log(`The largest number is ${biggestNum}.`);
}
solve(1, 22, 3);