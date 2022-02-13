function extract(array) {
    let currentEl = 0;

    let result = array.reduce((acc, x) => {
        if (x >= currentEl) {
            currentEl = x;
            acc.push(x);
        }
        return acc;
    }, []);
    return result;
}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));