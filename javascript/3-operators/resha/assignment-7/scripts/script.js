const output = document.getElementById("output");

function getValues() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);

    return { value1, value2 };
}

function operatorAND() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 & value2}`;
}

function operatorOR() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 | value2}`;
}

function operatorXOR() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 ^ value2}`;
}

function operatorNOT() {
    let { value1 } = getValues();
    output.innerText = `Result: ${~value1}`;
}

function operatorLeftShift() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 << value2}`;
}

function operatorRightShift() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 >> value2}`;
}
