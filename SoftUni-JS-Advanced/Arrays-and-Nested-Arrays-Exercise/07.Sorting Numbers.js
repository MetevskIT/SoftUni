function sortingNumbers(array){
    
    let resArr=[];
    array.sort((a,b)=>a-b);
    while(array.length!=0){
        resArr.push(array.shift());
        resArr.push(array.pop());
    }
    return resArr;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));