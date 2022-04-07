
import { render, html } from '../node_modules/lit-html/lit-html.js'

const url = ` http://localhost:3030/jsonstore/collections/books`;

function library() {

    const template = () => html`
    <button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    
        </tbody>
    </table>
    
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit" @click=${create}>
    </form>
    <form id="edit-form" style="display:none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value="">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save" @click=${editBook}>
    </form>
    
    `

    render(template(), document.body)

}
async function create(e) {
    e.preventDefault();

    let form = document.getElementById('add-form');

    let formData = new FormData(form);

    let author = formData.get('author')
    let title = formData.get('title')

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'applicaation/json'
        },
        body: JSON.stringify({ author, title })
    });
    form.reset();
    await loadBooks()

}
async function loadBooks() {
    let tbody = document.querySelector('tbody');

    let loadRequest = await fetch(url);
    let result = await loadRequest.json();
    let books = Object.entries(result)

    const template = () => html`
    ${books.map(b => html` <tr>
        <td>${b[1].title}</td>
        <td>${b[1].author}</td>
        <td>
            <button @click=${(e) => {
            e.preventDefault();
            edit(b[0], b[1].title, b[1].author)
            }}>Edit</button>
            <button @click=${() => { del(b[0]) }}>Delete</button>
        </td>
    </tr>`)}
    `
    render(template(), tbody)


}

let addForm;
let editForm;
function edit(id, title, author) {

    addForm = document.getElementById('add-form');
    editForm = document.getElementById('edit-form');

    addForm.style.display = 'none';

    editForm.style.display = 'block';

    editForm.querySelector('[name="title"]').value = title;
    editForm.querySelector('[name="author"]').value = author;
    editForm.querySelector('input[type="submit"]').id = id;

}
async function editBook(e) {

    e.preventDefault();

    let id = e.currentTarget.id;
    let formData = new FormData(editForm);


    let author = formData.get('author').trim();
    let title = formData.get('title').trim();
    await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author,
            title
        })

    })


    addForm.style.display = 'block';
    editForm.style.display = 'none';

    await loadBooks()
}
async function del(id) {

    await fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
    await loadBooks()


}
library()
