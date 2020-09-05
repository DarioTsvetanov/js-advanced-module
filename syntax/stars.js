function solve(number) {

    let result = '';

    for (let i = 0; i < number; i ++) {

        for (let j = 0; j < number; j ++) {

            if (j <= number - 1) result += '* ';
        }

        if (i < number - 1) result += '\n';
    }

    console.log(result);
}
solve(5)