function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let inputValue = document.getElementById("searchField").value;
      let tableElements = document.querySelectorAll('tbody td');
      for (let element of tableElements) {
         element.parentNode.classList.remove("select");
      }
      for (let element of tableElements) {
         if (element.textContent.includes(inputValue) && inputValue != '') {
            element.parentNode.classList.add("select");
         }
      }
      document.getElementById("searchField").value = '';
   }
}