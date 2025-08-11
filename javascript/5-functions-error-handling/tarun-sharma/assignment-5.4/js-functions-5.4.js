
        
        function calculate(num1, num2, operator) {
           
            if (isNaN(num1) || isNaN(num2)) {

                throw new Error("Invalid number input. Please provide valid numbers.");

            }

            
            const supportedOperators = ["+", "-", "*", "/"];
            
            if (!supportedOperators.includes(operator)) {

                throw new Error(`Unsupported operator '${operator}'. Use one of: ${supportedOperators.join(", ")}.`);
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
                    throw new Error("Unknown error occurred.");
            }
        }

        
        function performCalculation() {
            const number1 = parseFloat(document.getElementById("number1").value);

            const number2 = parseFloat(document.getElementById("number2").value);
            const operator = document.getElementById("operator").value;

            try {
                
                const result = calculate(number1, number2, operator);
                document.getElementById("result").innerText = `Result: ${result}`;

            } catch (error) {
                
                document.getElementById("result").innerText = `Error: ${error.message}`;

            }
        }