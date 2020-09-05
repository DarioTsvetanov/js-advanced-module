function solve(input) {

    let evenPositionElements = [];

    for (let i = 0; i < input.length; i ++) {

        if (i % 2 == 0) evenPositionElements.push(input[i]);
    }

    console.log(evenPositionElements.join(' '));
}
solve(['20', '30', '40']);