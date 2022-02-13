function check(input){
   let numbersToString = input.toString();
    let isTrue=true;
    let firtsNum=numbersToString[0];
    let sumOfNumbers=0;
  
    for (let i = 0; i < numbersToString.length; i++) {
       if (numbersToString[i]!=firtsNum) {
           isTrue=false;
           
       }
       sumOfNumbers+=Number(numbersToString[i]);
        
    }
    console.log(isTrue);
    console.log(sumOfNumbers);
}
check(2222222);
