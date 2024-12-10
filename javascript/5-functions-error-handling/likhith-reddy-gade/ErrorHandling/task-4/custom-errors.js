document
  .getElementById("calc-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const output = document.getElementById("calc-result");

    try {
      if (isNaN(num1) || isNaN(num2)) throw new Error("Invalid number input.");
      if (!["+", "-", "*", "/"].includes(operator))
        throw new Error("Unsupported operator.");

      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
      }
      output.textContent = `Result: ${result}`;
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    }
  });
