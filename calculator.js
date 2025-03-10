

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


 
function appendToDisplay(button) {
    value = button.textContent;
    if (isOperation(value)) {
        input += " " + value + " ";
    }
    else {
        if (input.charAt(input.length-1) == " ") {
            resText.data = "";
        }
        input += value;
        resText.data += value;
    }
    console.log(input);
}


/*function logExpression(button) {
    value = button.textContent;
    array = input.split(" ");
    number1 = array[0];
    number2 = array[2];
    if (array.length > 3 && number2 != "") {
        answer = operate(operator,number1,number2);
        number1 = answer;
        operator = "";
        number2 = 0;
        input = "";
    }
    if (isOperation(value)) {
        operator = value;
        input += " " + value + " ";
    }
    else {
        input += value;
    }
    console.log("input: "+ input);
    console.log("array: " + array);
    console.log("array length: " + input.split(" ").length);
    console.log("num1:" + number1);
    console.log("operator:" + operator);
    console.log("num2:" + number2);
}*/

function isOperation(string) {
    if (string == "+" || string == "-" || string == "x" || string == "%") {
        return true;
    }
    else return false;
}

function calculate() {
    array = input.split(" ");
    number1 = array[0];
    operator = array[1];
    number2 = array[2];
    resText.data = operate(operator,number1,number2);
    input = `${operate(operator,number1,number2)}`;
}

const result = document.getElementById('result');
result.classList.add('result');
resText = document.createTextNode('');
result.appendChild(resText);

