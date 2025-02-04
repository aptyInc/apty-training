function calculate(operator) {
  // Fetch input values
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if inputs are valid
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  // Perform the operation based on the operator
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
      result = num2 !== 0 ? num1 / num2 : "Error: Division by 0";
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Invalid Operator";
  }

  // Display the result
  document.getElementById("result").textContent = result;
}
