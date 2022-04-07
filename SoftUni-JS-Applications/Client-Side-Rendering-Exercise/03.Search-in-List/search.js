import { render, html } from '../node_modules/lit-html/lit-html.js'
import { towns } from './towns.js'

function search() {

   let townsContainer = document.getElementById('towns');
   const template = () => html`
   <ul>
      ${towns.map(t => html`
      <li>${t}</li>
      `)}
   </ul>
   `
   let searchBtn = document.querySelector('button')
   searchBtn.addEventListener('click', searchText)
   render(template(), townsContainer)

}

function searchText() {

   let findCount = 0;
   let result = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;

   let towns = document.querySelectorAll('li');

   towns.forEach(t => {

      if (t.textContent.toLowerCase().includes(searchText)) {
         t.classList.add('active')
         findCount++;
      } else {
         t.classList.remove('active')
      }

   })

   result.textContent=`${findCount} matches found`


}
search()
