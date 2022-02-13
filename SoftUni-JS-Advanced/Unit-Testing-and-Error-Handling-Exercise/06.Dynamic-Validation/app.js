function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', (e) => {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
        if (pattern.test(e.currentTarget.value)) {
            e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.classList.add('error');
        }

    })
}