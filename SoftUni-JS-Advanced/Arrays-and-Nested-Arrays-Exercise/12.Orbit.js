function orbit(arr = []) {
    const width = arr[0];
    const height = arr[1];
    const x = arr[2];
    const y = arr[3];
    let num = 1;
    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {

            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;

        }

    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
orbit([5, 5, 2, 2]);