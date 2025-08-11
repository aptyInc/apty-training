function convert(value, type) {
  if (type === "number") return parseFloat(value);
  if (type === "boolean") return value.toLowerCase() === "true";
  if (type === "null") return null;
  return value;
}

function getInputs() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;
  const type1 = document.getElementById("type1").value;
  const type2 = document.getElementById("type2").value;

  let v1 = convert(val1, type1);
  let v2 = convert(val2, type2);

  return { v1, v2 };
}

function logicalAndAssign() {
  let { v1, v2 } = getInputs();
  v1 &&= v2;
  document.getElementById("result").innerText = `Result (v1 &&= v2): ${v1}`;
}

function logicalOrAssign() {
  let { v1, v2 } = getInputs();
  v1 ||= v2;
  document.getElementById("result").innerText = `Result (v1 ||= v2): ${v1}`;
}

function nullishAssign() {
  let { v1, v2 } = getInputs();
  v1 ??= v2;
  document.getElementById("result").innerText = `Result (v1 ??= v2): ${v1}`;
}
