function getValues() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    return { value1, value2 };
  }
  
  function displayResult(result) {
    document.getElementById("result").textContent = `Result: ${result}`;
  }
  
  function calculate(operator) {
    const { value1, value2 } = getValues();
  
    switch (operator) {
      case "+":
        displayResult(value1 + value2);
        break;
      case "-":
        displayResult(value1 - value2);
        break;
      case "*":
        displayResult(value1 * value2);
        break;
      case "/":
        displayResult(value2 === 0 ? "Error: Division by zero" : value1 / value2);
        break;
      case "%":
        displayResult(value2 === 0 ? "Error: Division by zero" : value1 % value2);
        break;
      case "++":
        displayResult(value1 + 1);
        break;
      case "--":
        displayResult(value1 - 1);
        break;
      default:
        displayResult("Invalid operation");
    }
  }