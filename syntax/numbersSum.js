function solve(numOne, numTwo) {

    let sum = 0;

    for (let i = Number(numOne); i <= Number(numTwo); i ++) {

        sum += i;
    }

    console.log(sum);
}
solve(-8, 20);