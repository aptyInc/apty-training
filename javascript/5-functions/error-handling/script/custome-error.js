
function calculate(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input. Both inputs must be numbers.");
    }

    const supportedOperators = ["+", "-", "*", "/", "%"];
    if (!supportedOperators.includes(operator)) {
        throw new Error(`Unsupported operator. Supported operators are: ${supportedOperators.join(", ")}.`);
    }


    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
        case "/":
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Unexpected error occurred.");
    }
}


document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;
    const outputElement = document.getElementById("result");

    try {
        const result = calculate(num1, num2, operator);
        outputElement.innerText = `Result: ${result}`;
        outputElement.style.color = "green";
    } catch (error) {
        outputElement.innerText = `Error: ${error.message}`;
        outputElement.style.color = "red";
    }
})
