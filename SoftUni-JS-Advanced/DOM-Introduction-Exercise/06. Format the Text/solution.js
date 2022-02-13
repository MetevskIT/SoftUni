
function solve() {
  let textArea = document.getElementById('input');
  let resultArray = textArea.value.split('.');

  while (resultArray.length > 0) {
   let resultArea = "<p>";
    if (resultArray.length <= 3) {
      while(resultArray.length > 0){
        resultArea += resultArray.shift() + '.';
      }
    } else {
      resultArea = `${resultArray.shift()}.${resultArray.shift()}.${resultArray.shift()}.`;
    }
    resultArea += "</p>";
    document.getElementById('output').innerHTML += resultArea;
  } 
}