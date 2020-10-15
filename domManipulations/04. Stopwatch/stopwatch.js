function stopwatch() {
    
    const timer = document.querySelector('#time');

    const start = document.querySelector('#startBtn');

    const stop = document.querySelector('#stopBtn');
    
    let timerInterval;

    start.addEventListener('click', () => {

        start.setAttribute('disabled', 'true');

        stop.removeAttribute('disabled', 'true');

        timer.textContent = '00:00';

        timerInterval = setInterval(
            function() {

                let [minutes, seconds] = timer.textContent.split(':');

                let [firstMinSymbol, secondMinSymbol] = minutes.split('');

                firstMinSymbol = Number(firstMinSymbol);
                secondMinSymbol = Number(secondMinSymbol);

                let [firstSecSymbol, secondSecSymbol] = seconds.split('');
                
                firstSecSymbol = Number(firstSecSymbol);
                secondSecSymbol = Number(secondSecSymbol);

                secondSecSymbol ++;

                if (secondSecSymbol == 10) {

                    secondSecSymbol = 0;

                    firstSecSymbol ++;

                    if (firstSecSymbol == 6) {

                        firstSecSymbol = 0;

                        secondMinSymbol ++;

                        if (secondMinSymbol == 10) {

                            secondMinSymbol = 0;

                            firstMinSymbol ++;
                        }
                    }
                }

                timer.textContent = `${firstMinSymbol}${secondMinSymbol}:${firstSecSymbol}${secondSecSymbol}`;
            },
            1000
        );
    });

    stop.addEventListener('click', () => {

        clearInterval(timerInterval);

        start.removeAttribute('disabled', 'true');

        stop.setAttribute('disabled', 'true');
    });
}