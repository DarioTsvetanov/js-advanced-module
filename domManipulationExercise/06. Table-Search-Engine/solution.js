function solve() {
   
   const tableCells = Array.from(document.querySelectorAll('tbody td'));

   const searchField = document.querySelector('#searchField');

   const searchButton = document.querySelector('#searchBtn');

   searchButton.addEventListener('click', () => {

      tableCells.forEach(el => el.parentElement.classList.remove('select'));

      for (let cell of tableCells) {

         if (cell.textContent.includes(searchField.value)) {

            const parentElement = cell.parentElement;

            parentElement.classList.add('select');
         }
      }

      searchField.value = '';
   });
}