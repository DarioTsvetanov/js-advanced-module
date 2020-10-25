function solve(input) {

    let positions = [];

    let sum = 0;

    input = input.map(el => el.split(' ').map(Number))
    
    for (let i = 0; i < input.length; i ++) {

        sum += input[i][i];

        positions.push(`${i} ${i}`);

        positions.push(`${i} ${input.length - 1 - i}`);
    }

    for (let i = 0; i < input.length; i ++) {

        for (let j = 0; j < input[i].length; j ++) {

            if (!positions.includes(`${i} ${j}`)) input[i][j] = sum;
        }
    }

    for (let row of input) {
    
        console.log(row.join(' '));
    }
}

solve([
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'
])