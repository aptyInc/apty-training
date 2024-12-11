const stack = [];

function pushToStack() {
  const input = document.getElementById("stack-input").value;
  if (input) {
    stack.push(input);
    updateStackResult(`Pushed "${input}" to stack.`);
  } else {
    updateStackResult("Please enter a valid element.");
  }
}

function popFromStack() {
  if (stack.length > 0) {
    const popped = stack.pop();
    updateStackResult(`Popped "${popped}" from stack.`);
  } else {
    updateStackResult("Stack is empty. Nothing to pop.");
  }
}

function checkStack() {
  if (stack.length > 0) {
    updateStackResult(`Top element is "${stack[stack.length - 1]}".`);
  } else {
    updateStackResult("Stack is empty.");
  }
}

function isEmpty() {
  updateStackResult(
    stack.length === 0 ? "Stack is empty." : "Stack is not empty."
  );
}

function updateStackResult(message) {
  document.getElementById(
    "stack-result"
  ).innerText = `${message}\nCurrent Stack: [${stack.join(", ")}]`;
}
