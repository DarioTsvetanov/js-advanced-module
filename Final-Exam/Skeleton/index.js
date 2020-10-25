function solve() {
    
    const nameInput = document.querySelectorAll('.form-control > input')[0];
    const dateInput = document.querySelectorAll('.form-control > input')[1];
    const moduleInput = document.querySelector('.form-control > select');
    const addButton = document.querySelector('.form-control > button');

    const trainingModule = document.querySelector('.modules');

    addButton.addEventListener('click', (e) => {

        e.preventDefault();

        if (nameInput.value == '' || dateInput.value == '' || moduleInput.value == 'Select module') return;

        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');

        const moduleName = document.createElement('h3');
        moduleName.textContent = `${moduleInput.value.toUpperCase()}-MODULE`;

        const ul = document.createElement('ul');

        const li = document.createElement('li');
        li.classList.add('flex');

        const lectureInformation = document.createElement('h4');
        let date = dateInput.value.slice(0, 10);
        date = date.replace(/-/g, '/');
        let hours = dateInput.value.slice(11);
        lectureInformation.textContent = `${nameInput.value} - ${date} - ${hours}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Del'
        deleteButton.addEventListener('click', deleteLi);

        li.appendChild(lectureInformation);
        li.appendChild(deleteButton);
        li.setAttribute('date', `${date} - ${hours}`);
        
        let module = document.querySelector(`div[module-name=${`${moduleInput.value.toUpperCase()}-MODULE`}]`);

        if (!module) {

            ul.appendChild(li);

            moduleDiv.appendChild(moduleName);
            moduleDiv.appendChild(ul);
            moduleDiv.setAttribute('module-name', moduleName.textContent);
            trainingModule.appendChild(moduleDiv);
            
        }
        else {

            let moduleUl = module.querySelector('ul');

            moduleUl.appendChild(li);

            Array.prototype.slice.call(moduleUl.children)
            .map(function (x) { return moduleUl.removeChild(x); })
            .sort((x, y) => x.getAttribute('date').localeCompare(y.getAttribute('date')))
            .forEach(function (x) { moduleUl.appendChild(x); });
        }

        nameInput.value = '';
        dateInput.value = '';
        moduleInput.value = 'Select module';
    });
    
    function deleteLi(e) {

        if (e.target.parentElement.parentElement.children.length == 1) {

            e.target.parentElement.parentElement.parentElement.remove();
        }
        else e.target.parentElement.remove();
    }
};