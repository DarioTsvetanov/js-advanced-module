function solve() {
   
   document.querySelector('button')
   .addEventListener('click', () => {

      const textareaInput = document.querySelector('textarea');

      const textareaInputValue = textareaInput.value;

      const newMessageDiv = document.createElement('div');

      newMessageDiv.setAttribute('class', 'message my-message');

      newMessageDiv.textContent = textareaInputValue;

      const parentElement = document.querySelector('#chat_messages');

      parentElement.appendChild(newMessageDiv);

      textareaInput.value = '';
   });
}