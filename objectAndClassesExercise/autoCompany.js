function solve(input) {

    let cars = {};

    for (let line of input) {
    
        let [brand, model, quantity] = line.split(' | ');

        quantity = Number(quantity);

        if (!cars[brand]) {

            cars[brand] = [{

                model,
                quantity
            }];
        }
        else {

            let seachedCarByModel = cars[brand].find(obj => obj.model == model);

            if (!seachedCarByModel) {

                cars[brand].push({

                    model,
                    quantity
                });
            }
            else seachedCarByModel.quantity += quantity;
        }
    }

    for (let key in cars) {

        console.log(key); 

        for (let car of cars[key]) {

            console.log(` ###${car.model} -> ${car.quantity}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])