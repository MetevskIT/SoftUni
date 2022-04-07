function removeActive() {
    let navButtons = document.querySelectorAll('a');
    navButtons.forEach(b => {
        b.classList.remove('active')
    });
    
}
export { removeActive };