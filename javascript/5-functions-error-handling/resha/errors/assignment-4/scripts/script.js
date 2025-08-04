const output = document.getElementById('output');
const btn = document.getElementById('btn');

function calculator(val1, val2, op) {
    if (isNaN(val1) || isNaN(val2)) {
        throw new Error("Invalid number input.");
    }

    switch (op) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            if (val2 === 0) throw new Error("Cannot divide by zero.");
            return val1 / val2;
        default:
            throw new Error("Unsupported operator.");
    }
}

btn.addEventListener("click", function () {
    const val1 = Number(document.getElementById('value1').value);
    const val2 = Number(document.getElementById('value2').value);
    const op = document.getElementById('op').value;

    try {
        const res = calculator(val1, val2, op);
        output.innerText = `Result: ${res}`;
    } catch (error) {
        output.innerText = `Error: ${error.message}`;
    }
})