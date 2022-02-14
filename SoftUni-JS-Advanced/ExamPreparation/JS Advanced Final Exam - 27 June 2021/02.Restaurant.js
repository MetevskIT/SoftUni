class Restaurant {

    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(x => {
            let curr = x.split(' ');
            if (curr[2] <= this.budgetMoney) {
                if (!this.stockProducts[curr[0]]) {
                    this.stockProducts[curr[0]] = 0;
                }
                this.stockProducts[curr[0]] += Number(curr[1]);
                this.budgetMoney-=Number(curr[2]);
                this.history.push(`Successfully loaded ${curr[1]} ${curr[0]}`)
            } else {
                this.history.push(`There was not enough money to load ${curr[1]} ${curr[0]}`)
            }
        });
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {

        let products = []
        neededProducts.forEach(x => {

            let curr = x.split(' ');
            products.push([curr[0], Number(curr[1])]);

        })


        if (!this.menu[meal]) {
            this.menu[meal] = {
                products,
                price,
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

        let count = Object.keys(this.menu).length;
        if (count > 1) {
            return `Great idea! Now with the ${meal} we have ${count} meals in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
    }

    showTheMenu() {
        let count = Object.keys(this.menu).length;
        let result = '';
        if (count == 0) {
            return "Our menu is not ready yet, please come later...";
        }

        for (const key in this.menu) {
            result += `${key} - $ ${this.menu[key].price}\n`
        }
        return result.trimEnd();
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (const el of this.menu[meal].products) {

            if (this.stockProducts[el[0]] && this.stockProducts[el[0]] >= el[1]) {
                this.stockProducts[el[0]] -= el[1];
                this.budgetMoney += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }else{
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }


        }

    }

}
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
