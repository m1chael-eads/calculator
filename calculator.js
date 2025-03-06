

number1 = 0;
number2 = 0;
operator = "";
input = "";

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
    input = "";
    resText.data = "";
}


/* Write a function that displays only a single number at a time on the screen. 
function logExpression(button) {
    value = button.textContent;
    if (isOperation(value)) {
        operator = value;
        input += " " + value + " ";
    }
    else {
        resText.data += value;
        input += value;
    }
    
}
*/

function logExpression(button) {
    value = button.textContent;
    if (isOperation(value) && operator == "") {
        operator = value;
        number1 = input
    }
    else {
        input += value;
    }
    console.log(input);
}

function isOperation(string) {
    if (string == "+" || string == "-" || string == "x" || string == "%") {
        return true;
    }
    else return false;
}

function evaluateExp() {
    console.log(input);
    array = input.split(" ");
    number1 = array[0];
    number2 = array[2];
    resText.data = operate(operator,number1,number2);
    input = `${operate(operator,number1,number2)}`;
}

const result = document.getElementById('result');
result.classList.add('result');
resText = document.createTextNode('');
result.appendChild(resText);

