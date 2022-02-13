function solve(array = []) {

    array.sort((a, b) => a.length - b.length || a.localeCompare(b))
    for (let el of array) {
        console.log(el);
    }

}
solve(['alpha',
    'beta',
    'gamma']);