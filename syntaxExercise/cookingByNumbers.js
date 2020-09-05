function solve(input) {

    let number = Number(input.shift());

    while (true) {

        let command = input.shift();

        if (!command || number < 0) break;

        if (command == 'chop') number /= 2;
        else if (command == 'dice') number = Math.sqrt(number);
        else if (command == 'spice') number ++;
        else if (command == 'bake') number *= 3;
        else if (command == 'fillet') number -= (number * 0.2);

        console.log(number);
    }
}
// solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
// solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])