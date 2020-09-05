function solve(string) {

    let output = 'error';

    if (string == 'Monday') output = 1;
    else if (string == 'Tuesday') output = 2;
    else if (string == 'Wednesday') output = 3;
    else if (string == 'Thursday') output = 4;
    else if (string == 'Friday') output = 5;
    else if (string == 'Saturday') output = 6;
    else if (string == 'Sunday') output = 7;

    console.log(output);
}
solve('Monday')