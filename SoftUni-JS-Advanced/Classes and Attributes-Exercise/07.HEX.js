class Hex {

    constructor(value) {
        this.number = value;
    }

    valueOf() {
        return this.number;
    }

    toString() {
        return '0x' + `${this.number.toString(16).toUpperCase()}`
    }

    plus(input) {
        if (typeof input == 'object') {
            return new Hex(input.number + this.number)
        } else {
            return new Hex(input + this.number)
        }
    }

    minus(input) {
        if (typeof input == 'object') {
            return new Hex(Math.abs(input.number - this.number))
        } else {
            return new Hex(Math.abs(input - this.number))
        }
    }

    parse(string) {
        return parseInt(string, 16);
    }


}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));