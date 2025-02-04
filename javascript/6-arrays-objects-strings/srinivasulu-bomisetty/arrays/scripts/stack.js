class Stack {
    constructor() {
      this.stack = [];
    }

    push(value) {
      this.stack.push(value);
    }

    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot pop.");
      }
      return this.stack.pop();
    }

    isEmpty() {
      return this.stack.length === 0;
    }

    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot peek.");
      }
      return this.stack[this.stack.length - 1];
    }

    display() {
      return this.stack;
    }
  }

  const myStack = new Stack();

  function updateDisplay() {
    document.getElementById("stackDisplay").textContent = JSON.stringify(
      myStack.display()
    );
  }

  function pushValue() {
    const value = parseInt(document.getElementById("valueInput").value);
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }

    myStack.push(value);
    updateDisplay();
  }

  function popValue() {
    try {
      const poppedValue = myStack.pop();
      alert(`Popped value: ${poppedValue}`);
      updateDisplay();
    } catch (error) {
      alert(error.message);
    }
  }

  function checkTop() {
    try {
      const topValue = myStack.peek();
      document.getElementById("topElement").textContent = topValue;
    } catch (error) {
      document.getElementById("topElement").textContent = "N/A";
      alert(error.message);
    }
  }

  function checkEmpty() {
    const isEmpty = myStack.isEmpty();
    document.getElementById("isEmpty").textContent = isEmpty ? "Yes" : "No";
  }