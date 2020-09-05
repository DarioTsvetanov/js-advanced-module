function solve(input) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let array of input) {
    
        for (let number of array) {
        
            if (number > biggestNumber) biggestNumber = number;     
        }
    }

    console.log(biggestNumber);
}
solve([[20, 50, 10],
    [8, 33, 145]])