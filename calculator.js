

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
    return numerator/denom
}

function operate(op,num1,num2) {
    if (op == "+") {
        return add(num1,num2);
    }
    else if (op == "-") {
        return subtract(num1,num2);
    }
    else if (op == "*") {
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}
const expression = document.getElementById('expression');
expression.classList.add('expression');
const expText = document.createTextNode("1+1=");
expression.appendChild(expText);
const result = document.getElementById('result');
result.classList.add('result');
const resText = document.createTextNode('2');
result.appendChild(resText);







console.log(add(5,7));
console.log(subtract(10,5));
console.log(multiply(10,10));
console.log(divide(10,5));