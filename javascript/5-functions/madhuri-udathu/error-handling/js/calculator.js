function calculate(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input.");
    }

    const validOperators = ["+", "-", "*", "/"];

    if (!validOperators.includes(operator)) {
        throw new Error(`Unsupported operator. Use one of ${validOperators.join(", ")}.`);
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) throw new Error("Division by zero is not allowed.");
            return num1 / num2;
        default:
            throw new Error("Unexpected error.");
    }
}

function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value.trim();
    const resultElement = document.getElementById('result');

    try {
        const result = calculate(num1, num2, operator);
        resultElement.textContent = `Result: ${result}`;
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
    }
}