//variables
let num1 = 5;
let operator = '+';
let num2 = 5;
const display = document.querySelector('h3');
display.innerHTML = ' ';
//button setup
const numbers = document.getElementById('numBtns');
const numBtns = numbers.querySelectorAll('button');
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const btnId = button.innerText;
        console.log(btnId);
        updateDisplay(btnId);
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