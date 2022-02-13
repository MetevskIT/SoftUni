function addItem() {
    let createLi = document.createElement('li');
    let inputValue = document.getElementById('newItemText').value;
    createLi.textContent = inputValue;
    inputValue.value = '';
    let ulElements = document.getElementById('items');
    let deleteElement = document.createElement("a");
    deleteElement.textContent = "[Delete]";
    deleteElement.href = "#";
    createLi.appendChild(deleteElement);
    ulElements.appendChild(createLi);

    deleteElement.addEventListener('click', deleteEl);
    function deleteEl(e) {
        e.currentTarget.parentNode.remove();
    }


}