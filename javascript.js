//variables
let num1 = '';
let operator = '+';
let num2 = 5;
const display = document.querySelector('h3');
display.innerHTML = ' ';
//button setup
const numbers = document.getElementById('numBtns');
const numBtns = numbers.querySelectorAll('button');
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const numBtnId = button.innerText;
        console.log(numBtnId);
        num1 = num1 + numBtnId;
        console.log(num1);
        updateDisplay(numBtnId);
    });
});

const ops = document.getElementById('opBtns');
const opBtns = ops.querySelectorAll('button');
opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const opBtnId = button.innerText;
        console.log(opBtnId);
    });
});


//functions
function updateDisplay(value) {
    let currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay + value;
}

function operate(a, b, op) {
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return subtract(a, b);
    } else if (op === '*') {
        return multiply(a, b);
    } else if (op === '/') {
        return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}