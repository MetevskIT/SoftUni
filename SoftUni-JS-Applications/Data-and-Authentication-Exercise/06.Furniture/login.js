window.onload = auth;
function auth() {

    let baseUrl = `http://localhost:3030/users/`
    let register = document.getElementById('register');
    let login = document.getElementById('login');
 
        let registerBtn = register.children[3];
        registerBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            let form = new FormData(register);
            let email = form.get('email');
            let password = form.get('password')
            let rePass = form.get('rePass')

            if (password != rePass) {
                alert('Passwords dont match')
                return;
            }
            if (!email || !password) {
                alert('Fill all fields')
                return;
            }
            let person = {
                email,
                password
            }

            let registerRequest = await fetch(`${baseUrl}register`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(person)
            })
            if (registerRequest.status == 409) {

                alert('already exist user with this email')
                register.reset();
                return;
            }
            let response = await registerRequest.json();
            sessionStorage.setItem('user', JSON.stringify(response))
            location.href='./homeLogged.html'

        })

        let loginBtn = login.children[2];
        loginBtn.addEventListener('click', async (e) => {

            e.preventDefault();
            let form = new FormData(login);
            let email = form.get('email');
            let password = form.get('password')

            if (!email || !password) {
                alert('Fill all fields')
                return;
            }
            let person = {
                email,
                password
            }

            let loginRequest = await fetch(`${baseUrl}login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(person)
            })
            if (loginRequest.status == 403) {
                alert('does not exist user with this email')
                login.reset();
                return;
            }

            let response = await loginRequest.json();
            sessionStorage.setItem('user', JSON.stringify(response))
            location.href='./homeLogged.html'


        })

       
    

}
