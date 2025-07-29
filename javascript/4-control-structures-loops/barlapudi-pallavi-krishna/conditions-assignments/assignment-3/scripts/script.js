function calculate(operator) {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("results").innerText =
      "Please enter valid numbers in both fields.";
    return;
  }

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
      if (num2 === 0) {
        document.getElementById("results").innerText = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      document.getElementById("results").innerText = "Unknown operator.";
      return;
  }

  document.getElementById("results").innerText = "Result: " + result;
}
