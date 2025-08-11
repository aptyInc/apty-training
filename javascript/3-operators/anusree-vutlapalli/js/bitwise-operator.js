function getInputValues() {
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);
    return [value1, value2];
}

function displayResult(result) {
    document.getElementById('result').innerHTML = "Result: " + result;
}

function bitwiseAnd() {
    const [value1, value2] = getInputValues();
    displayResult(value1 & value2);
}

function bitwiseOr() {
    const [value1, value2] = getInputValues();
    displayResult(value1 | value2);
}

function bitwiseXor() {
    const [value1, value2] = getInputValues();
    displayResult(value1 ^ value2);
}

function bitwiseNot() {
    const [value1, value2] = getInputValues(); 
    displayResult(`Bitwise NOT of value1: ${~value1}, Bitwise NOT of value2: ${~value2}`);
}

function bitwiseLeftShift() {
    const [value1, value2] = getInputValues();
    displayResult(value1 << value2);
}

function bitwiseRightShift() {
    const [value1, value2] = getInputValues();
    displayResult(value1 >> value2);
}
