let a;
let b;
let o;

const display = document.querySelector("#display");
const content = document.createElement("div");

content.classList.add("display");
content.textContent = "0";
let isSecondOperand = false;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (!isNaN(value)) { // Check if it's a digit
            if (!isSecondOperand) {
                a = (a || '') + value; // Build `a` as a string
                a = parseInt(a);
                isSecondOperand = true;
                // console.log(a);
            } else {
                b = (b || '') + value;
                b = parseInt(value);
                isSecondOperand = false;
                // console.log(b);
            }
        } else if (value === "=") {
            const result = operate(a, o, b);
            content.textContent = result;
            a = result; // Keep result for next calculation
            b = null;
            o = '';
        } else if (value === "AC") {
            content.textContent = '';
            a = null;
            b = null;
            o = '';
            isSecondOperand = false;
        } else {
            o = value;
            // console.log(o);
        }
        content.textContent = `${a || '0'} ${o || ''} ${b || ''}`;
    });
});

display.appendChild(content);



function operate (a, o , b){
    if (o === '+') {
        return addition(a, b);
    } else if (o === '-') {
        return subtract(a, b);
    } else if (o === '/') {
        return divide(a, b);
    } else if (o === '*') {
        return multiply(a, b);
    }
}

function addition(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function divide(a, b) {
    return b === 0 ? "Error" : a / b;
}

function multiply(a, b){
    return a*b;
}