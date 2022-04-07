import { render, html } from '../node_modules/lit-html/lit-html.js'
let url = 'http://localhost:3030/jsonstore/advanced/table';

function solve() {
   loadStudents()
   document.querySelector('#searchBtn').addEventListener('click', searchStudent);
}

async function loadStudents() {

   let tbody = document.querySelector('tbody');
   let loadRequest = await fetch(url);
   let result = await loadRequest.json();

   let students = Object.entries(result);

   const template = () => html`
${students.map(s => html`
<tr>
   <td>${s[1].firstName} ${s[1].lastName}</td>
   <td>${s[1].email}</td>
   <td>${s[1].course}</td>
</tr>`)}
  `

   render(template(), tbody);
}
function searchStudent() {

   let searchField = document.getElementById('searchField').value

   let tr = document.querySelector('tbody').querySelectorAll('tr');
   tr.forEach(td => {
      td.classList.remove('select')
      td.querySelectorAll('td').forEach(s => {
         if (s.textContent.toLowerCase().includes(searchField)) {
            td.classList.add('select')

         }
      })
      document.getElementById('searchField').value = '';

   })


}
solve()