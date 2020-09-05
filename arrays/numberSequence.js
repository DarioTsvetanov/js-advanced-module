function solve(n, k) {

    let sequence = [1];

    for (let i = 1; i < n; i ++) {

        let sum = 0;

        let diff = i - k;

        if (diff < 0) diff = 0;

        sum = sequence.slice(diff, i).reduce((a, b) => a + b, 0);

        sequence[i] = sum;
    }

    console.log(sequence.join(' '));
}
solve(8, 2)