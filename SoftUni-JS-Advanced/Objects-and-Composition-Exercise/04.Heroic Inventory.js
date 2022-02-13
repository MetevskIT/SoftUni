function slove(arr = []) {
    let result = [];
    for (let element of arr) {
        let currArr = element.split(' / ');
        let name = currArr[0];
        let level = Number(currArr[1]);
        let items = currArr[2];
        items = (items) ? currArr[2].split(', ') : [];
        result.push({ name, level, items });
    }
    let jsonResult = JSON.stringify(result);
    console.log(jsonResult);
}
slove(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
