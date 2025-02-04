function getInputValues() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  if (isNaN(value1) || (isNaN(value2) && !isNaN(value2))) {
    document.getElementById("result").textContent =
      "Please enter valid numbers!";
    return null; // Return null if inputs are invalid
  }
  return { value1, value2 };
}

function add() {
  const inputs = getInputValues();
  if (!inputs) return;
  document.getElementById("result").textContent = inputs.value1 + inputs.value2;
}

function subtract() {
  const inputs = getInputValues();
  if (!inputs) return;
  document.getElementById("result").textContent = inputs.value1 - inputs.value2;
}

function multiply() {
  const inputs = getInputValues();
  if (!inputs) return;
  document.getElementById("result").textContent = inputs.value1 * inputs.value2;
}

function divide() {
  const inputs = getInputValues();
  if (!inputs) return;
  if (inputs.value2 === 0) {
    document.getElementById("result").textContent =
      "Division by zero is not allowed!";
    return;
  }
  document.getElementById("result").textContent = inputs.value1 / inputs.value2;
}

function modulus() {
  const inputs = getInputValues();
  if (!inputs) return;
  document.getElementById("result").textContent = inputs.value1 % inputs.value2;
}

function increment() {
  let value1 = parseFloat(document.getElementById("value1").value);
  if (isNaN(value1)) {
    document.getElementById("result").textContent =
      "Please enter a valid number in Value 1!";
    return;
  }
  value1++;
  document.getElementById("value1").value = value1;
  document.getElementById(
    "result"
  ).textContent = `Incremented Value 1: ${value1}`;
}

function decrement() {
  let value1 = parseFloat(document.getElementById("value1").value);
  if (isNaN(value1)) {
    document.getElementById("result").textContent =
      "Please enter a valid number in Value 1!";
    return;
  }
  value1--;
  document.getElementById("value1").value = value1;
  document.getElementById(
    "result"
  ).textContent = `Decremented Value 1: ${value1}`;
}
