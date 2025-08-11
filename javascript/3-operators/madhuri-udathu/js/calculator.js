function getInputValues() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    return {value1, value2};
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}

function add() {
    const { value1, value2 } = getInputValues();
    const result = value1 + value2;
    displayResult(result);
}

function subtract() {
    const { value1, value2 } = getInputValues();
    const result = value1 - value2;
    displayResult(result);
}

function multiply() {
    const { value1, value2 } = getInputValues();
    const result = value1 * value2;
    displayResult(result);
}

function divide() {
    const { value1, value2 } = getInputValues();
    if (value2 !== 0) {
        const result = value1 / value2;
        displayResult(result);
    } else {
        displayResult("Error: Division by zero");
    }
}

function modulus() {
    const { value1, value2 } = getInputValues();
    const result = value1 % value2;
    displayResult(result);
}

function increment() {
    const { value1 } = getInputValues();
    const result = value1 + 1;
    displayResult(result);
}

function decrement() {
    const { value1 } = getInputValues();
    const result = value1 - 1;
    displayResult(result);
}
function clears() {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    const result = 0;
    displayResult(result);
}