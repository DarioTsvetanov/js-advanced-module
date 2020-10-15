function validate() {
    
    const input = document.querySelector('input');

    const regExp = /^[a-z]+\@[a-z]+\.[a-z]+$/;

    input.addEventListener('change', () => {

        const match = input.value.match(regExp);

        if (!match) input.classList.add('error');
        else input.classList.remove('error');
    });
}