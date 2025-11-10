const value1 = document.getElementById("val1");
const value2 = document.getElementById("val2");
const output = document.getElementById("output");

function getValue() {
    const first = Number(value1.value);
    const second = Number(value2.value);
    return [first, second];
}

function add() {
    let [a, b] = getValue();
    a += b;
    output.innerHTML = `Updated Value: ${a}`;
}

function subtract() {
    let [a, b] = getValue();
    a -= b;
    output.innerHTML = `Updated Value: ${a}`;
}

function multiply() {
    let [a, b] = getValue();
    a *= b;
    output.innerHTML = `Updated Value: ${a}`;
}

function divide() {
    let [a, b] = getValue();
    if (b === 0) {
        output.innerHTML = "Cannot divide — second input is zero";
        return;
    }
    a /= b;
    output.innerHTML = `Updated Value: ${a}`;
}

function modulus() {
    let [a, b] = getValue();
    a %= b;
    output.innerHTML = `Updated Value: ${a}`;
}

function increment() {
    let [a] = getValue();
    a++;
    output.innerHTML = `After Increment: ${a}`;
}

function decrement() {
    let [a] = getValue();
    a--;
    output.innerHTML = `After Decrement: ${a}`;
}
