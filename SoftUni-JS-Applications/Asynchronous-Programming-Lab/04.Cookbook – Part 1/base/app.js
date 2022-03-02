window.addEventListener('load', cookingBook);
async function cookingBook() {

    let main = document.querySelector('main');

    let url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    let response = await fetch(url);

    if (response.ok) {
        main.replaceChildren();
    }

    let result = await response.json();

    for (const r in result) {
        let article = document.createElement('article');
        article.className = 'preview';

        main.appendChild(article);

        createArticle(result[r].img, result[r].name, article)

    };
}

function createArticle(img, name, article) {

    article.replaceChildren();
    article.addEventListener('click', moreInfo)

    let divEl = document.createElement('div');
    divEl.className = 'title';

    let h2El = document.createElement('h2');
    h2El.textContent = name;

    divEl.appendChild(h2El);

    let divElSmall = document.createElement('div');
    divElSmall.className = 'small';

    let imgEl = document.createElement('img');
    imgEl.src = img;

    divElSmall.appendChild(imgEl);

    article.appendChild(divEl);;
    article.appendChild(divElSmall);

}



async function moreInfo(e) {
    let id = 0 + e.currentTarget.children[0].children[0].textContent.slice(-1);
    let curr = e.currentTarget;
    curr.removeEventListener('click', moreInfo)
    curr.replaceChildren();
   
    let url = `http://localhost:3030/jsonstore/cookbook/details/` + `${id}`;

    let response = await fetch(url);

    let result = await response.json();

    let h2El = document.createElement('h2');
    h2El.textContent = result.name;

    let divElBand = document.createElement('div');
    divElBand.className = 'band';

    let divElThimb = document.createElement('div');
    divElThimb.className = 'thumb';

    let imgEl = document.createElement('img');
    imgEl.src = result.img;

    divElThimb.appendChild(imgEl);
    divElBand.appendChild(divElThimb)

    let divElIngredients = document.createElement('div');
    divElIngredients.className = 'ingredients';

    let h3El = document.createElement('h3');
    h3El.textContent = 'Ingredients:';

    divElIngredients.appendChild(h3El);

    let ulEl = document.createElement('ul');

    result.ingredients.forEach(i => {
        let liEl = document.createElement('li');
        liEl.textContent = i;

        ulEl.appendChild(liEl);
    });

    divElIngredients.appendChild(ulEl);
    divElBand.appendChild(divElIngredients)

    let divElDesc = document.createElement('div');
    divElDesc.className = 'description';

    let h3Prep = document.createElement('h3');
    h3Prep.textContent = 'Preparation:';

    divElDesc.appendChild(h3Prep);

    result.steps.forEach(s => {
        let pEl = document.createElement('p');
        pEl.textContent = s;

        divElDesc.appendChild(pEl);
    });

    curr.appendChild(h2El);
    curr.appendChild(divElBand);
    curr.appendChild(divElDesc);
    curr.addEventListener('click',()=>{
        createArticle(result.img,result.name,curr);
    })

}