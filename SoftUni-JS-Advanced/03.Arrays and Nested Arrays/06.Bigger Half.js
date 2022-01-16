function biggerHalf(arr){
    sort = arr.sort((a, b) => a - b);
    let num= Math.ceil(sort.length/2);
    sort = sort.slice(-num, sort.length);
    return sort;
 
}
console.log(twoSmallestNumbers([3, 19, 14, 7, 2, 19, 6]));
