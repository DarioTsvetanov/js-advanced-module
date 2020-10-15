function solution(firstNum) {

    return function(addition) {

        return firstNum + addition;
    }
}

let add5 = solution(5);
console.log(add5(3));