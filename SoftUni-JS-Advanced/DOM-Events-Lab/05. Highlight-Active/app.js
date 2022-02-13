function focused() {
    let elements = document.querySelectorAll('input[type="text"]')
    for (let element of elements) {
        element.addEventListener('focus', focus);
        element.addEventListener('blur', blur);
    }
    function focus(e) {
        e.currentTarget.parentNode.classList.add("focused");
    }
    function blur(e) {
        e.currentTarget.parentNode.classList.remove("focused");
    }
}