function addItem() {
    let newItemArea=document.getElementById('menu');
    let inputText = document.getElementById('newItemText');
    let inputValue= document.getElementById('newItemValue');
    let newItem = document.createElement('option');
    newItem.value=inputValue.value;
    newItem.textContent=inputText.value;
    newItemArea.appendChild(newItem);
    inputText.value='';
    inputValue.value='';
}