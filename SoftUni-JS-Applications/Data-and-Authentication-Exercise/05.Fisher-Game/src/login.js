import { removeActive } from './active.js'
removeActive();
document.getElementById('login').classList.add('active')

let button = document.querySelector('button');
button.addEventListener('click', login)
button.classList.add('active')

let logout = document.getElementById('user');
logout.style.display = 'none'

let welcome = document.querySelector('span')


async function login(e) {
    e.preventDefault()
    let email = document.querySelector('input[type="text"]').value
    let password = document.querySelector('input[type="password"]').value

    let user = {
        email,
        password,
    }

    let url = `http://localhost:3030/users/login`;

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (response.status != 200) {
        alert('Email or password is incorrect! Try again!')
        return;
    }
    let currUser = await response.json();

    localStorage.setItem('user', JSON.stringify(currUser))
    welcome.textContent = currUser.email
    location.href = './index.html'



}