const firstNum = document.getElementById("numA");
const secondNum = document.getElementById("numB");
const resultBox = document.getElementById("resultBox");

function fetchValues() {
    const a = Number(firstNum.value);
    const b = Number(secondNum.value);
    return [a, b];
}

function doAdd() {
    const [a, b] = fetchValues();
    resultBox.innerHTML = `Sum = ${a + b}`;
}

function doSubtract() {
    const [a, b] = fetchValues();
    resultBox.innerHTML = `Difference = ${a - b}`;
}

function doMultiply() {
    const [a, b] = fetchValues();
    resultBox.innerHTML = `Product = ${a * b}`;
}

function doDivide() {
    const [a, b] = fetchValues();

    resultBox.innerHTML =
        b === 0
            ? "Division not possible — second value is zero"
            : `Quotient = ${a / b}`;
}

function doModulo() {
    const [a, b] = fetchValues();
    resultBox.innerHTML = `Remainder = ${a % b}`;
}

function increase() {
    let [a] = fetchValues();
    a++;
    resultBox.innerHTML = `Increment Result = ${a}`;
}

function decrease() {
    let [a] = fetchValues();
    a--;
    resultBox.innerHTML = `Decrement Result = ${a}`;
}
