function solve(input) {

    let index = 1;

    let numbers = [];

    for (let cmd of input) {
    
        if (cmd == 'add') numbers.push(index);
        else if (cmd == 'remove') numbers.pop();

        index ++;
    }

    if (numbers.length == 0) console.log('Empty');
    else console.log(numbers.join('\n'));
}
solve(['remove', 
'remove', 
'remove'])