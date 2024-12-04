function getInputValues() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  if (isNaN(value1) || (isNaN(value2) && !isNaN(value2))) {
    document.getElementById("result").textContent =
      "Please enter valid numbers!";
    return null;
  }
  return { value1, value2 };
}

function addAssign() {
  const inputs = getInputValues();
  if (!inputs) return;
  inputs.value1 += inputs.value2;
  document.getElementById("value1").value = inputs.value1;
  document.getElementById("result").textContent = `Result: ${inputs.value1}`;
}

function subtractAssign() {
  const inputs = getInputValues();
  if (!inputs) return;
  inputs.value1 -= inputs.value2;
  document.getElementById("value1").value = inputs.value1;
  document.getElementById("result").textContent = `Result: ${inputs.value1}`;
}

function multiplyAssign() {
  const inputs = getInputValues();
  if (!inputs) return;
  inputs.value1 *= inputs.value2;
  document.getElementById("value1").value = inputs.value1;
  document.getElementById("result").textContent = `Result: ${inputs.value1}`;
}

function divideAssign() {
  const inputs = getInputValues();
  if (!inputs) return;
  if (inputs.value2 === 0) {
    document.getElementById("result").textContent =
      "Division by zero is not allowed!";
    return;
  }
  inputs.value1 /= inputs.value2;
  document.getElementById("value1").value = inputs.value1;
  document.getElementById("result").textContent = `Result: ${inputs.value1}`;
}

function modulusAssign() {
  const inputs = getInputValues();
  if (!inputs) return;
  inputs.value1 %= inputs.value2;
  document.getElementById("value1").value = inputs.value1;
  document.getElementById("result").textContent = `Result: ${inputs.value1}`;
}

function incrementAssign() {
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

function decrementAssign() {
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
