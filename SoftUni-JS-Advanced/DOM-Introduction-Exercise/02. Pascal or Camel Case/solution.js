function solve() {
  let inputValue = document.getElementById('text').value.toLowerCase();
  let inputCaseValue = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let inputValueSplited = inputValue.split(' ');
  let isTrue = false;
  switch (inputCaseValue) {
    case "Pascal Case":
      for (let element of inputValueSplited) {
        result.textContent += element[0].toUpperCase() + element.slice(1);
      }
      break;
    case "Camel Case":
      for (let element of inputValueSplited) {
        if (!isTrue) {
          result.textContent += element;
          isTrue = true;
        } else {
          result.textContent += element[0].toUpperCase() + element.slice(1);
        }
      }
      break;
    default:
      result.textContent = "Error!"
      break;
  }
}