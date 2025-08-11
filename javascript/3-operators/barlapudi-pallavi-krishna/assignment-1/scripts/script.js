function getValues() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;
  return { val1, val2 };
}

function add() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result: ${val1 + val2}`;
}

function subtract() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result: ${val1 - val2}`;
}

function multiply() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result: ${val1 * val2}`;
}

function divide() {
  const { val1, val2 } = getValues();
  if (val2 === 0) {
    document.getElementById("result").innerText = "Error: Division by zero!";
  } else {
    document.getElementById("result").innerText = `Result: ${val1 / val2}`;
  }
}

function modulus() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result: ${val1 % val2}`;
}

function increment() {
  let val1 = document.getElementById("value1").value;
  val1++;
  document.getElementById("result").innerText = `Incremented value1: ${val1}`;
}

function decrement() {
  let val1 = document.getElementById("value1").value;
  val1--;
  document.getElementById("result").innerText = `Decremented value1: ${val1}`;
}