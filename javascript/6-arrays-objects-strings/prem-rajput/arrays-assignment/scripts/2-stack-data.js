function Stack() {
    this.stack = [];

    this.push = function (element) {
        this.stack.push(element);
    };

    this.pop = function () {
        if (this.stack.length === 0) {
        return "Stack is empty.";
        }
        return this.stack.pop();
    };

    this.isEmpty = function () {
        return this.stack.length === 0;
    };

    this.peek = function () {
        if (this.stack.length === 0) {
        return "Stack is empty.";
        }
        return this.stack[this.stack.length - 1];
    };
}

const myStack = new Stack();

function updateStackView() {
    document.getElementById("stackView").textContent = `[ ${myStack.stack.join(
        ", "
    )} ]`;
}

function pushElement() {
    const element = document.getElementById("elementInput").value;
    if (element === "") {
        document.getElementById("result").textContent = "Please enter an element.";
        return;
    }
    myStack.push(element);
    updateStackView();
    document.getElementById(
        "result"
    ).textContent = `"${element}" has been added to the stack.`;
    document.getElementById("elementInput").value = "";
}

function popElement() {
    const result = myStack.pop();
    updateStackView();
    document.getElementById("result").textContent = result;
}

function peekElement() {
    const result = myStack.peek();
    document.getElementById("result").textContent = `Top element: ${result}`;
}

function checkEmpty() {
    const result = myStack.isEmpty()
        ? "The stack is empty."
        : "The stack is not empty.";
    document.getElementById("result").textContent = result;
}
