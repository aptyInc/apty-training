const output = document.getElementById("output");

function getValues() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);

    return { value1, value2 };
}

function addFunc() {
    let { value1, value2 } = getValues();
    value1 += value2;
    output.innerText = `Result: ${value1}`;
}


function subFunc() {
    let { value1, value2 } = getValues();
    value1 -= value2;
    output.innerText = `Result: ${value1}`;
}

function mulFunc() {
    let { value1, value2 } = getValues();
    value1 *= value2;
    output.innerText = `Result: ${value1}`;
}

function divFunc() {
    let { value1, value2 } = getValues();
    if (value2 === 0) {
        output.innerText = "Cannot divide by zero.";
    }
    else {
        value1 /= value2;
        output.innerText = `Result: ${value1}`;
    }
}

function modFunc() {
    let { value1, value2 } = getValues();
    value1 %= value2;
    output.innerText = `Result: ${value1}`;
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