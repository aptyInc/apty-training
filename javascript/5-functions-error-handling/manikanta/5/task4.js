function calculate() {
            
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result = document.getElementById('result');

    try {
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid number input.");
        }

        
        if (!['+', '-', '*', '/'].includes(operator)) {
            throw new Error("Unsupported operator.");
        }

       
        let calculation;
        switch (operator) {
            case '+':
                calculation = num1 + num2;
                break;
            case '-':
                calculation = num1 - num2;
                break;
            case '*':
                calculation = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                calculation = num1 / num2;
                break;
            default:
                throw new Error("Unsupported operator.");
        }

       
        result.textContent = "Result: " + calculation;
    } catch (e) {
        result.textContent = "Error: " + e.message;
    }
}