class Stack {
    constructor() {
        this.stack = []; 
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.stack[this.stack.length - 1];
    }

    getStackContents() {
        return this.stack.length === 0 ? "Stack is empty!" : this.stack.join(", ");
    }
}

const myStack = new Stack();

document.getElementById('pushBtn').addEventListener('click', function () {
    const input = document.getElementById('stackInput').value;
    if (input.trim() === "") {
        document.getElementById('result').textContent = "Please enter a valid number!";
        return;
    }
    myStack.push(Number(input));
    document.getElementById('result').textContent = `Pushed ${input} to the stack.`;
    updateStackContents();
});

document.getElementById('popBtn').addEventListener('click', function () {
    const popped = myStack.pop();
    document.getElementById('result').textContent = `Popped element: ${popped}`;
    updateStackContents();
});

document.getElementById('peekBtn').addEventListener('click', function () {
    const topElement = myStack.peek();
    document.getElementById('result').textContent = `Top element: ${topElement}`;
});

document.getElementById('isEmptyBtn').addEventListener('click', function () {
    const isEmpty = myStack.isEmpty();
    document.getElementById('result').textContent = isEmpty ? "The stack is empty." : "The stack is not empty.";
});

function updateStackContents() {
    document.getElementById('stackContents').textContent = `Stack Contents: [${myStack.getStackContents()}]`;
}
