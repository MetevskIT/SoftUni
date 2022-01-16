function pieceOfPie(arr, input,input2){
    let first = arr.indexOf(input);
    let secound = arr.indexOf(input2);

    
    return arr.slice(first, secound + 1);
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
