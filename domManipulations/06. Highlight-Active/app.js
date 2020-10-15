function focus() {
    
    const sections = Array.from(document.querySelectorAll('input[type="text"]'));

    sections.forEach(el => el.addEventListener('focus', (e) => {

        let parentElement = e.target.parentElement;

        parentElement.classList.add('focused');
        console.log(1);
    }));

    sections.forEach(el => el.addEventListener('blur', (e) => {

        let parentElement = e.target.parentElement;

        parentElement.classList.remove('focused');
    }));
}