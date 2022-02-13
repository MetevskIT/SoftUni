function solve() {
  let area = document.getElementById('exercise').querySelectorAll('textarea');
  let buttons = document.getElementById('exercise').querySelectorAll('button');
  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    let currObj = JSON.parse(area[0].value);
    for (let element of currObj) {
      let tbody = document.querySelector('tbody');
      let tr = document.createElement('tr');

      let tdImage = document.createElement('td');
      let image = document.createElement('img');
      image.src = element['img'];
      tdImage.appendChild(image);
      tr.appendChild(tdImage);

      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = element["name"];
      tdName.appendChild(pName);
      tr.appendChild(tdName);

      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = element["price"];
      tdPrice.appendChild(pPrice);
      tr.appendChild(tdPrice);

      let tdDecoration = document.createElement('td');
      let pDecoration = document.createElement('p');
      pDecoration.textContent = element["decFactor"];
      tdDecoration.appendChild(pDecoration);
      tr.appendChild(tdDecoration);

      let tdCheckbox = document.createElement('td');
      let inputType = document.createElement('input');
      inputType.type = "checkbox"
      tdCheckbox.appendChild(inputType);
      tr.appendChild(tdCheckbox);

      tbody.appendChild(tr);

    }

  }
  function buy() {
    let names = [];
    let totalPrice = 0;
    let avarageDecoration = 0;

    let tbodyElements = document.querySelector('tbody').querySelectorAll('tr');
    for (let element of tbodyElements) {
      if (element.querySelector('input').checked) {
        let currName = element.children[1];
        names.push(currName.textContent);
        let currPrice = element.children[2];
        totalPrice += Number(currPrice.textContent);
        let currAverage = element.children[3];
        avarageDecoration += Number(currAverage.textContent);
      }

    }
    let output = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avarageDecoration / names.length}`
    area[1].value = output;
  }



}