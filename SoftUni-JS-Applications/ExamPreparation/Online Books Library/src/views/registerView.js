import { html } from '../../node_modules/lit-html/lit-html.js'
import { saveUserData } from '../service/localUserData.js';
import { registerUser } from '../service/http-service.js';

const registerTemplate = (register) => html`
<section id="register-page" class="register">
    <form id="register-form" @submit=${register}>
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`

const registerView = (ctx) => {
    async function register(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('confirm-pass')

        if (!email || !password || !rePass) {
            return alert('Fill all fields!');
        }
        if (password != rePass) {
            return alert('Passwords don\'t match!');
        }

        let registerRequest = await registerUser(email, password)
        if (!registerRequest.ok) {
            return alert(`Error ${registerRequest.status}`)
        }

        let user = await registerRequest.json();
        saveUserData(user)
        ctx.page.redirect('/')

    }
    ctx.render(registerTemplate(register))
}

export {
    registerView
}