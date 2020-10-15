function solution() {

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function(instr) {

        instr = instr.split(' ');

        let cmd = instr[0];

        let quantity = Number(instr[2]);

        if (cmd == 'restock') {

            storage[instr[1]] += quantity;

            return 'Success';
        }
        else if (cmd == 'prepare') {

            let recipe = instr[1];

            if (recipe == 'apple') {

                if (storage.carbohydrate < (1 * quantity)) return `Error: not enough carbohydrate in stock`;

                if (storage.flavour < (2 * quantity)) return `Error: not enough flavour in stock`;

                storage.carbohydrate -= (1 * quantity);

                storage.flavour -= (2 * quantity);
            }
            else if (recipe == 'lemonade') {

                if (storage.carbohydrate < (10 * quantity)) return `Error: not enough carbohydrate in stock`;

                if (storage.flavour < (20 * quantity)) return `Error: not enough flavour in stock`;
                
                storage.carbohydrate -= (10 * quantity);

                storage.flavour -= (20 * quantity);
            }
            else if (recipe == 'burger') {
                
                if (storage.carbohydrate < (5 * quantity)) return `Error: not enough carbohydrate in stock`;
                
                if (storage.fat < (7 * quantity)) return `Error: not enough fat in stock`;

                if (storage.flavour < (3 * quantity)) return `Error: not enough flavour in stock`;

                storage.carbohydrate -= (5 * quantity);

                storage.fat -= (7 * quantity);

                storage.flavour -= (3 * quantity);
            }
            else if (recipe == 'eggs') {

                if (storage.protein < (5 * quantity)) return `Error: not enough protein in stock`;

                if (storage.fat < (1 * quantity)) return `Error: not enough fat in stock`;

                if (storage.flavour < (1 * quantity)) return `Error: not enough flavour in stock`;

                storage.protein -= (5 * quantity);

                storage.fat -= (1 * quantity);

                storage.flavour -= (1 * quantity);
            }
            else if (recipe == 'turkey') {

                if (storage.protein < (10 * quantity)) return `Error: not enough protein in stock`;

                if (storage.carbohydrate < (10 * quantity)) return `Error: not enough carbohydrate in stock`;

                if (storage.fat < (10 * quantity)) return `Error: not enough fat in stock`;

                if (storage.flavour < (10 * quantity)) return `Error: not enough flavour in stock`;

                storage.protein -= (10 * quantity);

                storage.carbohydrate -= (10 * quantity);

                storage.fat -= (10 * quantity);

                storage.flavour -= (10 * quantity);
            }

            return 'Success';
        }
        else if (cmd == 'report') {

            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }
}
let manager = solution();
manager('restock protein 100');
manager('restock fat 100');
manager('restock carbohydrate 100');
manager('restock flavour 100');
manager('prepare ap')