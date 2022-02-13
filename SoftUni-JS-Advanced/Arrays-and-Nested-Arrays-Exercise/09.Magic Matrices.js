function magicMatrices(matrix) {
  let result = true;
  let sum = 0;
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < matrix.length; i++) {
    arr[i] = matrix[i].reduce((acc, sum) => {
      return acc + sum;
    }, 0);
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    arr2.push(sum);
    sum = 0;
  }
  arr.concat(arr2);
  for (let i = 0; i < arr.length - 1; i++) {

    if (arr2[i] != arr2[i + 1]) {
      result = false;
      break;
    }
  }
  console.log(result);
}
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);