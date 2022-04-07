import { getBookDetails, isLiked, getCountLikes, addLike } from "../service/http-service.js";
import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { isOwner, isLogged, getId, getAccesToken } from "../service/localUserData.js";

const detailsTemplate = (book, count, like, liked) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
                ${isOwner(book._ownerId) ? html`<a class="button" href="/details/edit/${book._id}">Edit</a>
                <a class="button" href="/details/delete/${book._id}">Delete</a>` : nothing}
    
                ${!isOwner(book._ownerId) && isLogged() && !liked ? html`<a @click=${like} class="button"
                    href="javascript:void(0)">Like</a>` : nothing}
    
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${count}</span>
                </div>
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>`

const detailsView = async (ctx) => {

    let id = ctx.params.id;
    let liked = false;
    if (isLogged()) {
        liked = await isLiked(id, getId());
    }

    async function like() {
        await addLike(getAccesToken(), id)
        ctx.page.redirect(`/details/${id}`)
    }
    let count = await getCountLikes(id);

    let book = await getBookDetails(id)

    ctx.render(detailsTemplate(book, count, like, liked))


}
export {
    detailsView
}