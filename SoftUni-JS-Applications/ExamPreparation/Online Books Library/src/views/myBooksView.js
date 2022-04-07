import { getUserBooks } from "../service/http-service.js";
import { getId } from "../service/localUserData.js";
import { html } from '../../node_modules/lit-html/lit-html.js'


const myBookTemplate = (books) => html`<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${books.length > 0 ? html`<ul class="my-books-list">
        ${books.map(b => html`<li class="otherBooks">
            <h3>${b.title}</h3>
            <p>Type: ${b.type}</p>
            <p class="img"><img src=${b.imageUrl}></p>
            <a class="button" href="/details/${b._id}">Details</a>
        </li>`)}

    </ul>`: html`<p class="no-books">No books in database!</p>`}

</section>`

const myBookView = async (ctx) => {

    let books = await getUserBooks(getId());
    ctx.render(myBookTemplate(books))
}
export {
    myBookView
}