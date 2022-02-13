function encodeAndDecodeMessages() {
    let elements = document.getElementById('main').querySelectorAll('div');
    //elements.forEach(x => x.querySelector('button').addEventListener('click', code));
    for (let element of elements) {
        element.querySelector('button').addEventListener('click', code);
    }
    let encodeArea = elements[0].querySelector('textarea');
    let decodeArea = elements[1].querySelector('textarea');

    function code(e) {
        if (e.currentTarget.textContent == 'Encode and send it') {
            let curr = '';
            //Array.from(encodeArea.value).forEach(x => {
            //     let currChar = String.fromCharCode(x.charCodeAt(0) + 1);
            //    curr += currChar;
            //})
            for (let el of encodeArea.value) {
                let currChar = String.fromCharCode(el.charCodeAt(0) + 1);
                curr += currChar;
            }
            decodeArea.value = curr;
            encodeArea.value = '';
        } else {

            let curr = '';
           // Array.from(decodeArea.value).forEach(x => {
           //     let currChar = String.fromCharCode(x.charCodeAt(0) - 1);
           //     curr += currChar;
           // })
           for (let el of decodeArea.value) {
            let currChar = String.fromCharCode(el.charCodeAt(0) - 1);
            curr += currChar;
        }
            encodeArea.value = curr;
            decodeArea.value = ""
        }
    }
}
