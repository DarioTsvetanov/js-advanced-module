function solution() {

    let innerString = '';

    return {

        append: (string) => innerString += string,
        
        removeStart: (n) => innerString = innerString.substring(n, innerString.length),

        removeEnd: (n) => innerString = innerString.substring(0, innerString.length - n),

        print: () => console.log(innerString)
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()