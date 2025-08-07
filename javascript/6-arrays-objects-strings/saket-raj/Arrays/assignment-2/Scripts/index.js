let stack = [];

function addElement() {
  const input = document.getElementById("array");
  const values = input.value.split(",");

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== "") {
      stack.push(values[i]);
    }
  }

  input.value = "";
  document.getElementById("message").innerText = "Values pushed.";
  document.getElementById("stackDisplay").innerText = `Stack: [${stack.join(
    ", "
  )}]`;
}

function removeElement() {
  if (stack.length === 0) {
    document.getElementById("message").innerText =
      "Stack is empty. Nothing to pop.";
  } else {
    const removed = stack.pop();
    document.getElementById("message").innerText = `Popped: ${removed}`;
  }
  document.getElementById("stackDisplay").innerText = `Stack: [${stack.join(
    ", "
  )}]`;
}

function checkEmpty() {
  if (stack.length === 0) {
    document.getElementById("message").innerText = "Yes, stack is empty.";
  } else {
    const top = stack[stack.length - 1];
    document.getElementById(
      "message"
    ).innerText = `No, stack is not empty. Top element is: ${top}`;
  }
}
