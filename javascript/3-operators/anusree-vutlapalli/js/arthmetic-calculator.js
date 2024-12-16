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

// Addition function
function add() {
  const [value1, value2] = getValues();
  displayResult(value1 + value2);
}

// Subtraction function
function subtract() {
  const [value1, value2] = getValues();
  displayResult(value1 - value2);
}

// Multiplication function
function multiply() {
  const [value1, value2] = getValues();
  displayResult(value1 * value2);
}

// Division function
function divide() {
  const [value1, value2] = getValues();
  if (value2 == 0) {
      displayResult("Cannot divide by zero");
  } else {
      displayResult(value1 / value2);
  }
}

// Modulus function
function modulus() {
  const [value1, value2] = getValues();
  if (value2 == 0) {
      displayResult("Cannot perform modulus with zero");
  } else {
      displayResult(value1 % value2);
  }
}

// Increment function (works only on first input)
function increment() {
  const value1 = parseFloat(document.getElementById("value1").value);
  displayResult(value1 + 1);
}

// Decrement function (works only on first input)
function decrement() {
  const value1 = parseFloat(document.getElementById("value1").value);
  displayResult(value1 - 1);
}

// Clear function
function clearCalculator() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("result").innerHTML = "Result: ";
}