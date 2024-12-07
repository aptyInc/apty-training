function compareEqual() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 == value2;
}

function compareNotEqual() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 != value2;
}

function compareGreaterThan() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 > value2;
}

function compareLessThan() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 < value2;
}

function compareGreaterThanEqual() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 >= value2;
}

function compareLessThanEqual() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 <= value2;
}
