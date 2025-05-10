function logicalAnd() {
  const value1 = Boolean(document.getElementById("value1").value);
  const value2 = Boolean(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 && value2;
}

function logicalOr() {
  const value1 = Boolean(document.getElementById("value1").value);
  const value2 = Boolean(document.getElementById("value2").value);
  document.getElementById("result").textContent = value1 || value2;
}

function logicalNot() {
  const value1 = Boolean(document.getElementById("value1").value);
  document.getElementById("result").textContent = !value1;
}
