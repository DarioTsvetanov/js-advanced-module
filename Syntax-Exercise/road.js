function solve(input) {

    let speed = Number(input.shift());

    let place = input.shift();

    let diff;

     if (place == 'motorway') {

        if (speed > 130) diff = speed - 130;
    }
    else if (place == 'interstate') {

        if (speed > 90) diff = speed - 90;
    }
    else if (place == 'residential') {

        if (speed > 20) diff = speed - 20;
    }
    else if (place == 'city') {

        if (speed > 50) diff = speed - 50;
    }

    if (diff > 0 && diff <= 20) console.log('speeding');
    else if (diff > 20 && diff <= 40) console.log('excessive speeding');
    else if (diff > 40) console.log('reckless driving');
}
solve()