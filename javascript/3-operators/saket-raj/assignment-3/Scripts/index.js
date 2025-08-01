function equalTo() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 == v2;
}

function strictEqualTo() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 === v2;
}

function notEqualTo() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 != v2;
}

function strictNotEqualTo() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 !== v2;
}

function greaterThan() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 > v2;
}

function lessThan() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 < v2;
}

function greaterThanOrEqual() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 >= v2;
}

function lessThanOrEqual() {
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;
  let t1 = document.getElementById("type1").value;
  let t2 = document.getElementById("type2").value;

  if (t1 === "number") v1 = Number(v1);
  if (t1 === "boolean") v1 = v1 === "true";
  if (t2 === "number") v2 = Number(v2);
  if (t2 === "boolean") v2 = v2 === "true";

  document.getElementById("result").innerText = v1 <= v2;
}
