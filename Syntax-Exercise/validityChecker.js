function cordinatedSystem(arr) {

    let x1 = arr.shift();
    let y1 = arr.shift();
    let x2 = arr.shift();
    let y2 = arr.shift();

    let firstSpotCheck = (x1, y1, num) => {

        let distance = Math.sqrt(Math.pow((num - x1), 2) + Math.pow((num - y1), 2));

        return Math.trunc(distance) == distance ? true : false;
    };

    let firstDistance = firstSpotCheck(x1, y1, 0);
    firstDistance ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    

    let secondSpotCheck = (x2, y2, num) => {

        let distance = Math.sqrt(Math.pow((num - x2), 2) + Math.pow((num - y2), 2));

        return Math.trunc(distance) == distance ? true : false;
    };

    let secondDistance = secondSpotCheck(x2, y2, 0);
    secondDistance ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);


    let twoSpotDiff = (x1, y1, x2, y2) => {

        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        return Math.trunc(distance) == distance ? true : false;
    };

    let twoSpotDistance = twoSpotDiff(x1, y1, x2, y2);
    twoSpotDistance ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
cordinatedSystem([2, 1, 1, 1]);