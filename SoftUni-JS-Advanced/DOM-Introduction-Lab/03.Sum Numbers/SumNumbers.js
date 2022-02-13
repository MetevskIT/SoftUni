function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum =document.getElementById('num2');

    let first = Number(firstNum.value);
    let second=Number(secondNum.value);
    let result = first+second;
    let sum = document.getElementById('sum');
    sum.value=result;
}
