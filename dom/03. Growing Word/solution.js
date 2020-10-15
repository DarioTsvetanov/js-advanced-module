function growingWord() {

  let paragraph = document.querySelector('#exercise p');

  if (!paragraph.style.fontSize) {

    paragraph.style.fontSize = '2px';

    paragraph.style.color = 'blue'
  }
  else {

    let size = parseInt(paragraph.style.fontSize) * 2;
    
    paragraph.style.fontSize = `${size}px`;

    if (paragraph.style.color == 'blue') paragraph.style.color = 'green';
    else if (paragraph.style.color == 'green') paragraph.style.color = 'red';
    else if (paragraph.style.color == 'red') paragraph.style.color = 'blue';
  }
}