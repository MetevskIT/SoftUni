import { html } from '../../node_modules/lit-html/lit-html.js'
import { saveUserData } from '../service/localUserData.js';
import { loginUser } from '../service/http-service.js';

const loginTemplate = (login) => html`
<section id="login-page" class="login">
    <form id="login-form" @submit=${login}>
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`

const loginView = (ctx) => {
    async function login(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        if (!email || !password) {
            alert('Fill all fields');
            return;
        }

        let loginRequest = await loginUser(email, password)
        if (!loginRequest.ok) {
            return alert(`Error ${loginRequest.status}`)
        }

        let user = await loginRequest.json();
        saveUserData(user)
        ctx.page.redirect('/')

    }
    ctx.render(loginTemplate(login))
}

export {
    loginView
}