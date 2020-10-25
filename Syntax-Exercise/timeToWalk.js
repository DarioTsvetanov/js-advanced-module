function solve(stepsNeeded, footprintLength, speed) {

    let meters = stepsNeeded * footprintLength;

    let speedInMeters = speed / 3.6;

    let timeSec = (meters / speedInMeters);

    let rest = Math.floor(meters / 500);

    let minutes = Math.floor((timeSec / 60));

    let seconds = Math.round(timeSec - ((minutes) * 60));
    
    let hours = Math.floor(timeSec / 3600);

    minutes += rest;

    if (hours < 10) {

        if (minutes < 10) {

            if (seconds < 10) {

                console.log(`0${hours}:0${minutes}:0${seconds}`);
                
                return;
            }

            console.log(`0${hours}:0${minutes}:${seconds}`);

            return;
        }

        console.log(`0${hours}:${minutes}:${seconds}`);
    }
    else {

        if (minutes < 10) {

            if (seconds < 10) {

                console.log(`${hours}:0${minutes}:0${seconds}`);
                
                return;
            }

            console.log(`${hours}:0${minutes}:${seconds}`);

            return;
        }

        console.log(`${hours}:${minutes}:${seconds}`);
    }
}
solve(2564, 0.70, 5.5);