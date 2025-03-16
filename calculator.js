
/* TODO: Refactor logic for calculate() and appendToDisplay() so that pressing a digit button after 
performing a calculation doesnt append the digit to the result of the calculation but rather starts a 
new calculation automatically
*/

number1 = 0;
number2 = 0;
operator = "";
input = "";
termList = [];
prevCalc = false;

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
    if (denom == 0) return "nice try!"; 
    else return (numerator/denom).toFixed(2);
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

function calculate() {
    console.log("calculate() runs");
    if (termList.length < 3) {
        resText.data = termList[0];
    }
    else {
        number1 = termList[0];
        operator = termList[1];
        number2 = termList[2];
        if (termList.length == 3) {
            input = `${operate(operator,number1,number2)}`;
            termList = [];
            termList += input;
        }
        else {
            input = `${operate(operator,number1,number2)}` + ` ` +`${termList[3]} `
            termList = input.split(" ");
        }
        resText.data = operate(operator,number1,number2);
    }
    console.log(termList);
    console.log("termList length: " + termList.length);
    console.log("input: " + input);
}

function appendToDisplay(button) {
    value = button.textContent;
    if (isOperation(value)) {  
        if (input.charAt(input.length - 1) == " ") {
            input = input.substring(0,input.length - 3);
        }
        input += " " + value + " ";
    }
    else {
        if (input.charAt(input.length - 1) == " ") {
            resText.data = "";
        }
        resText.data += value;
        input += value;
    }
    termList = input.trimEnd().split(" ").filter(element => element);
    console.log(termList);
    console.log(input);
    if (termList.length > 3) {calculate();}
}

function isOperation(string) {
    if (string == "+" || string == "-" || string == "x" || string == "%") {
        return true;
    }
    else return false;
}


const result = document.getElementById('result');
result.classList.add('result');
resText = document.createTextNode('');
result.appendChild(resText);

/* Write a function called appendToDisplay(button) that stores the value of the clicked button and does the following. If the button is a number, append that number to the display and a string variable input. 
If the button is an operator, append the operator to the string variable input but not to the display and check if input needs to be simplified. If the button is =, evaluate the current expression stored in input.*/