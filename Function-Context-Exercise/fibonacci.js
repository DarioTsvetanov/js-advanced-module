function getFibonator() {

    let array = [0, 1];

    let abort = true;

    return function() {

        if (abort) {

            abort = false;

            return 1;
        }

        let nextNumber = array[array.length - 1] + array[array.length - 2];
    
        array.push(array[array.length - 1] + array[array.length - 2]);

        return nextNumber;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());