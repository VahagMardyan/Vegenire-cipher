const createMessage = (message, color) => {

    const messageSection = document.createElement('section');
    document.body.prepend(messageSection);

    const messageBox = document.createElement('div');
    messageBox.className = 'message-box disappear';

    const span = document.createElement('span');
    span.innerText = message;
    span.style.color = color;

    messageBox.append(span);

    messageSection.append(messageBox);

    setTimeout(() => {
        document.body.removeChild(messageSection);
    }, 6000);

}

export default createMessage;