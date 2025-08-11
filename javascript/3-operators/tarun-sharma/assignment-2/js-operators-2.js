//took help of chat gpt to write this code

function getValues(){
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);

    return {value1, value2};
    
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}

function add() {
    const { value1, value2 } = getValues();
    const result = value1 + value2;
    displayResult(`Result: ${result}`);
}

function subtract() {
    const { value1, value2 } = getValues();
    const result = value1 - value2;
    displayResult(`Result: ${result}`);
}

function multiply() {
    const { value1, value2 } = getValues();
    const result = value1 * value2;
    displayResult(`Result: ${result}`);
}

function divide() {
    const { value1, value2 } = getValues();
    const result = value1 / value2;
    displayResult(`Result: ${result}`);
}

function modulus() {
    const { value1, value2 } = getValues();
    const result = value1 % value2;
    displayResult(`Result: ${result}`);
}

function increment() {
    const { value1, value2 } = getValues();
    const result = value1 + 1;
    displayResult(`Result: ${result}`);
}

function decrement() {
    const { value1, value2 } = getValues();
    const result = value1 - 1;
    displayResult(`Result: ${result}`);
}

function addition() {
    var { value1, value2 } = getValues();
    value1 += value2;
    displayResult(`Result: ${value1}`);
}

function subtraction() {
    var { value1, value2 } = getValues();
    value1 -= value2;
    displayResult(`Result: ${value1}`);
}

function multiplication() {
    var { value1, value2 } = getValues();
    value1 *= value2;
    displayResult(`Result: ${value1}`);
}

function division() {
    var { value1, value2 } = getValues();
    value1 /= value2;
    displayResult(`Result: ${value1}`);
}

function modulusAssignment() {
    var { value1, value2 } = getValues();
    value1 %= value2;
    displayResult(`Result: ${value1}`);
}





