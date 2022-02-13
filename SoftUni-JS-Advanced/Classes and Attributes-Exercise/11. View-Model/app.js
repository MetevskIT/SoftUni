class Textbox {
    constructor(selector, regex) {
        this._value;
        this._elements=document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }
    get value() {
        return this._value;
    }

    set value(input) {
        Array.from(this._elements).forEach(x => {
            x._value = input;
        })
        this._value = input;
    }

    get elements() {
        return this._elements;
    }

    isValid(){
        if (this.value.match(this._invalidSymbols)) {
            return false;
        }
        return true;
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
