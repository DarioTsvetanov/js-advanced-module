function solve(input) {

    let numbers = [];

    for (let i = input.length - 1; i > 0; i --) {

        if (i % 2 !== 0) {

            numbers.push(input[i] * 2);
        }
    }

    console.log(numbers.join(' '));
}
solve([3, 0, 10, 4, 7, 3])