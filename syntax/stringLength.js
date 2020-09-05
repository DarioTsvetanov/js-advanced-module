function solve(firstArg, secondArg, thirdArg) {

    let array = [firstArg, secondArg, thirdArg];

    let sum = 0;

    for (let el of array) {
        
        sum += el.length;
    }

    let avrgSum = sum / 3;

    console.log(sum);

    console.log(Math.floor(avrgSum));
}

solve('chocolate', 'ice cream', 'cake');