function createFurniture(img, name, price, factor,isLogged) {

    let tr = document.createElement('tr');

    let tdImg = document.createElement('td');
    let imgEl = document.createElement('img');
    imgEl.src = img;
    tdImg.appendChild(imgEl);

    let tdName = document.createElement('td');
    let pName = document.createElement('p');
    pName.textContent = name;
    tdName.appendChild(pName);

    let tdPrice = document.createElement('td');
    let pPrice = document.createElement('p');
    pPrice.textContent = price;
    tdPrice.appendChild(pPrice);

    let tdFactor = document.createElement('td');
    let pFactor = document.createElement('p');
    pFactor.textContent = factor;
    tdFactor.appendChild(pFactor);

    let tdMark = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'checkbox';
    isLogged?input.disabled=false:input.disabled = true;
    tdMark.appendChild(input);

    tr.appendChild(tdImg);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdFactor);
    tr.appendChild(tdMark);

    return tr;
}
export { createFurniture };