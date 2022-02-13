function process(arr){

    let result=[];
    for (let i = 1; i < arr.length; i+=2) {
    
        arr[i]*=2;
        result.unshift(arr[i])
    
    }
        console.log(result);
}
process([3, 0, 10, 4, 7, 3]);