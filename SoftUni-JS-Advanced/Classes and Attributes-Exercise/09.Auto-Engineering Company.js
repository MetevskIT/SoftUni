function company(input = []) {

    let carBrands = new Map();

    for (let el of input) {
        let car = el.split(' | ');
        let brand = car[0];
        let model = car[1];
        let produced = Number(car[2]);

        if (!carBrands.has(brand)) {

            carBrands.set(brand, new Map());

        }
        if (!carBrands.get(brand).has(model)) {

            carBrands.get(brand).set(model, produced);

        } else {
            
            carBrands.get(brand).set(model, carBrands.get(brand).get(model) + produced);
        }
    }
    for (let [key, value] of carBrands) {
        console.log(key);
        for (let [model, produced] of value) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}

company(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']);