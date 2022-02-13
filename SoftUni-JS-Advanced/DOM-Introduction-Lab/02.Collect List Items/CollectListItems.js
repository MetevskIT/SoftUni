function extractText() {
    let elements = document.getElementById('items');
    let textareaElement = document.getElementById('result');
    textareaElement.textContent = elements.textContent;
}