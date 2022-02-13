function solve(input,input2){
    let result=0;
       let num1= Number(input);
       let num2= Number(input2);
       for (let index = num1; index <=num2; index++) {
          result+=index;
   }
       console.log(result);
}
solve('-8', '20')