import createMessage from "../Message/message.js";

const copy = () => {
    const textToCopy = document.querySelector('.result-message');
    if (!textToCopy.value) {
        return createMessage(`There's nothing to copy.`, 'red');
    }
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textToCopy.value);
    return createMessage(`Result copied to clipboard.`, 'green');
}

export default copy;