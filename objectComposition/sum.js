function solve() {

    let firstElement;
    let secondElement;
    let resultElement;

    return {
        
        init: (selectorOne, selectorTwo, selectorThree) => {

            firstElement = document.querySelector(selectorOne);
            secondElement = document.querySelector(selectorTwo);
            resultElement = document.querySelector(selectorThree);
        },
        add: () => resultElement.value = Number(firstElement.value) + Number(secondElement.value),
        subtract: () => resultElement.value = Number(firstElement.value) - Number(secondElement.value)
    }
}