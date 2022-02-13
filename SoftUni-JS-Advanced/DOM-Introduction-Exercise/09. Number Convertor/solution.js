function solve() {
    let number = document.getElementById("input");
    let resultArea = document.getElementById('result');
    let getButton = document.querySelector('button');
    getButton.addEventListener('click', func);
    let selectMenu = document.getElementById('selectMenuTo');
    let hexadecimal = document.createElement('option');
    hexadecimal.value = 'hexadecimal';
    hexadecimal.textContent = 'Hexadecimal';
    selectMenu.appendChild(hexadecimal);
    let binary = document.createElement('option');
    binary.value = 'binary';
    binary.textContent = 'Binary';
    selectMenu.appendChild(binary);
    let selectValue = document.getElementById('selectMenuTo');
    function func() {
        let result = '';
        switch (selectValue.value) {
            case 'binary':
                result = Number(number.value).toString(2);
                break;
            case 'hexadecimal':
                result = Number(number.value).toString(16).toUpperCase();
                break;
        }
        resultArea.value = result;

    }
}