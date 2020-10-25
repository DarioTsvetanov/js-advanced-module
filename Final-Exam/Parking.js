class Parking {

    constructor(capacity) {

        this.capacity = capacity;
        this.vehicles = [];
        this.numberOfCars = 0;
    }

    addCar(carModel, carNumber) {

        if (this.numberOfCars == this.capacity) throw new Error('Not enough parking space.');

        this.vehicles.push({
            carModel,
            carNumber,
            payed: 'false'
        });

        this.numberOfCars ++;

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {

        let car = this.vehicles.find(obj => obj.carNumber == carNumber);

        if (!car) throw new Error(`The car, you're looking for, is not found.`);

        if (car.payed == 'false') throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);

        this.vehicles.splice(this.vehicles.indexOf(car), 1);

        this.numberOfCars --;

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {

        let car = this.vehicles.find(obj => obj.carNumber == carNumber);

        if (!car) throw new Error(`${carNumber} is not in the parking lot.`);

        if (car.payed == 'true') throw new Error(`${carNumber}'s driver has already payed his ticket.`);

        car.payed = 'true';

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {

        if (!carNumber) {

            let output = [`The Parking Lot has ${this.capacity - this.numberOfCars} empty spots left.`];

            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

            this.vehicles.forEach(el => {

                if (el.payed == 'false') output.push(`${el.carModel} == ${el.carNumber} - Not payed`);
                else if (el.payed == 'true') output.push(`${el.carModel} == ${el.carNumber} - Has payed`);
            });

            return output.join('\n');
        }
        else {

            let car = this.vehicles.find(obj => obj.carNumber == carNumber);

            if (car.payed == 'false') return `${car.carModel} == ${car.carNumber} - Not payed`;
            else return `${el.carModel} == ${el.carNumber} - Has payed`;
        }
    }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics('TX3691CA'));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));