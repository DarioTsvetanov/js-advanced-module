function solve(input) {

    let rightDiagonal = 0;

    let leftDiagonal = 0;

    for (let i = 0; i < input.length; i ++) {

        rightDiagonal += Number(input[i][i]);

        leftDiagonal += Number(input[i][input.length - i - 1]);
    }

    console.log(rightDiagonal, leftDiagonal);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])