function deleteByEmail() {
    let inputValue = document.querySelector('input[name="email"]');
    let tableElements = document.querySelectorAll('td:nth-of-type(2n)')
    let resultArea = document.getElementById('result');
    for (let tableEl of tableElements) {
        if (tableEl.textContent == inputValue.value) {
            tableEl.parentNode.remove();
            resultArea.textContent = 'Deleted.'
        } else {
            resultArea.textContent = 'Not found.'
        }
    }


}