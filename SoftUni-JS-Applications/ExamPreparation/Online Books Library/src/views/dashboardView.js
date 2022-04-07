import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllBooks } from '../service/http-service.js'

const dashboardTemplate = (books) => html`<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${books.length > 0 ? html`<ul class="other-books-list">
        ${books.map(b => html`<li class="otherBooks">
            <h3>${b.title}</h3>
            <p>Type: ${b.type}</p>
            <p class="img"><img src=${b.imageUrl}></p>
            <a class="button" href="/details/${b._id}">Details</a>
        </li>`)}
    </ul>`: html`<p class="no-books">No books in database!</p>`}

</section>`

const dashboardView = async (ctx) => {

    let books = await getAllBooks();
    ctx.render(dashboardTemplate(books))
}
export {
    dashboardView
}