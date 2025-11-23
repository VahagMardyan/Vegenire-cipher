import encryptMessage from './encrypt.js';
import decryptMessage from './decrypt.js';
import copy from '../Copy/copy.js';

const encryptButton = document.querySelector('.encrypt');
const decryptButton = document.querySelector('.decrypt');
const copyButton = document.querySelector('.copy');

encryptButton.addEventListener('click', encryptMessage);
decryptButton.addEventListener('click', decryptMessage);
copyButton.addEventListener('click',copy);

const alphabetInput = document.querySelector('.alphabet');
const select = document.getElementById('alphabet-text');
select.addEventListener('change',()=> {
    alphabetInput.value = select.value;
});