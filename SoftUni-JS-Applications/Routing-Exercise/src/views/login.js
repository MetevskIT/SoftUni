import { loginUser } from '../services/http-services.js';
import { saveUserData } from '../services/localUserData.js';
import { html } from '../tools.js';

const loginTemplate = (login) => html` 
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${login}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
</div>`


const loginView = async (ctx) => {
    async function login(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        if (!email || !password) {
            alert("Fill all fields!")
            return;
        }

        let loggedUser = await loginUser(email, password);
         if (!loggedUser.ok) {
             alert(loggedUser.status)
             return;
         }

        saveUserData(await loggedUser.json())

        ctx.page.redirect('/dashboard')

    }
    ctx.render(loginTemplate(login))
}
export {
    loginView
}