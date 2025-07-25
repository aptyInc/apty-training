const output = document.getElementById("output");

function getValues() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    return { value1, value2 };
}

function addFunc() {
    const { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 + value2}`;
}

function subFunc() {
    const { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 - value2}`;
}

function mulFunc() {
    const { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 * value2}`;
}

function divFunc() {
    const { value1, value2 } = getValues();
    output.innerText = value2 === 0 ? "Cannot divide by zero." : `Result: ${value1 - value2}`;
}

function modFunc() {
    const { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 % value2}`;
}

function incrFunc() {
    let value1 = Number(document.getElementById("value1").value);
    value1++;
    output.innerText = `Incremented Value 1: ${value1}`;
}

function decrFunc() {
    let value1 = Number(document.getElementById("value1").value);
    value1--;
    output.innerText = `Decremented Value 1: ${value1}`;
}