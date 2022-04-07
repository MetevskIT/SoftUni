import { deleteBook } from "../service/http-service.js";
import { getAccesToken } from "../service/localUserData.js";

async function deleteView(ctx) {

    let id = ctx.params.id;

    let result = confirm('Are you sure?')
    if (result) {
        await deleteBook(id,getAccesToken());
        ctx.page.redirect('/')
    }

}
export {
    deleteView
}