function argumentInfo(...arguments) {

    let count = {};

    for (const argument of arguments) {
        if (typeof (argument) == "object") {
            console.log(`${typeof (argument)}:`);
        } else {
            console.log(`${typeof (argument)}: ${argument}`);
        }
        if (count[typeof (argument)] == undefined) {
            count[typeof (argument)] = 1;
        } else {
            count[typeof (argument)] += 1;
        }
    }
    let sortedCount= Object.fromEntries(Object.entries(count).sort(function (a, b) {
        return b[1] - a[1];
    }));

    for (const key in sortedCount) {
        console.log(`${key} = ${count[key]}`);
    }
}
argumentInfo({ name: 'bob' }, 3.333, 9.999); 