import { removeActive } from './active.js'
removeActive();
document.getElementById('register').classList.add('active')

let button = document.querySelector('button');
button.addEventListener('click', register)

let url = `http://localhost:3030/users/register`;

let logout = document.getElementById('user');
logout.style.display = 'none'

let welcome = document.querySelector('span')

async function register(e) {
    e.preventDefault();


    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let rePass = document.querySelector('input[name="rePass"]').value;


    let user = {
        email,
        password,
    }

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify(user)
    })
    if (!email || !password || !rePass || password != rePass || response.status != 200) {
        alert('Invalid username ot password! Try Again!')

        document.querySelector('input[name="email"]').value = '';
        document.querySelector('input[name="password"]').value = '';
        document.querySelector('input[name="rePass"]').value = '';
        return;
    }

    let currUser = await response.json();

    localStorage.setItem('user', JSON.stringify(currUser))
    welcome.textContent = currUser.email
    location.href = './index.html'
}

