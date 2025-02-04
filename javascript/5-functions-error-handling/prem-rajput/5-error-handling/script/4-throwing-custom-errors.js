function calculate(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input.");
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
        default:
        throw new Error("Unsupported operator. Use +, -, *, or /.");
    }
}

function handleCalculation() {
    const num1 = parseFloat(document.getElementById("num1").value.trim());
    const num2 = parseFloat(document.getElementById("num2").value.trim());
    const operator = document.getElementById("operator").value.trim();
    const resultElement = document.getElementById("result");

    try {
        const result = calculate(num1, num2, operator);
        resultElement.style.color = "green";
        resultElement.textContent = `Result: ${result}`;
    } catch (error) {
        resultElement.style.color = "red";
        resultElement.textContent = `Error: ${error.message}`;
    }
}
