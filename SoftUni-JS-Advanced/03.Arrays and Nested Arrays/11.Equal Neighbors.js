function equalNeighbors(matrix){
    let equal=0;
    for (let i = 0; i < matrix.length-1; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         
          if (matrix[i][j]==matrix[i+1][j]) {
              equal+=1;
          }
      }
        
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           
            if (matrix[i][j]==matrix[i][j+1]) {
                equal+=1;
            }
        }
          
      }
    
    console.log(equal);
}
equalNeighbors([[2, 2, 5, 7,4],
[4,0,5,3,4],
[2,5,5,4,2]])