function towns(arr = []) {
    let result = [];
    
    for (let i = 1; i < arr.length; i++) {
        let obj = {};
        let currArr = arr[i].split(' | ');
        let town = currArr[0].replace('| ', '')

        let firstPrice = Number(currArr[1]);
        let secondPrice = Number(currArr[2].replace(' |', ''));
        obj['Town'] = town;
        obj['Latitude'] = Number(firstPrice.toFixed(2));
        obj['Longitude'] = Number(secondPrice.toFixed(2));
        result.push(obj);

    }

    console.log(JSON.stringify(result));
}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);