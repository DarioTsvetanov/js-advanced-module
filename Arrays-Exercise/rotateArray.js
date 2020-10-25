function solve(input) {

    let rotations = Number(input.pop());

    if (rotations > 4) {

        rotations = rotations % 4;
    }

    for (let i = 0; i < rotations; i ++) {

        let el = input.pop();

        input.unshift(el);
    }

    console.log(input.join(' '));
}
solve(['1', 
'2', 
'3', 
'4', 
'201'])