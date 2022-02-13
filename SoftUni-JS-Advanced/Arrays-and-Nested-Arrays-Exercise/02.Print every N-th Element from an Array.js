function NthElement(array, num) {
    let arr = [];
    for (let i = 0; i < array.length; i += num) {

        arr.push(array[i])
    }
    return arr;
}
console.log(NthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2));