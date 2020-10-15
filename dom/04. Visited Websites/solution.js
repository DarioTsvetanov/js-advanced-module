function solve() {
  
  let elements = document.querySelectorAll('.link-1');

  Array.from(elements).forEach(el => {

    el.addEventListener('click', function(e) {

      let sentence = el.querySelector('p');
    
      let content = sentence.textContent.split(' ');
    
      let counter = Number(content[1]) + 1;
    
      sentence.innerHTML = `visited ${counter} times`;
    });
  });
}