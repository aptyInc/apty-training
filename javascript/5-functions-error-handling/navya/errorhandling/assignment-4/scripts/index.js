const output = document.getElementById("output");

function calculate(a, b, operator) {


    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        throw new Error("Invalid number input.");
    }

    const validOps = ["+", "-", "*", "/", "%"];


    if (!validOps.includes(operator)) {
        throw new Error("Unsupported operator.");
    }

    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if (b === 0) throw new Error("Cannot divide by zero.");
            return a / b;
        case "%":
            if (b === 0) throw new Error("Cannot perform modulo with zero.");
            return a % b;
    }
}

function runCalculator() {
    const a = Number(document.getElementById("numA").value);
    const b = Number(document.getElementById("numB").value);
    const op = document.getElementById("operator").value.trim();

    try {
        const result = calculate(a, b, op);
        output.textContent = `Result: ${result}`;
    } catch (err) {
        output.textContent = `Error: ${err.message}`;
    }
}
