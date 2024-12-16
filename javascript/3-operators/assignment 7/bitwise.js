function getInputValues() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    return { value1, value2 };
}


function displayResult(result) {
    document.getElementById("result").innerText = `Result: ${result}`;
}

function bitwiseAnd() {
    const { value1, value2 } = getInputValues();
    const result = value1 & value2;
    displayResult(result);
}


function bitwiseOr() {
    const { value1, value2 } = getInputValues();
    const result = value1 | value2;
    displayResult(result);
}


function bitwiseXor() {
    const { value1, value2 } = getInputValues();
    const result = value1 ^ value2;
    displayResult(result);
}


function bitwiseNot() {
    const { value1 } = getInputValues();
    const result = ~value1; 
    displayResult(result);
}


function leftShift() {
    const { value1, value2 } = getInputValues();
    const result = value1 << value2;
    displayResult(result);
}

function rightShift() {
    const { value1, value2 } = getInputValues();
    const result = value1 >> value2;
    displayResult(result);
}