function solution() {

    let addGiftsValue = document.getElementsByClassName('card')[0].querySelector('div').children[0];
    let addGiftsBtn = document.getElementsByClassName('card')[0].querySelector('div').children[1];
    addGiftsBtn.addEventListener('click', add)

    let listOfGifts = document.getElementsByClassName('card')[1].children[1];

    let sentGifts = document.getElementsByClassName('card')[2].children[1];

    let discarded = document.getElementsByClassName('card')[3].children[1];

    function add(e) {
        e.preventDefault();
        let li = document.createElement('li');
        li.className = 'gift';
        li.textContent = addGiftsValue.value;

        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sent)

        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        discardBtn.addEventListener('click', discard)

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        listOfGifts.appendChild(li);
        addGiftsValue.value=''
        Array.from(listOfGifts.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(x => {
            listOfGifts.appendChild(x);
        })

    }

    function sent(e) {
        let li = e.currentTarget.parentNode;
        li.children[0].remove();
        li.children[0].remove();

        sentGifts.appendChild(li);
    }

    function discard(e) {
        let li = e.currentTarget.parentNode;
        li.children[0].remove();
        li.children[0].remove();

        discarded.appendChild(li);
    }
}