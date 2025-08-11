function convert(value, type) {
  if (type === "number") return parseFloat(value);
  if (type === "boolean") return value.toLowerCase() === "true";
  return value;
}

function getInputs() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;
  const type1 = document.getElementById("type1").value;
  const type2 = document.getElementById("type2").value;

  const v1 = convert(val1, type1);
  const v2 = convert(val2, type2);
  return { v1, v2 };
}

function equal() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (==): ${v1 == v2}`;
}

function strictEqual() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (===): ${v1 === v2}`;
}

function notEqual() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (!=): ${v1 != v2}`;
}

function strictNotEqual() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (!==): ${v1 !== v2}`;
}

function greaterThan() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (>): ${v1 > v2}`;
}

function lessThan() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (<): ${v1 < v2}`;
}

function greaterThanOrEqual() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (>=): ${v1 >= v2}`;
}

function lessThanOrEqual() {
  const { v1, v2 } = getInputs();
  document.getElementById("result").innerText = `Result (<=): ${v1 <= v2}`;
}
