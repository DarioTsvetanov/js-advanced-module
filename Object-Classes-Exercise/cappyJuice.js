function solve(input) {

    let juices = {};

    let bottles = {};

    for (let line of input) {
    
        let [fruit, quantity] = line.split(' => ');

        quantity = Number(quantity);

        if (juices[fruit]) {

            juices[fruit] += quantity;

            if (juices[fruit] >= 1000) bottles[fruit] = quantity;
        }
        else {

            juices[fruit] = quantity;

            if (juices[fruit] >= 1000) bottles[fruit] = quantity;
        }
    }

    for (let key in bottles) {

        console.log(`${key} => ${Math.floor(juices[key] / 1000)}`);
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])