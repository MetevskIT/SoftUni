function lowestPrices(arr = []) {
    let result = [];
    for (const item of arr) {
        let currArr = item.split(' | ');
        let townName = currArr[0];
        let productName = currArr[1];
        let price = Number(currArr[2]);
        let currObj = {
            townName,
            productName,
            price,
        }
        if (!result.some(x => x.productName == productName)) {
            result.push(currObj)
        } else {
            let compareObj = result.find(x => x.productName == productName);
            if (price < compareObj.price) {
                compareObj.price = price;
                compareObj.townName = townName;
            }
        }
    }
    for (const product of result) {
        console.log(`${product.productName} -> ${product.price} (${product.townName})`);
    }



}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);