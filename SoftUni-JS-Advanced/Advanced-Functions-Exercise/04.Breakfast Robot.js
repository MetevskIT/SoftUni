function solution() {

    let recepts = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    };
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    function controller(commands) {
        let cmd = commands.split(' ');
        let func = cmd[0];
        let ingredient = cmd[1];
        let qty = Number(cmd[2]);
        switch (func) {
            case 'restock':
                return restock(ingredient, qty);
                break;
            case 'prepare':
                return prepare(ingredient, qty);
                break;
            case 'report':
                return report();
                break;

        }

    }
    function restock(microelement, quantity) {

        stock[microelement] += Number(quantity);
        return 'Success';

    }
    function prepare(recipe, quantity) {

        for (const key in recepts[recipe]) {
            if (recepts[recipe][key] * Number(quantity) > stock[key]) {
                return `Error: not enough ${key} in stock`;
            } 
        }
        for (const key in recepts[recipe]) {
            stock[key]-=recepts[recipe][key] * Number(quantity);
        }
        return "Success";

    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }
    
    return controller;

}


let manager = solution();
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare apple 1")); // Success 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Success 
console.log(manager("report")); // Error: not enough carbohydrate in stock 

