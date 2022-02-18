class VegetableStore {

    constructor(owner, location) {

        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

    }

    loadingVegetables(vegetables) {

        let currentProducts = [];
        for (let vegetable of vegetables) {

            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let currentVegatable = this.availableProducts.find(x => x.type == type)
            if (!currentVegatable) {

                let currentProduct = {
                    type,
                    quantity,
                    price,
                }
                currentProducts.push(type);
                this.availableProducts.push(currentProduct);

            } else {

                currentVegatable.quantity += quantity;
                if (price > currentVegatable.price) {

                    currentVegatable.price = price;
                }
            }
        }
        return `Successfully added ${currentProducts.join(', ')}`

    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            let currentProduct = this.availableProducts.find(x => x.type == type)
            if (!currentProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > currentProduct.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += currentProduct.price * quantity;
            currentProduct.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let currentProduct = this.availableProducts.find(x => x.type == type)

        if (!currentProduct) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (currentProduct.quantity < quantity) {
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;

        }
        currentProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        this.availableProducts.sort((a, b) => a.price - b.price)
        let result = '';
        result += "Available vegetables:\n"
        this.availableProducts.forEach(x => result += `${x.type}-${x.quantity}-$${x.price}\n`)
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result.trimEnd();

    }

}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



