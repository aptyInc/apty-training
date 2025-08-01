function andOperator() {
  let v1 = Number(document.getElementById("value1").value);
  let v2 = Number(document.getElementById("value2").value);
  document.getElementById("result").innerText = `Result: ${v1 & v2}`;
}

function orOperator() {
  let v1 = Number(document.getElementById("value1").value);
  let v2 = Number(document.getElementById("value2").value);
  document.getElementById("result").innerText = `Result: ${v1 | v2}`;
}

function xorOperator() {
  let v1 = Number(document.getElementById("value1").value);
  let v2 = Number(document.getElementById("value2").value);
  document.getElementById("result").innerText = `Result: ${v1 ^ v2}`;
}

function notOperator() {
  let v1 = Number(document.getElementById("value1").value);
  document.getElementById("result").innerText = `Result: ${~v1}`;
}

function leftShiftOperator() {
  let v1 = Number(document.getElementById("value1").value);
  let v2 = Number(document.getElementById("value2").value);
  document.getElementById("result").innerText = `Result: ${v1 << v2}`;
}

function rightShiftOperator() {
  let v1 = Number(document.getElementById("value1").value);
  let v2 = Number(document.getElementById("value2").value);
  document.getElementById("result").innerText = `Result: ${v1 >> v2}`;
}
