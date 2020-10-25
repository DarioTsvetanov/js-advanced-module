/* function solve() {

  const inputTextArea = document.querySelector('textarea');
  
  const generateButton = document.querySelector('button');

  generateButton.addEventListener('click', () => {

    for (let object of JSON.parse(inputTextArea.value)) {

      const tableBody = document.querySelector('tbody');
      const newTableRow = document.createElement('tr');

      const imgTd = document.createElement('td');
      const image = document.createElement('img');
      image.src = object['img'];
      imgTd.appendChild(image);
      newTableRow.appendChild(imgTd);

      const nameTd = document.createElement('td');
      const nameParagraph = document.createElement('p');
      nameParagraph.textContent = object['name'];
      nameTd.appendChild(nameParagraph);
      newTableRow.appendChild(nameTd);

      const priceTd = document.createElement('td');
      const priceParagraph = document.createElement('p');
      priceParagraph.textContent = object['price'];
      priceTd.appendChild(priceParagraph);
      newTableRow.appendChild(priceTd);

      const decFactorTd = document.createElement('td');
      const decFactorParagraph = document.createElement('p');
      decFactorParagraph.textContent = object['decFactor'];
      decFactorTd.appendChild(decFactorParagraph);
      newTableRow.appendChild(decFactorTd);

      const radioTd = document.createElement('td');
      const radioButton = document.createElement('input');
      radioButton.setAttribute('type', 'checkbox');
      radioTd.appendChild(radioButton);
      newTableRow.appendChild(radioTd);

      tableBody.appendChild(newTableRow);
    }
  });

  const boughtTextArea = document.querySelectorAll('textarea')[1];
  const buyButton = document.querySelectorAll('button')[1];

  buyButton.addEventListener('click', () => {

    const markedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let boughtItems = [];

    let totalPrice = 0;

    let averageDecFactor = 0;

    let counter = 0;

    Array.from(markedCheckboxes).forEach(checkbox => {

      const paragraps = checkbox.closest('tr').querySelectorAll('p');

      boughtItems.push(paragraps[0].textContent);

      totalPrice += Number(paragraps[1].textContent);

      averageDecFactor += Number(paragraps[2].textContent);

      counter ++;
    });

    boughtTextArea.value = `Bought furniture: ${boughtItems.join(', ')}\n`;
    boughtTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    boughtTextArea.value += `Average decoration factor: ${averageDecFactor / counter}`;
  });
} */

function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName('button');
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    const products = document.getElementsByTagName('tbody')[0];
    const inputStr = document.getElementsByTagName('textarea')[0].value;
    const input = inputStr.match(/{[^}]+}/g);
    input.forEach(line => {
      line = JSON.parse(line);
      const product = document.createElement('tr');
      const stats = getStats(line);
      stats.forEach(stat => {
        const td = document.createElement('td');
        td.appendChild(stat);
        product.appendChild(td);
      });
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      const td = document.createElement('td');
      td.appendChild(checkbox);
      product.appendChild(td);

      products.appendChild(product);
    });
  }

  function buy() {
    const result = document.getElementsByTagName('textarea')[1];
    const bought = [];
    let totalPrice = 0;
    let avrgDecFac = 0;
    const products = Array.from(document.getElementsByTagName('tbody')[0].children);
    products.forEach(product => {
      const checkbox = product.getElementsByTagName('input')[0];
      if (checkbox.checked) {
        const [name, price, decFactor] = Array.from(product.getElementsByTagName('p'));
        bought.push(name.textContent);
        totalPrice += +price.textContent;
        avrgDecFac += +decFactor.textContent;
      }
    });
    avrgDecFac /= bought.length;
    result.value = [`Bought furniture: ${bought.join(', ')}`,
    `Total price: ${totalPrice.toFixed(2)}`,
    `Average decoration factor: ${avrgDecFac}`].join('\n');
  }

  function getStats(line) {
    const img = document.createElement('img');
    img.setAttribute('src', line.img);

    const name = document.createElement('p');
    name.textContent = line.name;

    const price = document.createElement('p');
    price.textContent = line.price;

    const decFactor = document.createElement('p');
    decFactor.textContent = line.decFactor;

    return [img, name, price, decFactor];
  }
}