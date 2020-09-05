function solve(input) {

    let output = '';

    output += '{ ';

    for (let i = 0; i < input.length; i += 2) {

        let foodName = input[i];

        let calories = input[i + 1];
        
        if (i == input.length - 2) output += `${foodName}: ${calories}`
        else output += `${foodName}: ${calories}, `;
    }

    output += ' }';

    console.log(output);
}
// solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);