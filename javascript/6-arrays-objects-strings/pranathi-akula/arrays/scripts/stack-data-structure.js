let stack = [];

function pushtheElement() {
  const element = document.getElementById("elementInput").value.trim();
  if (element) {
    stack.push(element); 
    updateStackDisplay();
    document.getElementById("elementInput").value = ""; 
  } else {
    alert("Please enter a valid element.");
  }
}

function poptheElement() {
  if (stack.length > 0) {
    stack.pop(); 
    updateStackDisplay();
  } else {
    alert("Stack is empty!");
  }
}

function checktheTop() {
  const topElement = stack[stack.length - 1];
  document.getElementById("topOutput").textContent = topElement
    ? `Top: ${topElement}`
    : "Top: Stack is empty!";
}

function isStackEmpty() {
  alert(stack.length === 0 ? "Stack is empty!" : "Stack is not empty.");
}

function updateStackDisplay() {
  document.getElementById("stackOutput").textContent = `Stack: [${stack.join(
    ", "
  )}]`;
}
