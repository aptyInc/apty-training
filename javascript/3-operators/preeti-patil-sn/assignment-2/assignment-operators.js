function fetchInputValues() {
  const x = +document.getElementById("input1").value;
  const operand = +document.getElementById("input2").value;

  if (x === 0 && operand === 0 && document.getElementById("input1").value === '' && document.getElementById("input2").value === '') {
    alert("Please enter valid numbers for both fields.");
    return null;
  }

  return { x, operand };
}

  // Function for += operator
  function addAssignment() {
    const values = fetchInputValues();
    if (values) {
      const { x, operand } = values;
      const result = x + operand;
      displayResult(`Result: ${x} + ${operand} = ${result}`);
    }
  }
  
  // Function for -= operator
  function subAssignment() {
    const values = fetchInputValues();
    if (values) {
      const { x, operand } = values;
      const result = x - operand;
      displayResult(`Result: ${x} - ${operand} = ${result}`);
    }
  }
  
  // Function for *= operator
  function mulAssignment() {
    const values = fetchInputValues();
    if (values) {
      const { x, operand } = values;
      const result = x * operand;
      displayResult(`Result: ${x} * ${operand} = ${result}`);
    }
  }
  
  // Function for /= operator
  function divAssignment() {
    const values = fetchInputValues();
    if (values) {
      const { x, operand } = values;
      if (operand === 0) {
        alert("Division by zero is not allowed.");
        return;
      }
      const result = x / operand;
      displayResult(`Result: ${x} / ${operand} = ${result}`);
    }
  }
  
  // Function for %= operator
  function modAssignment() {
    const values = fetchInputValues();
    if (values) {
      const { x, operand } = values;
      const result = x % operand;
      displayResult(`Result: ${x} % ${operand} = ${result}`);
    }
  }
  
  // Function to display result
  function displayResult(message) {
    document.getElementById("result").textContent = message;
  }
  
  // Function to reset the input fields and result
  function clearValues() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").textContent = "";
  }
  