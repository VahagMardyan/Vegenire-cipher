import createMessage from '../Message/message.js';

const encryptMessage = () => {

    const alphabet = Array.from(document.querySelector('.alphabet').value);
    const keyWord = document.querySelector('.key-word').value.trim().toLowerCase();
    const textMessage = document.querySelector('.text-message').value;
    const resultMessage = document.querySelector('.result-message');

    if (alphabet.length === 0)
        return createMessage(`Your alphabet is empty!!!`, 'red');

    if (!textMessage.trim())
        return createMessage(`Your message is empty! Input something.`, 'red');

    if (!keyWord)
        return createMessage(`You didn't input a key-word. Input something.`, 'red');

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < textMessage.length; i++) {

        const char = textMessage[i];
        const alphabetIndex = alphabet.indexOf(char.toLowerCase());

        // skip letters not in alphabet (spaces, punctuation, numbers)
        if (alphabetIndex === -1) {
            encryptedMessage += char;
            continue;
        }

        const keyChar = keyWord[keyIndex % keyWord.length];
        const keyValue = alphabet.indexOf(keyChar);

        const encryptedIndex =
            (alphabetIndex + keyValue) % alphabet.length;

        let encryptedChar = alphabet[encryptedIndex];

        // preserve uppercase
        if (char === char.toUpperCase()) {
            encryptedChar = encryptedChar.toUpperCase();
        }

        encryptedMessage += encryptedChar;
        keyIndex++; // advance key only when encrypting a real letter
    }

    resultMessage.value = encryptedMessage;
};

export default encryptMessage;