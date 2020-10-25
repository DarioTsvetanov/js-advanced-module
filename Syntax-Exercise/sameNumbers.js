function solve(number) {

    let sum = 0;

    let string = number.toString();

    let current;

    let previous;

    let isSame = true;

    for (let i = 0; i < string.length; i ++) {

        sum += Number(string[i]);

        if (i == 0) continue;

        current = string[i];

        previous = string[i - 1];

        if (current !== previous) isSame = false;
    }

    console.log(isSame);

    console.log(sum);
}
solve(1234)