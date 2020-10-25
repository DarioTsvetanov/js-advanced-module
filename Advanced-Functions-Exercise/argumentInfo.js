function solve() {

    let argumentTypes = {};

    for (let line of arguments) {

        if (!argumentTypes[typeof line]) argumentTypes[typeof line] = 0;

        console.log(`${typeof line}: ${line}`);

        argumentTypes[typeof line] ++;
    }

    let array = Object.entries(argumentTypes).sort((a, b) => b[1] - a[1]);

    for (let el of array) {

        console.log(`${el[0]} = ${el[1]}`);
    }
}
solve(42, 'cat', [], undefined);
// solve({ name: 'bob'}, 3.333, 9.999)