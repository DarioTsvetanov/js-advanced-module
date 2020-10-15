function getArticleGenerator(array) {

    let articles = array.slice();

    return function() {

        if (articles.length == 0) return;

        const div = document.querySelector('#content');

        const newArticle = document.createElement('article');

        newArticle.textContent = articles.shift();

        div.appendChild(newArticle);
    }
}
