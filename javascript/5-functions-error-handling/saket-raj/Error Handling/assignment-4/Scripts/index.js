function calculate(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid number input");
  }

  if (!["+", "-", "*", "/"].includes(operator)) {
    throw new Error("Unsupported operator");
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
  }
}

function performCalculation() {
  const val1 = document.getElementById("num1").value;
  const val2 = document.getElementById("num2").value;
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("result");

  try {
    const n1 = Number(val1);
    const n2 = Number(val2);
    const output = calculate(n1, n2, operator);
    result.innerText = `Result: ${output}`;
  } catch (err) {
    result.innerText = `Error: ${err.message}`;
  }
}
