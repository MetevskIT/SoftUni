function addRemove(array){
    let resArr = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i]=="add") {
            resArr.push(i+1)
            
        }
        else if(array[i]=="remove"){
            resArr.pop();
        }

    }
    if (resArr.length<=0) {
        console.log(("Empty"));
    }else{
    console.log(resArr.join('\n'));

    }
}
addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);