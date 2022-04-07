import { add } from './add.js';
import { load } from './loadCatches.js'
import { removeActive } from './active.js'
removeActive();

let guest = document.getElementById('guest')
let span = document.querySelector('span')
let userEl = document.getElementById('user');
let logoutBtn = document.getElementById('user').children[0];
let addBtn = document.getElementsByClassName('add')[0];

document.getElementById('home').classList.add('active')

let user = JSON.parse(localStorage.getItem('user'));

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    add(user._id)
})


let loadBtn = document.getElementsByClassName('load')[0]
loadBtn.addEventListener('click', () => {
    (user) ? load(user._id) : load(undefined);
});


logoutBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('active')

    let url = 'http://localhost:3030/users/logout';

    let logoutRequest = await fetch(url, {
        method: 'GET',
        headers: {

            'X-Authorization': user.accessToken
        }
    })

    if (logoutRequest.status == 204) {
        localStorage.clear();
        location.href = 'index.html'
    }

})

if (user) {
    guest.style.display = 'none'
    span.textContent = user.email;
    addBtn.disabled = false;
} else {
    userEl.style.display = 'none'
}