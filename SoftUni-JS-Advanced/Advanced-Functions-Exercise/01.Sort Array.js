function sortArray(arr = [], argument) {
    if (argument == 'asc') {
        arr.sort(function (a, b) { return a - b });
    } else {
        arr.sort(function (a, b) { return b - a });
    }
    return arr;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));