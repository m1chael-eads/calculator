

number1 = 0;
number2 = 0;
operator = "";

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(numerator,denom) {
    return (numerator/denom).toFixed(2);
}

function operate(op,num1,num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    operator = op;
    if (op == "+") {
        return add(num1,num2);
    }
    else if (op == "-") {
        return subtract(num1,num2);
    }
    else if (op == "x") {
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}

function clearDisplay() {
    expText.data = "";
    resText.data = "";
}

function logExpression(button) {
    value = button.textContent;
    if (isOperation(value)) {
        expText.data += " " + value + " ";
    }
    else {
        expText.data += value;
    }
    expression.appendChild(expText);
}

function isOperation(string) {
    if (string == "+" || string == "-" || string == "x" || string == "%") {
        return true;
    }
    else return false;
}

function evaluateExp() {
    array = expText.data.split(" ");
    number1 = array[0];
    operator = array[1];
    number2 = array[2];
    resText.data = operate(operator,number1,number2);
}

const expression = document.getElementById('expression');
expression.classList.add('expression');
expText = document.createTextNode("");

const result = document.getElementById('result');
result.classList.add('result');
resText = document.createTextNode('');
result.appendChild(resText);

