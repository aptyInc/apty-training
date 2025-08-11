function calculate() {
    const num1 = document.getElementById('num1').value;
    const operator = document.getElementById('operator').value;
    const num2 = document.getElementById('num2').value;
    let result;

    try {
        if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
            throw new Error("Both inputs must be valid integers.");
        }

        const number1 = parseInt(num1);
        const number2 = parseInt(num2);

        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '%':
                result = number1 % number2;
                break;
            case '/':
                if (number2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                result = Math.floor(number1 / number2); 
                break;
            default:
                throw new Error("Unsupported operator. Use +, -, *, %, or /.");
        }

        document.getElementById('result').textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
}