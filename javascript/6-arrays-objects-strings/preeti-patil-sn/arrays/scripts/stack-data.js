class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    } else {
      return "Stack is empty!";
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      return "Stack is empty!";
    }
  }

  display() {
    return this.stack.join(", ");
  }
}

const myStack = new Stack();

function pushElement() {
  const elementInput = document.getElementById("elementInput");
  const element = elementInput.value;
  if (element) {
    myStack.push(element);
    elementInput.value = "";
    updateDisplay();
  }
}

function popElement() {
  const poppedElement = myStack.pop();
  document.getElementById(
    "resultDisplay"
  ).innerText = `Popped Element: ${poppedElement}`;
  updateDisplay();
}

function checkEmpty() {
  const emptyStatus = myStack.isEmpty()
    ? "Yes, the stack is empty."
    : "No, the stack is not empty.";
  document.getElementById("resultDisplay").innerText = emptyStatus;
}

function peekElement() {
  const topElement = myStack.peek();
  document.getElementById(
    "resultDisplay"
  ).innerText = `Top Element: ${topElement}`;
}

function updateDisplay() {
  document.getElementById(
    "stackDisplay"
  ).innerText = `Stack: [${myStack.display()}]`;
}
