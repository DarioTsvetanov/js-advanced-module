function solve(fruit, weight, kiloPrice) {

    let kilos = (weight / 1000); 

    let money = kilos * kiloPrice;

    console.log(`I need $${money.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);