function attachGradientEvents() {
    
    const gradient = document.querySelector('#gradient');

    const resultDiv = document.querySelector('#result');

    gradient.addEventListener('mousemove', (e) => {

        const xCordinate = e.offsetX;

        const persentage = Math.floor((xCordinate / 300) * 100); 

        resultDiv.textContent = `${persentage}%`;
    });

    gradient.addEventListener('mouseout', () => {

        resultDiv.textContent = '';
    });
}