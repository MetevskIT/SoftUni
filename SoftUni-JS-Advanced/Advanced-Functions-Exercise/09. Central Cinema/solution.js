function solve() {

    let addMovie = document.getElementById('container');

    let inputName = addMovie.children[0];
    let inputHall = addMovie.children[1];
    let inputPrice = addMovie.children[2];

    let onScreenButton = addMovie.children[3];
    onScreenButton.addEventListener('click', addOnScreen);

    let moviesArea = document.getElementById('movies').querySelector('ul');

    let archiveArea = document.getElementById('archive').querySelector('ul');

    let clearButton = document.getElementById('archive').querySelector('button');
    clearButton.addEventListener('click', clear)

    function addOnScreen(e) {

        if (inputName.value && inputHall.value && inputPrice.value&&Number(inputPrice.value)) {
            e.preventDefault();
            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = inputName.value;

            let strongHallElement = document.createElement('strong');
            strongHallElement.textContent = `Hall: ${inputHall.value}`;

            let div = document.createElement('div');

            let strongElement = document.createElement('strong');
            strongElement.textContent = `${Number(inputPrice.value).toFixed(2)}`;

            let input = document.createElement('input');
            input.setAttribute('placeholder', 'Tickets Sold');

            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', archive);

            div.appendChild(strongElement);
            div.appendChild(input);
            div.appendChild(button);

            liElement.appendChild(spanElement);
            liElement.appendChild(strongHallElement);
            liElement.appendChild(div);

            moviesArea.appendChild(liElement)
            inputName.value ='';
            inputHall.value ='';
            inputPrice.value ='';

        }
    }

    function archive(e) {
        let currentElement = e.currentTarget.parentNode.parentNode;

        let movieName = currentElement.children[0].textContent;
        let moviePrice = currentElement.querySelector('div').children[0];

        let inputSoldTickets = currentElement.querySelector('div').children[1];
        if (Number(inputSoldTickets.value)>=0&&inputSoldTickets.value) {
            let price = Number(moviePrice.textContent) * Number(inputSoldTickets.value);

            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = movieName;

            let strongElement = document.createElement('strong');
            strongElement.textContent = `Total amount: ${price.toFixed(2)}`;

            let button = document.createElement('button');
            button.textContent = 'Delete';

            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            liElement.appendChild(button);

            archiveArea.appendChild(liElement);
            currentElement.parentNode.removeChild(currentElement);
    
            button.addEventListener('click', del);
        }

    }
    function del(e) {
        let currentElement = e.currentTarget.parentNode;
        archiveArea.removeChild(currentElement);
        
        
    }
    function clear(e){
        let currentElement = e.currentTarget.parentNode.querySelector('ul');
        let liElements = e.currentTarget.parentNode.querySelector('ul').querySelectorAll('li');
        for (let i = 0; i < liElements.length; i++) {
            currentElement.removeChild(liElements[i])
            
        }
    }

}