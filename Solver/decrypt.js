import createMessage from "../Message/message.js";

const decryptMessage = () => {

    const alphabet = Array.from(
        document.querySelector('.alphabet').value
    );

    const keyWord = document.querySelector('.key-word').value.trim().toLowerCase();
    const textMessage = document.querySelector('.text-message').value;
    const resultMessage = document.querySelector('.result-message');

    if (alphabet.length === 0)
        return createMessage(`Your alphabet is empty!!!`, 'red');

    if (!textMessage.trim())
        return createMessage(`Your message is empty! Input something.`, 'red');

    if (!keyWord)
        return createMessage(`You didn't input a key-word. Input something.`, 'red');

    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < textMessage.length; i++) {

        const char = textMessage[i];

        const alphabetIndex = alphabet.indexOf(char.toLowerCase());
        if (alphabetIndex === -1) {
            decryptedMessage += char;
            continue;
        }

        // cycle key characters (but only when message char is alphabetic)
        const keyChar = keyWord[keyIndex % keyWord.length];
        const keyValue = alphabet.indexOf(keyChar);

        const decryptedIndex =
            (alphabetIndex - keyValue + alphabet.length) % alphabet.length;

        let decryptedChar = alphabet[decryptedIndex];

        // preserve uppercase
        if (char === char.toUpperCase()) {
            decryptedChar = decryptedChar.toUpperCase();
        }

        decryptedMessage += decryptedChar;
        keyIndex++; // move key only for letters
    }

    resultMessage.value = decryptedMessage;
};

export default decryptMessage;