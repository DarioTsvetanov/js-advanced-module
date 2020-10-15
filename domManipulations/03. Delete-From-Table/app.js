function deleteByEmail() {
    
    const input = document.querySelector('input');

    const cells = Array.from(document.querySelectorAll('td'));

    const resultDiv = document.querySelector('#result');

    for (let i = 1; i < cells.length; i += 2) {

        let cell = cells[i];

        if (cell.textContent == input.value) {

            const tr = cell.parentElement;

            tr.remove();

            input.value = '';

            resultDiv.textContent = 'Deleted.';

            return;
        }
    }

    resultDiv.textContent = 'Not found.';

    input.value = '';
}