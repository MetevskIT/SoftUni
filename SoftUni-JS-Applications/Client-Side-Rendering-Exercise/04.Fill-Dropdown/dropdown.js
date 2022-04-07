import { render, html } from '../node_modules/lit-html/lit-html.js'

let url = `http://localhost:3030/jsonstore/advanced/dropdown`;

function dropdownMain() {
    loadItem();

    let submitBtn = document.querySelector('input[type="submit"]')
    submitBtn.addEventListener('click', addItem)


}

async function addItem(e) {
    e.preventDefault();

    let text = document.getElementById('itemText').value;
    if (!text) {
        return;
    }

    let addRequest = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })

    });

    loadItem();




}
async function loadItem() {


    let menu = document.getElementById('menu');


    let getRequest = await fetch(url);
    let result = await getRequest.json();

    let towns = Object.entries(result);

    const template = () => html`
    ${towns.map(t => html`
    <option value='${t[1]._id}'>${t[1].text}</option>
    `)}
    `
    render(template(), menu)
}
dropdownMain()