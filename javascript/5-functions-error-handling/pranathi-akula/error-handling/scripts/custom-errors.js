function calculate(num1, num2, operator) {
  try {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid number input. Both inputs must be numbers.");
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
        throw new Error(
          `Unsupported operator: ${operator}. Use +, -, *, or /.`
        );
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

function Calculation() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operator = document.getElementById("operator").value;
  const resultElement = document.getElementById("result");

  const result = calculate(num1, num2, operator);
  resultElement.textContent = result;
}
