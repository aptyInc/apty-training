const stack = {
    stackArray: [],

    push(element) {
        this.stackArray.push(element);
    },

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty, nothing to pop.";
        }
        return this.stackArray.pop();
    },

    isEmpty() {
        return this.stackArray.length === 0;
    },

    top() {
        if (this.isEmpty()) {
            return "Stack is empty.";
        }
        return this.stackArray[this.stackArray.length - 1];
    },

    getStack() {
        return this.stackArray;
    },
};

function displayStack() {
    const currentStackField = document.getElementById("currentStack");
    currentStackField.textContent = `Stack: [${stack.getStack().join(", ")}]`;
}

function pushToStack() {
    const inputField = document.getElementById("stackInput");
    const resultField = document.getElementById("result");

    const value = inputField.value.trim();
    if (value === "") {
        resultField.textContent = "Error: Input cannot be empty.";
        return;
    }

    stack.push(value);
    resultField.textContent = `Pushed "${value}" onto the stack.`;
    displayStack();
    inputField.value = "";
}

function popFromStack() {
    const resultField = document.getElementById("result");

    const poppedValue = stack.pop();
    resultField.textContent = `Popped Value: ${poppedValue}`;
    displayStack();
}

function checkIfEmpty() {
    const resultField = document.getElementById("result");

    const isEmpty = stack.isEmpty();
    resultField.textContent = isEmpty ? "The stack is empty." : "The stack is not empty.";
}

function getTopElement() {
    const resultField = document.getElementById("result");

    const topValue = stack.top();
    resultField.textContent = `Top Element: ${topValue}`;
}
