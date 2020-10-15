function createArticle() {
	
	const titleInput = document.getElementById('createTitle');

	const textAreaInput = document.getElementById('createContent');

	const articles = document.getElementById('articles');

	if (titleInput.value == '' || textAreaInput.value == '') return;

	const newArticle = document.createElement('article');

	const articleHeading = document.createElement('h3');

	const articleText = document.createElement('p');

	newArticle.appendChild(articleHeading);

	newArticle.appendChild(articleText);

	articles.appendChild(newArticle);

	articleHeading.innerText = titleInput.value;

	articleText.innerText = textAreaInput.value;

	titleInput.value = '';

	textAreaInput.value = '';
}