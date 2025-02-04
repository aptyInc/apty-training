function calculate(num1, num2, operator) {
    // Custom error messages
    const errors = {
      invalidNumber: "Invalid number input. Please provide numeric values.",
      unsupportedOperator: "Unsupported operator. Please use one of: +, -, *, /.",
    };
  
    // Validate if the inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(errors.invalidNumber);
    }
  
    // Validate if the operator is supported
    if (!["+", "-", "*", "/"].includes(operator)) {
      throw new Error(errors.unsupportedOperator);
    }
  
    // Perform the calculation
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
        throw new Error(errors.unsupportedOperator);
    }
  }
  
  // Handle the calculation when the form is submitted
  function handleCalculate() {
    const num1Input = document.getElementById("num1").value.trim();
    const num2Input = document.getElementById("num2").value.trim();
    const operator = document.getElementById("operator").value;
    const resultDiv = document.getElementById("result");
  
    try {
      const num1 = parseFloat(num1Input);
      const num2 = parseFloat(num2Input);
  
      const result = calculate(num1, num2, operator);
      resultDiv.textContent = `Result: ${result}`;
      resultDiv.style.color = "green";
    } catch (error) {
      resultDiv.textContent = `Error: ${error.message}`;
      resultDiv.style.color = "red";
    }
  }
  