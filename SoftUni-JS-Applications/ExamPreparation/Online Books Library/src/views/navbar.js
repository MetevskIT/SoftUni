import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { isLogged, getEmail } from '../service/localUserData.js'

const navigationTemplate = () => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${isLogged() ? html`<div id="user">
            <span>Welcome, ${getEmail()}</span>
            <a class="button" href="/mybooks">My Books</a>
            <a class="button" href="/addbook">Add Book</a>
            <a class="button" href="/logout">Logout</a>
        </div>`: html` <div id="guest">
            <a class="button" href="/login">Login</a>
            <a class="button" href="/register">Register</a>
        </div>`}
    </section>
</nav>`

const navigationView = (ctx,next) => {
    render(navigationTemplate(), document.getElementById('site-header'))
    next();
}

export {
    navigationView
}