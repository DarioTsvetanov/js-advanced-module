function solve(input) {

    let products = [];

    for (let line of input) {
    
        let [city, itemName, price] = line.split(' | ');
        price = Number(price);

        let searchedProduct = products.find(obj => obj.name == itemName);

        if (!searchedProduct) {

            products.push({
                name: itemName,
                cities: [city],
                price: price
            });
        }
        else {

            if (!searchedProduct.cities.includes(city)) {

                if (price < searchedProduct.price) {

                    searchedProduct.price = price;

                    searchedProduct.cities.push(city);
                }
            }
            else {

                searchedProduct.cities.push(city);

                searchedProduct.price = price;
            }
        }
    }

    for (let product of products) {
    
        console.log(`${product.name} -> ${product.price} (${product.cities[product.cities.length - 1]})`);
    }
}

function solve(array) {
    let products = new Map();
    for (let sentance of array) {
        let [town, product, price] = sentance.split(" | ");
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }
    for (let [key, value] of products) {
        let lowest = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        }));
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);