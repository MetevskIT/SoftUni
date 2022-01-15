function solve(input,input2,input3){
    let result = Number.MAX_VALUE;
    if(input>input2&&input>input3){

        result=input;
    }
    else if(input2>input&&input2>input3){
    
        result=input2;
    }
    else if(input3>input&&input3>input2){
    
        result=input3;
    }
  console.log(`The largest number is ${result}.`);

}
solve(5, -3, 16);