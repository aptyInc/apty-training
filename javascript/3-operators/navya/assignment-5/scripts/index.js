const resultBox = document.getElementById("resultBox");

function convertInput(value, type) {
    if (type === "number") return Number(value);
    if (type === "boolean") return value.toLowerCase() === "true";
    return String(value);
}

function getValues() {
    let first = document.getElementById("valA").value;
    let firstType = document.getElementById("typeA").value;

    let second = document.getElementById("valB").value;
    let secondType = document.getElementById("typeB").value;

    first = convertInput(first, firstType);
    second = convertInput(second, secondType);

    return [first, second];
}

function handleAndAssign() {
    let [a, b] = getValues();
    a &&= b;
    resultBox.innerText = `Output: ${a}`;
}

function handleOrAssign() {
    let [a, b] = getValues();
    a ||= b;
    resultBox.innerText = `Output: ${a}`;
}

function handleNullishAssign() {
    let [a, b] = getValues();
    a ??= b;
    resultBox.innerText = `Output: ${a}`;
}
