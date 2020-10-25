function solve(input) {

    input.shift();

    let towns = [];

    for (let line of input) {

        line = line.split('|');

        line[1] = line[1].substring(1, line[1].length - 1)

        line[2] = Number(line[2]).toFixed(2);

        line[3] = Number(line[3]).toFixed(2);

        towns.push({
            ['Town']: line[1],
            ['Latitude']: Number(line[2]),
            ['Longitude']: Number(line[3])
        })
    }

    console.log(JSON.stringify(towns));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])