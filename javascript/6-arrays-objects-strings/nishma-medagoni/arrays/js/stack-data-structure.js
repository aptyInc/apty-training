// Array to hold the stack elements
let stack = []


// Function to add an element to the stack
function push(element) {
    stack.push(element)
}


// Function to remove the top element from the stack
function pop() {
    if (stack.length === 0) {
        return "Stack is empty!"
    }

    return stack.pop()
}


// Function to get the top element of the stack without removing it
function peek() {
    if (stack.length === 0) {
        return "Stack is empty!";
    }
    return stack[stack.length - 1];
}


// Function to check if the stack is empty
function isEmpty() {
    return stack.length === 0;
}


// Function to get the stack contents as a string
function getStackContents() {
    return `[ ${stack.join(", ")} ]`;
}


// Update stack contents on the webpage
function updateStackContents() {
    document.getElementById("stackContents").innerText = getStackContents();
}


// Push operation
function pushToStack() {
    const input = document.getElementById("stackInput").value;
    if (input === "") {
        document.getElementById("result").innerText = "Please enter a value to push.";
        return;
    }
    push(input);
    updateStackContents();
    document.getElementById("result").innerText = `Pushed: ${input}`;
    document.getElementById("stackInput").value = ""; // Clear input field
}


// Pop operation
function popFromStack() {
    const popped = pop();
    updateStackContents();
    document.getElementById("result").innerText = `Popped: ${popped}`;
}


// Peek operation
function peekStack() {
    const top = peek();
    document.getElementById("result").innerText = `Top Element: ${top}`;
}


// Check if stack is empty
function isEmptyStack() {
    const isEmptyStack = isEmpty();
    document.getElementById("result").innerText = isEmptyStack ? "Stack is empty!" : "Stack is not empty.";
}