// Function to get values from inputs
function getValues() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    return [value1, value2];
  }
  
  // Function to display result
  function displayResult(result) {
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  
  // Addition with Assignment Operator (+=)
  function add() {
    let [value1, value2] = getValues();
    value1 += value2; // value1 = value1 + value2
    displayResult(value1);
  }
  
  // Subtraction with Assignment Operator (-=)
  function subtract() {
    let [value1, value2] = getValues();
    value1 -= value2; // value1 = value1 - value2
    displayResult(value1);
  }
  
  // Multiplication with Assignment Operator (*=)
  function multiply() {
    let [value1, value2] = getValues();
    value1 *= value2; // value1 = value1 * value2
    displayResult(value1);
  }
  
  // Division with Assignment Operator (/=)
  function divide() {
    let [value1, value2] = getValues();
    if (value2 == 0) {
      displayResult("Cannot divide by zero");
    } else {
      value1 /= value2; // value1 = value1 / value2
      displayResult(value1);
    }
  }
  
  // Modulus with Assignment Operator (%=)
  function modulus() {
    let [value1, value2] = getValues();
    if (value2 == 0) {
      displayResult("Cannot perform modulus with zero");
    } else {
      value1 %= value2; // value1 = value1 % value2
      displayResult(value1);
    }
  }
  
  // Increment with Assignment Operator (++)
  function increment() {
    let value1 = parseFloat(document.getElementById("value1").value);
    value1++; // value1 = value1 + 1
    displayResult(value1);
  }
  
  // Decrement with Assignment Operator (--)
  function decrement() {
    let value1 = parseFloat(document.getElementById("value1").value);
    value1--; // value1 = value1 - 1
    displayResult(value1);
  }
  
  // Clear function
  function clearCalculator() {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("result").innerHTML = "Result: ";
  }
  