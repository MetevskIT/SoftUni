window.addEventListener('load', solve);

function solve() {

    let typeProduct = document.getElementById('type-product');
    let description = document.getElementById('description')
    let clientName = document.getElementById('client-name')
    let clientPhone = document.getElementById('client-phone')
    let sendBtn = document.getElementById('right').querySelector('button');
    sendBtn.addEventListener('click', send)

    let receivedOrders = document.getElementById('received-orders');

    let completedOrders = document.getElementById('completed-orders');

    let clearBtn = document.getElementsByClassName('clear-btn')[0];
    clearBtn.addEventListener('click', clear)

    function send(e) {
        e.preventDefault()
        if (!description.value || !clientName.value || !clientPhone.value||!typeProduct.value) {
            return;
        }
        let divElement = document.createElement('div');
        divElement.className = 'container';

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${typeProduct.value}`;

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;

        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${description.value}`;

        let startBtn = document.createElement('button')
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair'

        startBtn.addEventListener('click', () => {
             startBtn.disabled = true; 
             finishBtn.disabled = false; })

        let finishBtn = document.createElement('button')
        finishBtn.className = 'finish-btn';
        finishBtn.textContent = 'Finish repair'
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', finish)

        divElement.appendChild(h2Element)
        divElement.appendChild(h3Element)
        divElement.appendChild(h4Element)
        divElement.appendChild(startBtn)
        divElement.appendChild(finishBtn)

        receivedOrders.appendChild(divElement)


        typeProduct.value='';
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';

    }
    function finish(e) {
        let container = e.currentTarget.parentNode;
        let buttons = container.querySelectorAll("button");
        buttons[0].remove();
        buttons[1].remove();
        completedOrders.appendChild(container);

    }
    function clear(e) {
        let containerElements = e.currentTarget.parentNode.getElementsByClassName('container');
        Array.from(containerElements).forEach(x => x.remove())

    }

}