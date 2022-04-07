import { render, html } from '../node_modules/lit-html/lit-html.js'

let loadBtn = document.getElementById('btnLoadTowns');
let root = document.getElementById('root')

function load(e) {
    e.preventDefault();
    let towns = document.getElementById('towns').value.split(', ');

    const template = () => html`
    <ul>
    
        ${towns.map(t => html`
        <li>${t}</li>
        `)}
    
    </ul>`

    render(template(), root)
}

loadBtn.addEventListener('click', load)