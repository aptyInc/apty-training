function getInputValues() {
    const value1 = parseFloat(document.getElementById('value1').value) || 0;
    const value2 = parseFloat(document.getElementById('value2').value) || 0;
    return { value1, value2 };
}

function add() {
    const { value1, value2 } = getInputValues();
    document.getElementById('result').innerText = `Result: ${value1 + value2}`;
}

function subtract() {
    const { value1, value2 } = getInputValues();
    document.getElementById('result').innerText = `Result: ${value1 - value2}`;
}

function multiply() {
    const { value1, value2 } = getInputValues();
    document.getElementById('result').innerText = `Result: ${value1 * value2}`;
}

function divide() {
    const { value1, value2 } = getInputValues();
    if (value2 !== 0) {
        document.getElementById('result').innerText = `Result: ${value1 / value2}`;
    } else {
        document.getElementById('result').innerText = `Result: Division by zero is not allowed`;
    }
}

function modulus() {
    const { value1, value2 } = getInputValues();
    document.getElementById('result').innerText = `Result: ${value1 % value2}`;
}

function increment() {
    const { value1 } = getInputValues();
    document.getElementById('result').innerText = `Result: ${value1 + 1}`;
}

function decrement() {
    const { value1 } = getInputValues();
    document.getElementById('result').innerText = `Result: ${value1 - 1}`;
}