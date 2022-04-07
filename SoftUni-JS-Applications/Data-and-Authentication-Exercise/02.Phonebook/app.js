function attachEvents() {

    let baseUrl = `http://localhost:3030/jsonstore/phonebook`
    let phonebook = document.getElementById('phonebook');

    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', async () => {

        let response = await fetch(baseUrl);
        let result = await response.json();

        let phones = Object.entries(result);
        phonebook.replaceChildren();
        phones.forEach(p => {

            let liEl = document.createElement('li');
            liEl.textContent = `${p[1].person}: ${p[1].phone}`
            liEl.id = p[1]._id;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            liEl.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', async () => {

                let deleteRequest = await fetch(baseUrl + `/${liEl.id}`, {
                    method: 'DELETE',
                })
                liEl.remove();
            })

            phonebook.appendChild(liEl);

        })
    })

    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', () => {

        let newPhonebook = {
            person: person.value,
            phone: phone.value,
        }
        let postRequest = fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newPhonebook)

        })
    })


}

attachEvents();