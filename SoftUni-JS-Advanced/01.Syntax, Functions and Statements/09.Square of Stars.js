function solve(size){
    if(size === undefined){
        size = 5;
    }
    let wl = "";

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            wl += '* ';
        }
        console.log(wl);
        wl = "";
    }
}
solve(7)