function lockedProfile() {
    let elements = document.getElementsByClassName('profile');
    for (let element of elements) {
        element.querySelector('button').addEventListener('click', ShowMore)
    }
    function ShowMore(e) {
       if (e.target.parentNode.querySelector('input[value="unlock"]').checked) {
        if (e.currentTarget.textContent == 'Show more') {
            e.currentTarget.parentNode.querySelector('div').style.display = 'block';
            e.currentTarget.textContent = 'Hide it';     
        }else{
            e.currentTarget.parentNode.querySelector('div').style.display = 'none';
            e.currentTarget.textContent = 'Show more';
        }   
       }
       
    }
}