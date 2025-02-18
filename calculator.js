

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

const newDiv = document.createElement("div");
const text = document.createTextNode("1+1=2");
newDiv.appendChild(text);
const location = document.querySelector("display");
location.appendChild(newDiv);

console.log(add(5,7));
console.log(subtract(10,5));
console.log(multiply(10,10));
console.log(divide(10,5));