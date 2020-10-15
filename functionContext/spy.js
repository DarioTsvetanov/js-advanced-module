let obj = {
    method:()=>"invoked"
}

function Spy(target, method) {

    let originalFunction = target[method];

    let result = {
        count: 0
    }

    target[method] = function() {

        result.count ++;
// console.log(this);
        return originalFunction.apply(target, arguments);
    }

    return result;
}

let spy = Spy(obj,"method");

obj.method(2, 3);
obj.method(4, 5);
obj.method(5, 6);

console.log(spy) // { count: 3 }
// console.log(obj.method());