function solve() {

    return function(input) {

        for (let line of input) {

            line = line.split(' ');

            if (line.length == 2 && line[0] == 'create') {

            }
            else if (line[2] == 'inherits') {

                let child = line[1];

                let parent = linep[3];

                class child extends parent{

                }
                
                return child
            }
        }
    }
}

let result = solve();
result(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])