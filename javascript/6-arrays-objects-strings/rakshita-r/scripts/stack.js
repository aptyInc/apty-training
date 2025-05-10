  
    const stack = [];

    function pushToStack() {
      const input = document.getElementById("stackInput").value;
      if (input) {
        stack.push(input);
        document.getElementById("stackInput").value = "";
        updateStackDisplay();
        document.getElementById("message").innerText = `Pushed: ${input}`;
      } else {
        document.getElementById("message").innerText = "Please enter a value to push.";
      }
    }


    function popFromStack() {
      if (stack.length > 0) {
        const popped = stack.pop();
        updateStackDisplay();
        document.getElementById("message").innerText = `Popped: ${popped}`;
      } else {
        document.getElementById("message").innerText = "Stack is empty. Nothing to pop.";
      }
    }

    
    function checkIfEmpty() {
      const isEmpty = stack.length === 0;
      document.getElementById("message").innerText = isEmpty ? "The stack is empty." : "The stack is not empty.";
    }

    function getTopElement() {
      if (stack.length > 0) {
        const top = stack[stack.length - 1];
        document.getElementById("message").innerText = `Top element: ${top}`;
      } else {
        document.getElementById("message").innerText = "The stack is empty. No top element.";
      }
    }


    function updateStackDisplay() {
      document.getElementById("stackDisplay").innerText = JSON.stringify(stack);
    }