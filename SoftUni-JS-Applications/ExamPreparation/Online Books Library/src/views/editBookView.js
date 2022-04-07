import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAccesToken } from '../service/localUserData.js';
import { updateBook, getBookDetails } from '../service/http-service.js';

const editTemplate = (book, edit) => html`
     <section id="edit-page" class="edit">
            <form id="edit-form" @submit=${edit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value=${book.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${book.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${book.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>`

const editView = async (ctx) => {

    let id = ctx.params.id;
    let book = await getBookDetails(id);

    async function edit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if (!title || !description || !imageUrl || !type) {
            alert('Fill all fields');
            return;
        }
        await updateBook(id,getAccesToken(), title, description, imageUrl, type)

        ctx.page.redirect(`/details/${id}`)

    }
    ctx.render(editTemplate(book, edit))
}

export {
    editView
}