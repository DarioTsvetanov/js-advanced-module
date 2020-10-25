function solve(input) {

    let sum = 0;

    for (let i = 0; i < input.length; i ++) {

        let cell = input[i];

        let currentCellSum = cell.reduce((a, b) => a + b, 0);

        if (i == 0) sum = currentCellSum;

        if (sum !== currentCellSum) {

            console.log('false');

            return;
        }
    }

    for (let i = 0; i < input.length; i ++) {

        let currentColumnSum = 0;

        let counter = 0;

        while (counter < input.length) {

            if (counter == input.length) break;

            currentColumnSum += Number(input[counter][i]);

            counter ++;
        }

        if (currentColumnSum !== sum) {

            console.log('false');

            return;
        }
    }

    console.log('true');
}
solve([[1, 1, 1],
    [1, 1, 1],
    [1, 0, 2]]);