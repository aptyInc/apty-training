let input1 = null;
let input2 = null;
let operation = null;

function fetchInputValues() {
  const input1Field = document.getElementById("input1Field").value;
  const input2Field = document.getElementById("input2Field").value;
  input1 = input1Field ? parseFloat(input1Field) : null;
  input2 = input2Field ? parseFloat(input2Field) : null;

  if (input1 === null || isNaN(input1)) {
    alert("Please enter a valid number in Input 1.");
    return false;
  }

  if (operation !== "increment" && operation !== "decrement" && (input2 === null || isNaN(input2))) {
    alert("Please enter a valid number in Input 2 for the selected operation.");
    return false;
  }

  return true;
}

// Function to perform addition
function addValues() {
  if (fetchInputValues()) {
    const result = input1 + input2;
    document.getElementById("result").textContent = `Result: ${input1} + ${input2} = ${result}`;
  }
}

// Function to perform subtraction
function subValues() {
  if (fetchInputValues()) {
    const result = input1 - input2;
    document.getElementById("result").textContent = `Result: ${input1} - ${input2} = ${result}`;
  }
}

// Function to perform multiplication
function mulValues() {
  if (fetchInputValues()) {
    const result = input1 * input2;
    document.getElementById("result").textContent = `Result: ${input1} * ${input2} = ${result}`;
  }
}

// Function to perform division
function divValues() {
  if (fetchInputValues()) {
    if (input2 === 0) {
      alert("Division by zero is not allowed.");
      return;
    }
    const result = input1 / input2;
    document.getElementById("result").textContent = `Result: ${input1} / ${input2} = ${result}`;
  }
}

// Function to perform modulus
function modValues() {
  if (fetchInputValues()) {
    const result = input1 % input2;
    document.getElementById("result").textContent = `Result: ${input1} % ${input2} = ${result}`;
  }
}

// Function to increment the input1 value
function incValues() {
  const input1Field = document.getElementById("input1Field").value;
  if (input1Field) {
    input1 = parseFloat(input1Field);
    input1++;
    document.getElementById("result").textContent = `Result: Input 1 incremented to ${input1}`;
    document.getElementById("input1Field").value = input1; // Update the input field
  } else {
    alert("Please enter a valid number in Input 1 for increment.");
  }
}

// Function to decrement the input1 value
function decValues() {
  const input1Field = document.getElementById("input1Field").value;
  if (input1Field) {
    input1 = parseFloat(input1Field);
    input1--;
    document.getElementById("result").textContent = `Result: Input 1 decremented to ${input1}`;
    document.getElementById("input1Field").value = input1; // Update the input field
  } else {
    alert("Please enter a valid number in Input 1 for decrement.");
  }
}

// Function to reset the calculator
function clearValues() {
  input1 = null;
  input2 = null;
  operation = null;
  document.getElementById("input1Field").value = "";
  document.getElementById("input2Field").value = "";
  document.getElementById("result").textContent = "";
}
