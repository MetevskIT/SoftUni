class Stringer{

    constructor(innerString,innerLength){
        
        this.innerString=innerString;
        this.innerLength=innerLength;
    }

    increase(length) {

        this.innerLength += Number(length);
 
     }
 
     decrease(length) {
 
         this.innerLength -= Number(length);
         if (this.innerLength < 0) {
             
             this.innerLength = 0;
 
         }
 
     }
 
     toString() {
         
        let result='';
        if (this.innerLength == 0) {
            result='...';
        } else if(this.innerLength >= this.innerString.length - 1) {
            result=this.innerString;
        }else{
            result=this.innerString.slice(0, this.innerLength) + '...';
        }

        return result;
 
     }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
