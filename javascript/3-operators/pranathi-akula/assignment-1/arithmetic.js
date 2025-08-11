function getValues() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  return { value1, value2 };
}

function displayResult(result) {
  document.getElementById("result").textContent = `Result: ${result}`;
}

//add
function add() {
  const { value1, value2 } = getValues();
  displayResult(value1 + value2);
}

//subtraction
function subtract() {
  const { value1, value2 } = getValues();
  displayResult(value1 - value2);
}

//multiply
function multiply() {
  const { value1, value2 } = getValues();
  displayResult(value1 * value2);
}

//divide
function divide() {
  const { value1, value2 } = getValues();
  if (value2 === 0) {
    displayResult("Error: Division by zero");
  } else {
    displayResult(value1 / value2);
  }
}

//mod
function modulus() {
  const { value1, value2 } = getValues();
  if (value2 === 0) {
    displayResult("Error: Division by zero");
  } else {
    displayResult(value1 % value2);
  }
}

// increment
function increment() {
  const { value1 } = getValues();
  displayResult(value1 + 1);
}

// decrement
function decrement() {
  const { value1 } = getValues();
  displayResult(value1 - 1);
}
