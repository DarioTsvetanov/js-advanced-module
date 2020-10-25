function solve(input) {

    let heroes = [];

    for (let line of input) {
    
        let [name, level, ...items] = line.split(' / ');
        
        level = Number(level);

        // items = items ? items[0].split(', ') : [];

        if (items.length > 0) items = items[0].split(', ');

        heroes.push({

            name: name,
            level: level,
            items: items
        });
    }

    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])