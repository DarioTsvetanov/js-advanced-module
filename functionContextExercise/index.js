function solve(){
   
   const tbody = document.querySelector('tbody');

   tbody.addEventListener('click', (e) => {

      const td = e.target;

      const parent = td.parentElement;

      const tds = document.querySelectorAll('td');

      if (parent.style.backgroundColor == "rgb(65, 63, 94)") {

         parent.style.backgroundColor = "";
      }
      else if (parent.style.backgroundColor == "") {

         parent.style.backgroundColor = "rgb(65, 63, 94)";
      }

      for (let tdEl of tds) {

         if (tdEl.parentElement !== parent) {

            tdEl.parentElement.style.backgroundColor = "";
         }
      }
   });
}