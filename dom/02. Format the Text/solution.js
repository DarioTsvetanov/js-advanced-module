function solve() {

    let textInput = document.querySelector('#input');

    let sentences = textInput.textContent.split('.');
    
    let outputDiv = document.getElementById('output');

    let currentParagraph = [];  
  
    for (let i = 0; i < sentences.length; i ++) {
      
      if (currentParagraph.length == 3 || i == sentences.length - 1) {

        let newParagraph = document.createElement('p');

        newParagraph.innerHTML = currentParagraph.join('');

        outputDiv.appendChild(newParagraph);

        currentParagraph = [`${sentences[i]}.`];
      }
      else if (sentences[i].length > 0) currentParagraph.push(`${sentences[i]}.`);
    }
}