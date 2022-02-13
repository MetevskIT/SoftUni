function spiralMatrix(x, y) {
    let matrix = Array(x);

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = Array(y);
    }
    let num = 1;
    let top = 0;
    let bottom = x - 1;
    let left = 0;
    let right = y - 1;
    let direction = 'right';

    while (left <= right && top <= bottom) {

        if (direction == 'right') {
            for (let i = left; i <=right; i++) {
                matrix[top][i] = num++;
            }
            direction = 'down';
            top++;
        } else if (direction == 'down') {
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            direction = 'left';
            right--;
        }else if (direction == 'left') {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            direction = 'bottom';
            bottom--;
        }else if (direction == 'bottom') {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            direction = 'right';
            left++;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
spiralMatrix(3, 3);