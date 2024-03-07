import createMessage from '../Message/message.js';

const encryptMessage = () => {

    const alphabet = Array.from(document.querySelector('.alphabet').value)
        .sort((a, b) => a.localeCompare(b));

    const keyWord = String(document.querySelector('.key-word').value).replace(/\s/g, '').toLowerCase();
    const textMessage = String(document.querySelector('.text-message').value).replace(/\s/g, '');
    const resultMessage = document.querySelector('.result-message');

    let encryptedMessage = '';

    if (!alphabet) {
        return createMessage(`Your alphabet is empty!!!`,'red');
    }

    if (!textMessage) {
        return createMessage(`Your message is empty! Input something.`,'red');
    }

    if (!keyWord) {
        return createMessage(`You didn't input a key-word. Input something.`,'red');
    }

    let key = '';
    for (let i = 0; i < textMessage.length; i++) {
        key += keyWord[i % keyWord.length];
    }

    for (let i = 0; i < textMessage.length; i++) {

        let messageChar = textMessage[i];

        const alphabetChar = alphabet.indexOf(messageChar.toLowerCase());

        if (alphabetChar !== -1) {
            const keyChar = key[i];
            const encryptedCharIndex = (alphabetChar + alphabet.indexOf(keyChar)) % alphabet.length;
            let encryptedChar = alphabet[encryptedCharIndex];

            if (messageChar === ' ') {
                encryptedMessage += ' ';
            }

            if (messageChar === messageChar.toUpperCase()) {
                encryptedChar = encryptedChar.toUpperCase();
            }

            encryptedMessage += encryptedChar;
        } else {
            encryptedMessage += messageChar;
        }
    }

    return resultMessage.value = encryptedMessage;
}

export default encryptMessage;