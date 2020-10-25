function solve() {
    
    const taskTitle = document.querySelector('#task');
    const taskDescription = document.querySelector('#description');
    const taskDueDate = document.querySelector('#date');
    const addTaskButton = document.querySelector('#add');
    
    const divWrapper = document.querySelector('.wrapper');
    const openSection = document.querySelectorAll('section')[1];
    const inProgressSection = document.querySelectorAll('section')[2];
    const completedSection = document.querySelectorAll('section')[3];

    addTaskButton.addEventListener('click', (e) => {

        e.preventDefault();

        if (taskTitle.value == '' || taskDescription.value == '' || taskDueDate.value == '') return;

        const newArticle = document.createElement('article');
        
        const taskHeading = document.createElement('h3');
        taskHeading.textContent = taskTitle.value;

        const descriptionsParagraph = document.createElement('p');
        descriptionsParagraph.textContent = `Description: ${taskDescription.value}`;

        const dueDateParagraph = document.createElement('p');
        dueDateParagraph.textContent = `Due Date: ${taskDueDate.value}`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('flex');

        const startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';

        buttonsDiv.appendChild(startButton);
        buttonsDiv.appendChild(deleteButton);

        newArticle.appendChild(taskHeading);
        newArticle.appendChild(descriptionsParagraph);
        newArticle.appendChild(dueDateParagraph);
        newArticle.appendChild(buttonsDiv);

        openSection.querySelectorAll('div')[1].appendChild(newArticle);

        taskTitle.value = '';
        taskDescription.value = '';
        taskDueDate.value = '';
    });

    divWrapper.addEventListener('click', (e) => {

        if (e.target.tagName !== 'BUTTON') return;

        const article = e.target.parentElement.parentElement;

        if (e.target.classList.value == 'green') {

            e.target.classList.remove('green');
            e.target.classList.add('red');
            e.target.textContent = 'Delete';

            e.target.nextSibling.classList.remove('red');
            e.target.nextSibling.classList.add('orange');
            e.target.nextSibling.textContent = 'Finish';

            article.remove();
            inProgressSection.querySelector('#in-progress').appendChild(article);
        }
        else if (e.target.classList.value == 'red') {

            article.remove();
        }
        else if (e.target.classList.value == 'orange') {

            e.target.parentElement.remove();

            article.remove();
            completedSection.querySelectorAll('div')[1].appendChild(article);
        }
    });  
}