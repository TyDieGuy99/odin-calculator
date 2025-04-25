//variables
let num1 = '';
let operator = '';
let num2 = '';
let boolean = false;
const display = document.querySelector('h3');
display.innerHTML = ' ';
//button setup

//for the numbers
const numbers = document.getElementById('numBtns');
const numBtns = numbers.querySelectorAll('button');
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const numBtnId = button.innerText;
        console.log(numBtnId);
        if (boolean == false) {
            num1 = num1 + numBtnId;
            console.log('first number is: ' + num1);
        } else if (boolean == true) {
            num2 = num2 + numBtnId;
            console.log('second number is: ' + num2);
        }
        updateDisplay(numBtnId);
    });
});

//for the operations
const ops = document.getElementById('opBtns');
const opBtns = ops.querySelectorAll('button');
opBtns.forEach((button) => {
    if (button.innerText !== '=') {
        button.addEventListener('click', () => {
            if (boolean == false) {
                operator = button.innerText;
                boolean = true;
                console.log(operator);
                updateDisplay(operator);
            } else if (boolean == true) {
                operate(num1, num2, operator);
            }
    });
    }
});

//for equals
const equalBtn = document.getElementById('equalBtn');
equalBtn.addEventListener('click', () => {
    operate(num1, num2, operator);
    console.log(num1, num2, operator);
});

//clear button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    boolean = false;
    display.innerHTML = '';
});

//functions
function updateDisplay(value) {
    let currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay + value;
}

function operate(a, b, op) {
    a = parseInt(a);
    b = parseInt(b);
    if (op === '+') {
        return display.innerHTML = add(a, b);
    } else if (op === '-') {
        return display.innerHTML = subtract(a, b);
    } else if (op === 'x') {
        return display.innerHTML = multiply(a, b);
    } else if (op === '÷') {
        return display.innerHTML = divide(a, b);
    }
}

function add(a, b) {
    num1 = a + b;
    operator = '';
    num2 = '';
    boolean = false;
    return (a + b);
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