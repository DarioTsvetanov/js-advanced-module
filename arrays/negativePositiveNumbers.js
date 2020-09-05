function solve(input) {

    let sorted = [];

    for (let i = 0; i < input.length; i ++) {

        if (Number(input[i]) >= 0) sorted.push(input[i])
        else sorted.unshift(input[i]);
    }

    for (let number of sorted) {
        
        console.log(number);
    }
}