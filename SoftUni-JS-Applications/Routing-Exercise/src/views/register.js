import { html } from "../tools.js";
import { registerUser } from "../services/http-services.js";
import { saveUserData } from "../services/localUserData.js";

const registerTemplate = (register) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${register} >
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
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`

const registerView = async (ctx) => {
    async function register(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('rePass');
        if (!email || !password||!rePass) {
            alert("Fill all fields!")
            return;
        }

        if (password != rePass) {
            alert('Pass dont match')
            return;
        }
        let register = await registerUser(email, password);
        if (!register.ok) {
            alert(register.status)
            return;
        }

        saveUserData(await register.json())

        ctx.page.redirect('/dashboard')

    }
    ctx.render(registerTemplate(register))
}
export {
    registerView
}