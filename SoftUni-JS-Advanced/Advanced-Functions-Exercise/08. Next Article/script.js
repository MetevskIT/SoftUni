function getArticleGenerator(articles) {
    let resultArea = document.getElementById('content');
    let i = 0;
    function add() {

        if (articles.length > i) {
            let currArticle = document.createElement('article');
            let currElement = articles[i];
            currArticle.textContent = currElement;
            resultArea.appendChild(currArticle);
            i++;
        }
    }
    return add;
}
