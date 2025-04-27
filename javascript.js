//variables
let num1 = '';
let operator = '';
let num2 = '';
let boolean = false;
let checkNum = true;
const display = document.querySelector('h3');
display.innerHTML = '0';
//button setup

//for the numbers
const numbers = document.getElementById('numBtns');
const numBtns = numbers.querySelectorAll('button');
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const numBtnId = button.innerText;
        console.log(numBtnId);
        if (boolean == false) {
            if (checkNum == true) {
                num1 = '';
                display.innerHTML = '';
                checkNum = false;
            }
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
                console.log('your operator is: ' + operator);
                updateDisplay(operator);
            } else if (boolean == true) {
                if (num2 !== '') {
                    operate(num1, num2, operator);
                    operator = button.innerText;
                    boolean = true;
                    display.innerHTML = num1 + operator;
                } else {                 
                    operator = button.innerText;
                    console.log('your operator is: ' + operator);
                    display.innerHTML = num1 + operator;
                }
            }
    });
    }
});

//for equals
const equalBtn = document.getElementById('equalBtn');
equalBtn.addEventListener('click', () => {
    if (operator === '' ) {
        console.log('you need an operator...')
    } else  if (num2 === '') {
        console.log('you need a second number...')
    } else {
        operate(num1, num2, operator);
        console.log(num1, num2, operator);
    }
});

//clear button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    num1 = '';
    checkNum = false;
    clear();
    display.innerHTML = '0';
});

//backspace button
const delBtn = document.getElementById('delBtn');
delBtn.addEventListener('click', () => {
    if (boolean == false) {
        num1 = num1.slice(0, -1);
        console.log('first number is: ' + num1);
    } else if (boolean == true) {
        num2 = num2.slice(0, -1);
        console.log('second number is: ' + num2);
    }
    display.innerHTML = display.innerHTML.slice(0, -1);
});

//functions
function updateDisplay(value) {
    let currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay + value;
}

function operate(a, b, op) {
    checkNum = true;
    a = parseFloat(a);
    b = parseFloat(b);
    let answer = 0
    if (op === '+') {
        answer = add(a, b);
    } else if (op === '-') {
        answer = subtract(a, b);
    } else if (op === 'x') {
        answer = multiply(a, b);
    } else if (op === '÷') {
        answer = divide(a, b);
    }
    return display.innerHTML = round(answer).toString();
}

function add(a, b) {
    clear();
    console.log('addition answer: ' + (parseInt(a) + parseInt(b)));
    return num1 = a + b;   
}

function subtract(a, b) {
    clear();
    console.log('subtraction answer: ' + (parseInt(a) - parseInt(b)));
    return num1 = a - b;
}

function multiply(a, b) {
    clear();
    console.log('multiplication answer: ' + (parseInt(a) * parseInt(b)));
    return num1 = a * b;
}
function divide(a, b) {
    clear();
    if (b == 0) {
        num1 = 0;
        console.log('nice going');
        return display.innerHTML = "BAD!"
    } else {
        console.log('division answer: ' + (parseInt(a) / parseInt(b)));
        return num1 = a / b;
    }
    
}

function round (roundedNumber) {
    return parseFloat(Math.round(roundedNumber + 'e' + 15) + 'e-' + 15);
}

function clear() {
    operator = '';
    num2 = '';
    boolean = false;
}