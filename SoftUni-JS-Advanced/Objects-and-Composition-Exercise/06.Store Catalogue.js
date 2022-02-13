function storeCatalogue(arr = []) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let result = [];
    for (let element of sortedArr) {
        let [name, price] = element.split(' : ');
        result.push({
            name,
            price,
        });
    }
    let char;
    for (let obj of result) {
        if (char != obj.name[0]) {
            char = obj.name[0];
            console.log(char);
        }
        console.log(`  ${obj.name}: ${obj.price}`);
    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);