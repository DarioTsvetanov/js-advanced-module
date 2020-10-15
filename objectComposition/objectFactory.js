function solve(input) {

    input = JSON.parse(input);

    let output = input.reduce((acc, curr) => {

        return {...acc, ...curr}
    }, {});

    console.log(output);

    /* let result = {};

    for (let obj of input) {

        for (let key in obj) {

            if (!result.key) result[key] = obj[key];
        }
    }

    console.log(result); */
}
solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`)