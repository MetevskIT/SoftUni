import { createFurniture } from "./createFurnitures.js";
async function loadFurnitures(isLogged=false) {

    let thead = document.querySelector('thead');
    let tbody = document.querySelector('tbody');

    let url = `http://localhost:3030/data/furniture`;

    let furnituresRequest = await fetch(url);

    let result = await furnituresRequest.json();
    if (result.length == 0) {

        let p = document.createElement('p');
        p.textContent = 'furniture is not available';
        thead.replaceChildren();
        tbody.appendChild(p);
        return;
    }
    tbody.replaceChildren();
    result.forEach(f => {

        let img = f.img;
        let name = f.name;
        let price = f.price;
        let factor = f.factor;
        tbody.appendChild(createFurniture(img, name, price, factor,isLogged))
    });



}
export { loadFurnitures };