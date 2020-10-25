class Hex {

    constructor(value) {

        this.value = value;
    }

    valueOf() {

        return this.value;
    }

    toString() {

        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(input) {

        /* if (typeof input == 'object') this.value += input.value;
        else this.value += input; */

        return new Hex(this.value + input);
    }

    minus(input) {

        /* if (typeof input == 'object') this.value -= input.value;
        else this.value -= Number(input); */

        return new Hex(this.value - input);
    }

    Parse(string) {

        return parseInt(string, 16);
    }
}   

let FF = new Hex(255);
let actual = FF.toString();
console.log(actual);
let expected = "0xFF";
 
let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();
console.log(a.plus(b).valueOf())
console.log(act)
let exp = "0xF";