import { loadFurnitures } from "./loadFurnitures.js";

let orders = document.getElementsByClassName('orders')[0];

let table = document.getElementsByClassName('table')[0];

let user = JSON.parse(sessionStorage.getItem('user'));

let spans = document.querySelectorAll('span');

let namesOfBuyedFurnitures = spans[0];

let priceOfBuyedFurnitures = spans[1];

let form = document.querySelector('form');

let createBtn = form.querySelector('button')

createBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let name = form.querySelector('input[name="name"]').value
    let price = form.querySelector('input[name="price"]').value
    let factor = form.querySelector('input[name="factor"]').value
    let img = form.querySelector('input[name="img"]').value
    if (!name || !price || !factor || !img) {
        alert('Fill all fields!')
        return;
    }

    let url = `http://localhost:3030/data/furniture`;

    let createRequest = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({ name, price, factor, img })

    })

    form.querySelector('input[name="name"]').value='';
    form.querySelector('input[name="price"]').value='';
    form.querySelector('input[name="factor"]').value='';
    form.querySelector('input[name="img"]').value='';

    loadFurnitures(true);

})

let buyBtn = document.getElementById('buy')
buyBtn.addEventListener('click', async () => {
    let tr = document.querySelector('tbody').querySelectorAll('tr');
    tr = Array.from(tr).filter(el => {
        return el.children[4].children[0].checked == true;
    })
    tr.forEach(async x => {
        let img = x.children[0].children[0].src;
        let name = x.children[1].children[0].textContent;
        let price = x.children[2].children[0].textContent;
        let factor = x.children[3].children[0].textContent;

        let url = `http://localhost:3030/data/orders`;

        let buyRequest = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({ name, price, factor, img })

        })
    });

})

let allBtn = orders.querySelector('button');
allBtn.addEventListener('click', async () => {
    let names = [];
    let price = 0;

    let url = `http://localhost:3030/data/orders`;

    let getAll = await fetch(url);

    let furnitures = await getAll.json();

    furnitures.forEach(x => {
        names.push(x.name)
        price += Number(x.price);
    })

    namesOfBuyedFurnitures.textContent = names.join(',')
    priceOfBuyedFurnitures.textContent = price

})

let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', async () => {
    let url = `http://localhost:3030/users/logout`;
    let request = await fetch(url, {
        headers: {
            'content-type': 'application/json',
            'X-Authorization': user.accessToken
        }
    })

    if (request.status) {
        sessionStorage.removeItem('user');
        location.href = './home.html'
    }

})

loadFurnitures(true);


