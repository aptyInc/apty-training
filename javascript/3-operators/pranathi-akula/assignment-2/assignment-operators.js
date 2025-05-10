function getValues() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  return { value1, value2 };
}
function displayResult(result) {
  document.getElementById("result").textContent = `Result: ${result}`;
}

//add
function addition() {
  const values = getValues();
  if (values) {
    let { value1, value2 } = values;
    value1 += value2;
    displayResult(value1);
  }
}

//subtract
function subtract() {
  const values = getValues();
  if (values) {
    let { value1, value2 } = values;
    value1 -= value2;
    displayResult(value1);
  }
}

// Multiply
function multiply() {
  const values = getValues();
  if (values) {
    let { value1, value2 } = values;
    value1 *= value2;
    displayResult(value1);
  }
}

// Divide
function divide() {
  const values = getValues();
  if (values) {
    let { value1, value2 } = values;
    if (value2 === 0) {
      displayResult("Error: Division by zero");
    } else {
      value1 /= value2;
      displayResult(value1);
    }
  }
}

// Modulus
function modulus() {
  const values = getValues();
  if (values) {
    let { value1, value2 } = values;
    if (value2 === 0) {
      displayResult("Error: Division by zero");
    } else {
      value1 %= value2;
      displayResult(value1);
    }
  }
}
