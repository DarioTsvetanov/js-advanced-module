function solve(input) {

    let dashboard = [['false', 'false', 'false'], ['false', 'false', 'false'], ['false', 'false', 'false']];

    let playerCounter = 0;

    let winner = '';

    let player = '';

    for (let line of input) {
    
        let [row, pos] = line.split(' ').map(Number);

        player = playerCounter % 2 == 0 ? 'X':'O';
        
        if (!dashboard[0].includes('false') && !dashboard[1].includes('false') && !dashboard[2].includes('false')) break;

        if (dashboard[row][pos] == 'false') {

            dashboard[row][pos] = player;

            playerCounter ++;
        }
        else {

            console.log('This place is already taken. Please choose another!');

            continue;
        }

        let isFound = false;

        for (let i = 0; i < dashboard.length; i ++) {

            if ((dashboard[i][0] == player && dashboard[i][1] == player && dashboard[i][2] == player) || 
                (dashboard[0][i] == player && dashboard[1][i] == player && dashboard[2][i] == player)) {    
                
                winner = player;

                isFound = true;

                break;
            }
        }
        
        if (isFound) break;

        if ((dashboard[0][0] == player && dashboard[1][1] == player && dashboard[2][2] == player) ||
            (dashboard[0][2] == player && dashboard[1][1] == player && dashboard[2][0] == player)) {
                
            winner = player;

            break;
        }
    }

    if (winner == 'O' || winner == 'X') console.log(`Player ${winner} wins!`);
    else console.log('The game ended! Nobody wins :(');
    
    for (let row of dashboard) {
    
        console.log(row.join('\t'));
    }
}
/* solve([
"0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]) */

/* solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]) */

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"])