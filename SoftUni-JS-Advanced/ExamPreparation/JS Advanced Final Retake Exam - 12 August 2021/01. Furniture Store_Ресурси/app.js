window.addEventListener('load', solve);

function solve() {
    let name = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let description = document.getElementById('description');
    let priceElement = document.getElementById('price');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add)

    let list = document.getElementById('furniture-list');

    let totalPrice = document.getElementsByClassName('total-price')[0];


    function add(e) {
        e.preventDefault();
        if (!name.value || !yearElement.value || !description.value || !priceElement.value) {
            return;
        }
        let price = Number(priceElement.value);
        let year = Number(yearElement.value)

        let tr = document.createElement('tr')

        tr.className = 'info';

        let tdName = document.createElement('td');
        tdName.textContent = name.value;

        let tdPrice = document.createElement('td');

        tdPrice.textContent = price.toFixed(2);

        let tdBtns = document.createElement('td');

        let moreBtn = document.createElement('button');
        moreBtn.className = 'moreBtn';
        moreBtn.textContent = 'More Info';
    

        let buyBtn = document.createElement('button');
        buyBtn.className = 'buyBtn';
        buyBtn.textContent = 'Buy it';

        tdBtns.appendChild(moreBtn);
        tdBtns.appendChild(buyBtn);

        let hideTr = document.createElement('tr')
        hideTr.className = 'hide';
        hideTr.style.display = 'none';

        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;

        let tdDescr = document.createElement('td');
        tdDescr.setAttribute('colspan', 3);
        tdDescr.textContent = `Description: ${description.value}`;

        hideTr.appendChild(tdYear);
        hideTr.appendChild(tdDescr);

        tr.appendChild(tdName);
        tr.appendChild(tdPrice)
        tr.appendChild(tdBtns);
      
        list.appendChild(tr);
        list.appendChild(hideTr)
       
        moreBtn.addEventListener('click', () => {
            if (hideTr.style.display == 'none') {
                hideTr.style.display = 'contents'
                moreBtn.textContent = 'Less Info';
            } else {
                hideTr.style.display = 'none'
                moreBtn.textContent = 'More Info';
            }
        })

        buyBtn.addEventListener('click', () => {
            let prices = Number(totalPrice.textContent);
            prices += Number(tdPrice.textContent);

            totalPrice.textContent = prices.toFixed(2);
            list.removeChild(tr);
            list.removeChild(hideTr)
        })

        name.value = ''
        yearElement.value = ''
        description.value = ''
        priceElement.value = ''
    }

}
