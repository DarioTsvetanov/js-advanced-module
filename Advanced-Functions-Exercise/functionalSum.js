function add(num) {

    function sum(a) {

        num += a;
console.log(num);
        return sum;
    }
    return sum;
}

add(1)(20)(10)