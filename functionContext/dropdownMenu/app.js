function solve() {
    
    const boxButton = document.querySelector('#box');

    const ul = document.querySelector('#dropdown-ul');
    
    let isVisible = false;

    boxButton.addEventListener('click', () => {

        ul.style.display = 'block';

        ul.addEventListener('click', (e) => {

            boxButton.style.backgroundColor = `${e.target.textContent}`;
        });
    });
}