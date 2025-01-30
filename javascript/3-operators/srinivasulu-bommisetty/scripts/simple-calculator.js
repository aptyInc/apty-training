//   addition
function add() {
  let value1 = parseFloat(document.getElementById("value1").value);
  let value2 = parseFloat(document.getElementById("value2").value);
  let result = value1 + value2;
  document.getElementById("result").innerHTML = `Result: ${result}`;
}

//  subtract
function subtract() {
  let value1 = parseFloat(document.getElementById("value1").value);
  let value2 = parseFloat(document.getElementById("value2").value);
  let result = value1 - value2;
  document.getElementById("result").innerHTML = `Result: ${result}`;
}

//  multiply
function multiply() {
  let value1 = parseFloat(document.getElementById("value1").value);
  let value2 = parseFloat(document.getElementById("value2").value);
  let result = value1 * value2;
  document.getElementById("result").innerHTML = `Result: ${result}`;
}

//  divide
function divide() {
  let value1 = parseFloat(document.getElementById("value1").value);
  let value2 = parseFloat(document.getElementById("value2").value);
  if (value2 === 0) {
    document.getElementById("result").innerHTML = "Error: Division by zero!";
  } else {
    let result = value1 / value2;
    document.getElementById("result").innerHTML = `Result: ${result}`;
  }
}

//  modulus
function modulus() {
  let value1 = parseFloat(document.getElementById("value1").value);
  let value2 = parseFloat(document.getElementById("value2").value);
  let result = value1 % value2;
  document.getElementById("result").innerHTML = `Result: ${result}`;
}

// increment
function increment() {
  let value1 = parseFloat(document.getElementById("value1").value);
  value1++;
  document.getElementById("value1").value = value1;
  document.getElementById("result").innerHTML = `Incremented Value1: ${value1}`;
}

// decrement
function decrement() {
  let value1 = parseFloat(document.getElementById("value1").value);
  value1--;
  document.getElementById("value1").value = value1;
  document.getElementById("result").innerHTML = `Decremented Value1: ${value1}`;
}
