import { deleteFurniture } from "../services/http-services.js";
import { getAccesToken } from "../services/localUserData.js"

async function del(ctx) {

    let isConfirm = confirm('Delete?')
    if (!isConfirm) {
        return;
    }
    await deleteFurniture(ctx.params.id, getAccesToken())
    ctx.page.redirect('/dashboard')
}
export {
    del
}