window.addEventListener('load', bookLibrary);

function bookLibrary() {

    let baseUrl = `http://localhost:3030/jsonstore/collections/books`;

    let tbody = document.querySelector('tbody');

    let formTitle = document.forms[0].children[0];

    let submitBtn = document.forms[0].children[5];
    submitBtn.addEventListener('click', create);

    let loadBooksBtn = document.getElementById('loadBooks');
    loadBooksBtn.addEventListener('click', loadBooks)

    let bookId = '';

    async function loadBooks() {

        tbody.replaceChildren();

        let loadResponse = await fetch(baseUrl);

        let loadResult = await loadResponse.json();

        let books = Object.entries(loadResult)

        books.forEach(b => {

            let tr = document.createElement('tr');
            tr.id = b[0];

            let tdTitle = document.createElement('td');
            tdTitle.textContent = b[1].title;

            let tdAuthor = document.createElement('td');
            tdAuthor.textContent = b[1].author;

            let tdBtns = document.createElement('td');

            let editBtn = document.createElement('button')
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', edit)

            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', async () => {

                let deleteRequest = fetch(baseUrl + `/${tr.id}`, {
                    method: 'DELETE'
                })
                tr.remove();
            })

            tdBtns.appendChild(editBtn);
            tdBtns.appendChild(deleteBtn);

            tr.appendChild(tdTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdBtns);

            tbody.appendChild(tr)

        });


    }

    async function create(e) {

        e.preventDefault();

        let form = document.forms;
        let title = form[0].children[2].value;
        let author = form[0].children[4].value;

        if (!author || !title) {
            return;
        }

        let currBook = {

            title,
            author,

        }
        if (e.currentTarget.textContent == 'Submit') {

            let createRequest = fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currBook)
            })

        } else if (e.currentTarget.textContent == 'Save') {

            let editRequest = fetch(baseUrl + `/${bookId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currBook)

            })
        }

        form[0].children[2].value = '';
        form[0].children[4].value = '';
        loadBooks();

        formTitle.textContent = 'FORM';
        submitBtn.textContent = 'Submit';

    }

    async function edit(e) {

        let book = e.currentTarget.parentNode.parentNode;
        document.forms[0].children[2].value = book.children[0].textContent;
        document.forms[0].children[4].value = book.children[1].textContent;

        bookId = book.id;

        formTitle.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';

    }
}