function solve(input) {

    let sum = 0;

    let inverse = 0;

    for (let number of input) {
        
        sum += number;
        inverse += 1 / number;
    }

    console.log(sum);
    console.log(inverse);
    console.log(input.join(''));
}
solve([2, 4, 8, 16]);