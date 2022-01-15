function GCD(num,num2){
   
    let min = Math.min(num, num2);
    let cD = 1;
    for(let i = 1; i <= min; i++){
        if(num % i === 0 && num2 % i === 0){
            cD = i;
        }
    }
    console.log(cD);
    

}
GCD(15, 5)