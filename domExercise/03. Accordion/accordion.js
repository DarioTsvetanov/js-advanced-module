function toggle() {
    
    let extraText = document.querySelector('#extra');

    let button = document.querySelector('.button');

    if (button.innerHTML == 'More') {

        button.innerHTML = 'Less';

        extraText.style.display = 'block';
    }
    else if (button.innerHTML == 'Less') {

        extraText.style.display = 'none';

        button.innerHTML = 'More';  
    }
}