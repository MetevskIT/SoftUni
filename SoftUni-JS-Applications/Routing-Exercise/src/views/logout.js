import { logoutUser } from "../services/http-services.js";
import { deleteUserData,getAccesToken } from "../services/localUserData.js";

async function logout(ctx) {

    await logoutUser(getAccesToken());
    deleteUserData();
    ctx.page.redirect('/dashboard')
}

export {
    logout
}