function logicalAndAssign() {
  let value1 = Boolean(document.getElementById("value1").value);
  const value2 = Boolean(document.getElementById("value2").value);
  value1 &&= value2;
  document.getElementById("result").textContent = value1;
}

function logicalOrAssign() {
  let value1 = Boolean(document.getElementById("value1").value);
  const value2 = Boolean(document.getElementById("value2").value);
  value1 ||= value2;
  document.getElementById("result").textContent = value1;
}

function nullishAssign() {
  let value1 = document.getElementById("value1").value || null;
  const value2 = document.getElementById("value2").value;
  value1 ??= value2;
  document.getElementById("result").textContent = value1;
}
