function calculate(num1, num2, operator) {
    try {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Both inputs must be numbers.");
      }
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          if (num2 === 0)
            throw new Error("Division by zero is not allowed.");
          return num1 / num2;
        default:
          throw new Error("Unsupported operator. Use +, -, *, or /.");
      }
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  document
    .getElementById("calculateButton")
    .addEventListener("click", function () {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operator = document.getElementById("operator").value;
      const result = calculate(num1, num2, operator);
      document.getElementById("output").textContent = `Result: ${result}`;
    });
