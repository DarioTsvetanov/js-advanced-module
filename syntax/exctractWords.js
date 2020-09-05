function solve(input) {

    let pattern = /[\w]+/g;

    let result = input.match(pattern);
    
    console.log(result.join(', ').toUpperCase());
}

solve('Hi');