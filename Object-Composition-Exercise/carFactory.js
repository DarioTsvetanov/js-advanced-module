function solve(requirements) {

    let {model, power, color, carriage, wheelsize} = requirements;

    let car = {model};

    if (power <= 90) {

        car.engine = {
            power: 90,
            volume: 1800
        }
    }
    else if (power <= 120) {

        car.engine = {
            power: 120,
            volume: 2400
        }
    }
    else if (power <= 200) {

        car.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (carriage == 'hatchback') {

        car.carriage = {
            type: 'hatchback',
            color
        }
    }
    else if (carriage == 'coupe') {

        car.carriage = {
            type: 'coupe',
            color
        }
    }

    let size = wheelsize % 2 !== 0 ? wheelsize : wheelsize - 1;

    car.wheels = [size, size, size, size];
    
    return car;
}
solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })