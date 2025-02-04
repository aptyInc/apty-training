function customErrorCreating(firstNumber, secondNumber, operator) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error("Invalid number input. Please enter numeric values");
    }
    const operatorsArray = ["+", "-", "*", "/"];
    if (!operatorsArray.includes(operator)) {
        throw new Error(`Unsupported operator ${operator}. Please use one of: ${operatorsArray.join(", ")}`);
    }
}

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            if (secondNumber === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return firstNumber / secondNumber;
        default:
            throw new Error("Unexpected error in calculation.");
    }
}

function onThrowingCustomErrors() {
    const firstNumberElement = document.getElementById("firstNumber");
    const secondNumberElement = document.getElementById("secondNumber");
    const operatorElement = document.getElementById("operator");
    const resultElement = document.getElementById("result");
    const firstNumber = parseFloat(firstNumberElement.value);
    const secondNumber = parseFloat(secondNumberElement.value);
    const operator = operatorElement.value.trim();

    try {
        customErrorCreating(firstNumber, secondNumber, operator);
        const result = calculate(firstNumber, secondNumber, operator);
        resultElement.textContent = `Result: ${result}`;
        resultElement.style.color = "green";
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
        resultElement.style.color = "red";
    }
}
