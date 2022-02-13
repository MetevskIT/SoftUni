function create(words) {
   let contentArea = document.getElementById('content');
   for (let div of words) {
      let currDiv = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = div;
      pElement.style.display = 'none';
      currDiv.addEventListener('click', displayON);
      currDiv.appendChild(pElement);
      contentArea.appendChild(currDiv);
   }

   function displayON(e) {
      e.currentTarget.querySelector('p').style.display = 'block';
   }
}