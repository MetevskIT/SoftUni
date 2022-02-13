function validate() {
    let input = document.getElementById("email");
    let pattern = "[a-z]+@[a-z]+\.[a-z]{2,3}";
    input.addEventListener('change', check);
    function check(e) {
        console.log(e.currentTarget);
        if (!e.currentTarget.value.match(pattern)) {
            e.currentTarget.classList.add("error");
        } else {
            e.currentTarget.classList.remove("error");
        }

    }
}