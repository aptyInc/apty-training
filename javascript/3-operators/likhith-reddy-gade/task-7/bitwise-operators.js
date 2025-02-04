function bitwiseAnd() {
  const value1 = parseInt(document.getElementById("value1").value, 10);
  const value2 = parseInt(document.getElementById("value2").value, 10);
  document.getElementById("result").textContent = value1 & value2;
}

function bitwiseOr() {
  const value1 = parseInt(document.getElementById("value1").value, 10);
  const value2 = parseInt(document.getElementById("value2").value, 10);
  document.getElementById("result").textContent = value1 | value2;
}

function bitwiseXor() {
  const value1 = parseInt(document.getElementById("value1").value, 10);
  const value2 = parseInt(document.getElementById("value2").value, 10);
  document.getElementById("result").textContent = value1 ^ value2;
}

function bitwiseNot() {
  const value1 = parseInt(document.getElementById("value1").value, 10);
  document.getElementById("result").textContent = ~value1;
}

function leftShift() {
  const value1 = parseInt(document.getElementById("value1").value, 10);
  const value2 = parseInt(document.getElementById("value2").value, 10);
  document.getElementById("result").textContent = value1 << value2;
}

function rightShift() {
  const value1 = parseInt(document.getElementById("value1").value, 10);
  const value2 = parseInt(document.getElementById("value2").value, 10);
  document.getElementById("result").textContent = value1 >> value2;
}
