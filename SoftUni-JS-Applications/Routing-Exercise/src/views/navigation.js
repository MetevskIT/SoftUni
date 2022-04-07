import * as tools from '../tools.js';
import * as userData from '../../src/services/localUserData.js'

const navigationTemplate = () => tools.html`
<a id="catalogLink" href="/dashboard" class="active">Dashboard</a>
<div id="user" style=${userData.isLogged()?'display:inline':'display:none'}>
    <a id="createLink" href="/create">Create Furniture</a>
    <a id="profileLink" href="/myfurniture">My Publications</a>
    <a id="logoutBtn" href="/logout">Logout</a>
</div>
<div id="guest" style=${userData.isLogged()?'display:none':'display:inline'}>
    <a id="loginLink" href="/login">Login</a>
    <a id="registerLink" href="/register">Register</a>
</div>

`

export const navigationView=(ctx,next)=>{
    tools.render(navigationTemplate(),document.querySelector('nav'))
    next();
}
