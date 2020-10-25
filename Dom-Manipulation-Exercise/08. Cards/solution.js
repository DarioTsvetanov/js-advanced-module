function solve() {

   const cards = document.querySelector('.cards');

   const firstSpan = document.querySelector('span');

   const secondSpan = document.querySelectorAll('span')[2];

   const historyDiv = document.querySelector('#history');

   cards.addEventListener('click', (e) => {

      const selectedCard = e.target;

      const parentElement = selectedCard.parentElement;

      selectedCard.src = 'images/whiteCard.jpg';

      if (parentElement.id == 'player1Div') {

         firstSpan.textContent = selectedCard.name;
      }
      else {

         secondSpan.textContent = selectedCard.name;
      }

      if (firstSpan.textContent == '' || secondSpan.textContent == '') return;

      const firstCard = document.querySelector(`#player1Div img[name="${firstSpan.textContent}"]`);

      const secondCard = document.querySelector(`#player2Div img[name="${secondSpan.textContent}"]`);

      if (Number(firstSpan.textContent) > Number(secondSpan.textContent)) {

         firstCard.style.border = '2px solid green';

         secondCard.style.border = '2px solid red';
      }
      else {

         secondCard.style.border = '2px solid green';

         firstCard.style.border = '2px solid red';
      }

      historyDiv.textContent += `[${firstSpan.textContent} vs ${secondSpan.textContent}] `;

      firstSpan.textContent = '';

      secondSpan.textContent = '';
   });
}