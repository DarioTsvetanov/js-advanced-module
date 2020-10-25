function solve(input) {

    let towns = {};

    for (let line of input) {
    
        let [name, population] = line.split(' <-> ');

        population = Number(population);

        if (towns[name]) towns[name] += population;
        else towns[name] = population;
    }

    for (const key in towns) {
        
        console.log(`${key} : ${towns[key]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])