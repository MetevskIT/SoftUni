function addItem() {
    let newLi = document.createElement('li');
    let inputValue = document.getElementById('newItemText');
    newLi.textContent = inputValue.value;
    let getUl = document.getElementById('items');
    getUl.appendChild(newLi);
    inputValue.value = '';
}