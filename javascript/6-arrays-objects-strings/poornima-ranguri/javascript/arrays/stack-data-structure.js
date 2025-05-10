class Stack {
  constructor() {
    this.stack = [1, 2, 3];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

function onPerformingDataStructure() {
  const userTextElement = document.getElementById("userText").value;
  let userInput;

  try {
    userInput = JSON.parse(userTextElement);
    console.log(userInput);
  } catch (error) {
    document.getElementById("result").textContent =
      "Please Enter Valid nested Aray";
  }

  const stack = new Stack();
  const resultArray = [];

  resultArray.push(`popped element: ${stack.pop()}`);
  resultArray.push(`stack after pop: ${JSON.stringify(stack.stack)}`);
  resultArray.push(`is stack empty? ${stack.isEmpty()}`);

  let resultElement = document.getElementById("result");
  resultElement.textContent = resultArray.join(" ");
}
