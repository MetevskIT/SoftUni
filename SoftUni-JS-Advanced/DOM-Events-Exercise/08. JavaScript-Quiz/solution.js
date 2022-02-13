function solve() {
  let buttons = document.getElementsByClassName('answer-text');
  let resultArea = document.querySelectorAll('h1');
  for (let button of buttons) {
    button.addEventListener('click', check)
  }
  let sectionQuestion = document.querySelectorAll('section');
 
  let rightAnswers = 0;
  
  let i = 0;
  function check(e) {
    sectionQuestion[i].style.display = 'none';
    if (e.currentTarget.textContent == "onclick" || e.currentTarget.textContent == "JSON.stringify()" || e.currentTarget.textContent == "A programming API for HTML and XML documents") {
      rightAnswers++;
    }
    if (i + 1 < 3) {
      sectionQuestion[i + 1].style.display = 'block';
      i++;
    } else {
      let result = '';
      if (rightAnswers == 3) {
        result = "You are recognized as top JavaScript fan!";
      } else {
        result = `You have ${rightAnswers} right answers`;
      }
      resultArea[1].textContent = result;
      resultArea[1].parentNode.parentNode.style.display = "block";
    }



  }
}
