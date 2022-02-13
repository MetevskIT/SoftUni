function biggestElement(matrix){
    let BigElement=matrix[0][0];
  
    for(let row of matrix) {
        if(Math.max(...row) > BigElement) {
            BigElement = Math.max(...row);
        }
    }
    return BigElement;
  
}
console.log(biggestElement([[20, 50, 10],
    [8, 33,145]]));
