const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$^&*()_+=';



function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumberCase() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbolCase() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const len = lenEl.value;

    let password = '';


    if(upperEl.checked){
        password += getUpperCase();
    };

    if(lowerEl.checked){
        password += getLowerCase();
    };

    if(numberEl.checked){
        password += getNumberCase();
    };

    if(symbolEl.checked){
        password += getSymbolCase();
    };

    for (let i=password.length; i<len; i++) {
        const x = generateX();
        password += x;

        if (x == ''){
            return password = 'Emtry';
        }
    };

    pwEl.innerText = password;
    pwEl.appendChild(copyEl);
    
}

function generateX() {
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpperCase());
    };

    if(lowerEl.checked){
        xs.push(getLowerCase());
    };

    if(numberEl.checked){
        xs.push(getNumberCase());
    };

    if(symbolEl.checked){
        xs.push(getSymbolCase());
    };

    if(xs.length === 0) return '';

    return xs[Math.floor(Math.random() * xs.length)];
}


generateEl.addEventListener('click', generatePassword);
