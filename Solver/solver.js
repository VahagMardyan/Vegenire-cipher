import encryptMessage from './encrypt.js';
import decryptMessage from './decrypt.js';

const encryptButton = document.querySelector('.encrypt');
const decryptButton = document.querySelector('.decrypt');

encryptButton.addEventListener('click', encryptMessage);
decryptButton.addEventListener('click', decryptMessage);