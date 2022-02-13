function diagonalSums(matrix){
    let firstSum=0;
    let secoundSum=0;
    
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0+i; j <=i; j++) {
          firstSum+=matrix[i][j];
       }
     }
       for (let i = 0; i < matrix.length; i++) {
        secoundSum+=matrix[i][matrix.length-1-i];
     }
    console.log(firstSum+" "+secoundSum);
}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);