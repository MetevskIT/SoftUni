function diagonalAttack(arr=[]){
    let firstDiagonalSum=0;
    let secondDiagonalSum=0;
    let matrix=[[]];
    for (let i = 0; i < arr.length; i++) {
        let splitedRow = arr[i].split(' ');
        matrix[i]=splitedRow;     
    }

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum+=Number(matrix[i][i]);
        secondDiagonalSum+=Number(matrix[matrix.length-1-i][i]);
    }
    if (firstDiagonalSum==secondDiagonalSum) {
      
        for (let i = 0; i < matrix.length; i++) {
          
            for (let j =0; j < matrix[i].length; j++) {
            
                if (i!=j&&matrix.length-1-i!=j) {
                   
                    matrix[i][j]=firstDiagonalSum;
                }
                
            }
        }
    }
 
    for (let row of matrix) {
        console.log(row.join(' '));
    }

}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);