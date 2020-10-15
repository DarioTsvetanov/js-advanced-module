function encodeAndDecodeMessages() {
    
    const encodedTextArea = document.querySelector('textarea');
    const encodedButton = document.querySelector('button');

    const decodedButton = document.querySelectorAll('button')[1];
    const decodedTextArea = document.querySelectorAll('textarea')[1];

    encodedButton.addEventListener('click', () => {

        let textAreaValue = encodedTextArea.value;
        
        let encodedMessage = '';

        for (let i = 0; i < textAreaValue.length; i ++) {
        
            encodedMessage += String.fromCharCode(textAreaValue[i].charCodeAt(0) + 1);
        }

        decodedTextArea.value = encodedMessage;

        encodedTextArea.value = '';
    });

    decodedButton.addEventListener('click', () => {

        let textAreaValue = decodedTextArea.value;

        let decodedMessage = '';

        for (let i = 0; i < textAreaValue.length; i ++) {
        
            decodedMessage += String.fromCharCode(textAreaValue[i].charCodeAt(0) - 1);
        }

        decodedTextArea.value = decodedMessage;
    });
}