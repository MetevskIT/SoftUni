window.addEventListener('load', solution)

function solution() {
    let main = document.getElementById('main');

    async function articles() {

        let listUrl = `http://localhost:3030/jsonstore/advanced/articles/list`;

        let detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`;

        let responseFromListUrl = await fetch(listUrl);

        let resultFromListUrl = await responseFromListUrl.json();

        resultFromListUrl.forEach(async el => {

            let id = el._id;

            let responseDetails = await fetch(detailsUrl + id)

            let resultDetails = await responseDetails.json();

            let title = resultDetails.title;

            let content = resultDetails.content;

            createArticle(title, id, content)


        });
    }

    function createArticle(title, id, content) {

        let divAccordion = document.createElement('div')
        divAccordion.className = 'accordion';

        let divHead = document.createElement('div');
        divHead.className = 'head';

        let spanEl = document.createElement('span');
        spanEl.textContent = title;

        let btn = document.createElement('button');
        btn.className = 'button';
        btn.id = id;
        btn.textContent = 'More';
        btn.addEventListener('click', () => {

            if (btn.textContent == 'More') {

                divExtra.style.display = 'block';
                btn.textContent = 'Less'

            } else {

                divExtra.style.display = 'none';
                btn.textContent = 'More'

            }
        })

        divHead.appendChild(spanEl);
        divHead.appendChild(btn);

        let divExtra = document.createElement('div');
        divExtra.className = 'extra';

        let pEl = document.createElement('p');
        pEl.textContent = content;

        divExtra.appendChild(pEl);

        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        main.appendChild(divAccordion);


    }
    return articles();
}
