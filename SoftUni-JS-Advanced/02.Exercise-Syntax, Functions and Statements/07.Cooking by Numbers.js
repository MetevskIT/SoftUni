function operation(number,cmd1,cmd2,cmd3,cmd4,cmd5){
    let num = Number(number);
    let arr = [cmd1,cmd2,cmd3,cmd4,cmd5];
   
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "chop":
                num/=2;
                console.log(num);
                break;
            case "dice":
                num=Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num+=1;
                console.log(num);
                break;
            case "bake" :
                    num*=3;
                    console.log(num);
                break;
            case "fillet" :
                    num*=0.80;
                    console.log(num.toFixed(1));
                break; 
            
        }
        
    }
}
operation('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
