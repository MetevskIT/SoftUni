function subSum(arr = [], startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, arr.length - 1)
    arr = arr.slice(start, end + 1).map(Number).reduce((a, x) => {
        return a + x;
    }, 0)

    return arr;

}
console.log(subSum([10, 'twenty', 30, 40], 0, 2));