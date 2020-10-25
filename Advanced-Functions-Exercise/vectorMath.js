result = {

    add: ([x1, y1], [x2, y2]) => [(x1 + x2), (y1 + y2)],

    multiply: ([x1, y1], num) => [(x1 * num), (y1 * num)],

    length: ([x1, y1]) => Math.sqrt(x1 ** 2 + y1 ** 2),

    dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,

    cross: ([x1, y1], [x2, y2]) => (x1 * y2) - (y1 * x2)
};

console.log(result.dot([2, 3], [2, -1]))

