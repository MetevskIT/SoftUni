function search() {
   let ulElements = document.querySelectorAll("li");
   let searchValue = document.getElementById('searchText').value;
   let inputCountArea = document.getElementById("result");
   let count = 0;
   for (let element of ulElements) {
      if (element.textContent.includes(searchValue)) {
         count++;
         element.style.fontWeight = "bold";
         element.style.textDecoration = "underline";
      }
   }
   inputCountArea.textContent = `${count} matches found`;

}
