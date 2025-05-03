//variables
let num1 = '';
let operator = '';
let num2 = '';
let boolean = false; //false is for first number, true is for second number
let checkNum = true; //used to set the display to show 0
const display = document.querySelector('h3');
display.textContent = '0';
let decNum = false;
let decBtnCheck = false; //check if a decimal is in place
let backspaceClear = false; //if user hits backspace on answer, set to 0

//button setup

//for the numbers
const numbers = document.getElementById('numBtns');
const decBtn = document.getElementById('decBtn');
const numBtns = numbers.querySelectorAll('button');
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const numBtnId = button.innerText;
        console.log(numBtnId);
        if (numBtnId == '.') {
            if (decBtnCheck == false) {
                decBtnCheck = true;
                decBtn.disabled = true;
                decNum = true;
            }
        }
        if (boolean == false) {
            if (checkNum == true) {
                num1 = '';
                display.textContent = '';
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
                decBtnCheck = false;
                decBtn.disabled = false;
                console.log('your operator is: ' + operator);
                updateDisplay(operator);
            } else if (boolean == true) {
                if (num2 !== '') {
                    operate(num1, num2, operator);
                    operator = button.innerText;
                    boolean = true;
                    display.textContent = num1 + operator;
                } else {                 
                    operator = button.innerText;
                    console.log('your operator is: ' + operator);
                    display.textContent = num1 + operator;
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
        backspaceClear = true;
        decBtn.disabled = true;
    }
});

//clear button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    num1 = '';
    checkNum = true;
    clear();
    display.textContent = '0';
});

//backspace button
const delBtn = document.getElementById('delBtn');
delBtn.addEventListener('click', () => {
        const strIndex = display.textContent.length - 1;
        console.log('index str: ' + strIndex);
        const prevChar = display.textContent.charAt(strIndex).toString();
        console.log(prevChar);
        if (/^\d$/.test(prevChar) || prevChar === '.') {
            console.log('prev number: ' + prevChar);
            if (prevChar === '.') { //if deleting a decimal, set check back to false
                decBtnCheck = false;
                decBtn.disabled = false;
                decNum = false;
            }
            if (boolean == false) { //1st number
                if (backspaceClear === true) { //check if user is deleting the original answer
                    num1 = '';
                    checkNum = true;
                    clear();
                    display.textContent = '0';
                } else {
                    num1 = num1.toString().slice(0, -1);
                    console.log('first number is: ' + num1);
                    if (num1 !== '0') { //check to see if there is a first number
                        display.textContent = display.textContent.slice(0, -1);
                    }
                
                    if (num1 === '-' || num1 === '') { //reset display when remaining str is a - or nothing
                        checkNum = true;
                        display.textContent = '0';
                        num1 = 0;
                    }
                }
                
            } else if (boolean == true) { //2nd number
                num2 = num2.toString().slice(0, -1);
                console.log('second number is: ' + num2);
                display.textContent = display.textContent.slice(0, -1);
            } 
        } else if (prevChar === ')') { //check if the number is negative
            display.textContent = display.textContent.slice(0, -2) + ')';
            console.log('we are at thgis point');
            num2 = num2.toString().slice(0, -1);
            console.log(num2);
        } else { //when deleting an operator
            boolean = false;
            display.textContent = display.textContent.slice(0, -1);
            if (backspaceClear === true) {
                decBtnCheck = true;
                decBtn.disabled = true;
            } else {
                if (decNum === false) {
                    decBtnCheck = false;
                    decBtn.disabled = false;
                } else {
                    decBtnCheck = true;
                    decBtn.disabled = true;
                }
            }
        }
    });
    
//positive and negative
const posNegBtn = document.getElementById('posNegBtn');
posNegBtn.addEventListener('click', () => {
    if (boolean == false) {
        num1 = num1 * -1;
        if (num1 < 0) {
            display.textContent = num1;
        } else {
            display.textContent = num1;
        }
        console.log('first number is: ' + num1);
    } else if (boolean == true && num2 !== '') {
        num2 = num2 * -1;
        if (num2 < 0) {
            display.textContent = num1 + operator + '(' + num2 + ')';
        } else {
            display.textContent = num1 + operator +  num2;
        }
        console.log('second number is: ' + num2);
    }
    
});

//functions
function updateDisplay(value) {
    let currentDisplay = display.textContent;
    display.textContent = currentDisplay + value;
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
    return display.textContent = round(answer).toString();
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
        return display.textContent = "BAD!"
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
    decBtnCheck = false;
    decBtn.disabled = false;
    decNum = false;
    backspaceClear = false;
}