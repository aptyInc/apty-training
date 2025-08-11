function getInputValues() {
  const value1 = parseInt(document.getElementById("value1").value);
  const value2 = parseInt(document.getElementById("value2").value);
  return { value1, value2 };
}

// Bitwise AND
function bitwiseAND() {
  const { value1, value2 } = getInputValues();
  const result = value1 & value2;
  document.getElementById(
    "result"
  ).textContent = `Result of ${value1} & ${value2} = ${result}`;
}

// Bitwise OR
function bitwiseOR() {
  const { value1, value2 } = getInputValues();
  const result = value1 | value2;
  document.getElementById(
    "result"
  ).textContent = `Result of ${value1} | ${value2} = ${result}`;
}

// Bitwise XOR
function bitwiseXOR() {
  const { value1, value2 } = getInputValues();
  const result = value1 ^ value2;
  document.getElementById(
    "result"
  ).textContent = `Result of ${value1} ^ ${value2} = ${result}`;
}

// Bitwise NOT
function bitwiseNOT() {
  const value1 = parseInt(document.getElementById("value1").value);
  if (isNaN(value1)) {
    document.getElementById("result").textContent =
      "Please enter a valid number for Value 1.";
    return;
  }
  const result = ~value1;
  document.getElementById(
    "result"
  ).textContent = `Result of ~${value1} = ${result}`;
}

// Bitwise Left Shift
function bitwiseLeftShift() {
  const { value1, value2 } = getInputValues();
  const result = value1 << value2;
  document.getElementById(
    "result"
  ).textContent = `Result of ${value1} << ${value2} = ${result}`;
}

// Bitwise Right Shift
function bitwiseRightShift() {
  const { value1, value2 } = getInputValues();
  const result = value1 >> value2;
  document.getElementById(
    "result"
  ).textContent = `Result of ${value1} >> ${value2} = ${result}`;
}
