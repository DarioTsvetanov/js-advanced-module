function solve(input) {

    let list = [];

    function innerFunction() {

        return {

            add: text => list.push(text),
            remove: text => list = list.filter(x => x !== text),
            print: () => console.log(list.join())
        }
    }  

    let calling = innerFunction();

    input.forEach((x => {
        let [cmd, text] = x.split(' ');

        calling[cmd](text)
    }));
}