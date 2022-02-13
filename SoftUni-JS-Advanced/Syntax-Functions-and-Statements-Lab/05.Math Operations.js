function solve(input,input2,operator){
    let result;
        switch (operator) {
        case '+':
             result=input+input2;
            break;
        case '-':
                result=input-input2;
            break;  
        case '*':
                result=input*input2;
            break;  
        case '%':
                result=input%input2;
            break;  
        case '/':
                result=input/input2;
            break;
        case '**':
                    result=input**input2;
            break;       
    }
     console.log(result);
}
solve(5, 6, '+')