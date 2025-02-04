function getInputValues() {
    let value1 = parseFloat(document.getElementById('value1').value) || 0;
    const value2 = parseFloat(document.getElementById('value2').value) || 0;
    return { value1, value2 };
}

function add() {
    let { value1, value2 } = getInputValues();
    value1 += value2; 
    document.getElementById('result').innerText = `Result: ${value1}`;
}

function subtract() {
    let { value1, value2 } = getInputValues();
    value1 -= value2; 
    document.getElementById('result').innerText = `Result: ${value1}`;
}

function multiply() {
    let { value1, value2 } = getInputValues();
    value1 *= value2; 
    document.getElementById('result').innerText = `Result: ${value1}`;
}

function divide() {
    let { value1, value2 } = getInputValues();
    if (value2 !== 0) {
        value1 /= value2;
        document.getElementById('result').innerText = `Result: ${value1}`;
    } else {
        document.getElementById('result').innerText = `Result: Division by zero is not allowed`;
    }
}

function modulus() {
    let { value1, value2 } = getInputValues();
    value1 %= value2; 
    document.getElementById('result').innerText = `Result: ${value1}`;
}

function increment() {
    let { value1 } = getInputValues();
    value1++; 
    document.getElementById('result').innerText = `Result: ${value1}`;
}

function decrement() {
    let { value1 } = getInputValues();
    value1--; 
    document.getElementById('result').innerText = `Result: ${value1}`;
}