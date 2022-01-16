function twoSmallestNumbers(arr){
    sort = arr.sort((a, b) => a - b);
    sort = sort.slice(0, 2);
    console.log(sort.join(' '));
}
twoSmallestNumbers([30, 50, 15, 15,6]);