function lastKNums(n,k){
    let arr = [1];
    
    for(let i = 1; i < n; i++) {
        let sum = 0;
        let arr2 = arr.slice(-k);
        for(let num of arr2) {
            sum += num;
        }
        arr.push(sum);
    }
    return arr;
}
console.log(arr(6,3));
