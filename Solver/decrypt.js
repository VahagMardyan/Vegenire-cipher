const decryptMessage = () => {

    const alphabet = Array.from(document.querySelector('.alphabet').value)
        .sort((a, b) => a.localeCompare(b));

    const keyWord = String(document.querySelector('.key-word').value).replace(/\s/g, '').toLowerCase();
    const textMessage = String(document.querySelector('.text-message').value).replace(/\s/g, '');
    const resultMessage = document.querySelector('.result-message');

    let decryptedMessage = '';

    if (!alphabet) {
        return alert(`Your alphabet is empty!!!`);
    }

    if (!textMessage) {
        return alert(`Your message is empty! Input something.`);
    }

    if (!keyWord) {
        return alert(`You didn't input a key-word. Input something.`);
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
            const decryptedCharIndex = (alphabetChar - alphabet.indexOf(keyChar) + alphabet.length) % alphabet.length;
            let decryptedChar = alphabet[decryptedCharIndex];

            if (messageChar === ' ') {
                decryptedMessage += ' ';
            }

            if (messageChar === messageChar.toUpperCase()) {
                decryptedChar = decryptedChar.toUpperCase();
            }

            decryptedMessage += decryptedChar;
        } else {
            decryptedMessage += messageChar;
        }
    }

    return resultMessage.value = decryptedMessage;
}

export default decryptMessage;