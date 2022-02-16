class ChristmasDinner {

    constructor(budget) {
        
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests ={} ;
    }
    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
      
        this._budget = value;
    }

    shopping(product) {
        
        let [type, price] = [...product];
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`
    }

    recipes(recipe) {

      recipe['productsList'].forEach(x => {
            if (!this.products.some(c=>c==x)) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push({ recipeName: recipe['recipeName'], productsList: recipe['productsList'] })
        return `${recipe['recipeName']} has been successfully cooked!`;
    }

    inviteGuests(guestName, dish) {

        if (!this.dishes.some(x => x.recipeName == dish)) {
            throw new Error("We do not have this dish");
        }
        if (this.guests[guestName]) {
            throw new Error('This guest has already been invited');
        }
        this.guests[guestName]=dish;
        return `You have successfully invited ${guestName}!`
    }

    showAttendance() {
        let result = '';
        
      for (const key in this.guests) {
        result += `${key} will eat ${this.guests[key]}, which consists of ${Array.from(this.dishes.find(c => c.recipeName == this.guests[key]).productsList).join(', ')}\n`;
      }
           
        return result.trimEnd();
    }


}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.showAttendance());