function solve(input) {

    let sequence = [];

    let firstNumber = Number(input.shift());

    sequence.push(firstNumber);

    for (let i = 0; i < input.length; i ++) {

        let last = sequence[sequence.length - 1];

        if (input[i] >= last) sequence.push(input[i]);
    }

    console.log(sequence.join('\n'));
}
