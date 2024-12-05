function getValues() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);

    if (isNaN(value1) || isNaN(value2)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return null;
    }

    return { value1, value2 };
}

function bitwiseAND() {
    const values = getValues();
    if (!values) return;

    const result = values.value1 & values.value2;
    document.getElementById("result").innerText = `Result: ${result}`;
}

function bitwiseOR() {
    const values = getValues();
    if (!values) return;

    const result = values.value1 | values.value2;
    document.getElementById("result").innerText = `Result: ${result}`;
}

function bitwiseXOR() {
    const values = getValues();
    if (!values) return;

    const result = values.value1 ^ values.value2;
    document.getElementById("result").innerText = `Result: ${result}`;
}

function bitwiseNOT() {
    const value1 = Number(document.getElementById("value1").value);

    if (isNaN(value1)) {
        document.getElementById("result").innerText = "Please enter a valid number for Value 1.";
        return;
    }

    const result = ~value1;
    document.getElementById("result").innerText = `Result: ${result}`;
}

function leftShift() {
    const values = getValues();
    if (!values) return;

    const result = values.value1 << values.value2;
    document.getElementById("result").innerText = `Result: ${result}`;
}

function rightShift() {
    const values = getValues();
    if (!values) return;

    const result = values.value1 >> values.value2;
    document.getElementById("result").innerText = `Result: ${result}`;
}
