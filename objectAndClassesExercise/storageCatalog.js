function solve(input) {

    let products = [];

    for (let product of input) {
        
        let [name, price] = product.split(' : ');

        price = Number(price);

        products.push({
            name,
            price
        });
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let lastUpperCase = '';

    for (let product of products) {
    
        if (product.name[0] !== lastUpperCase) {

            lastUpperCase = product.name[0];

            console.log(lastUpperCase);
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}

/* solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']); */
solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])