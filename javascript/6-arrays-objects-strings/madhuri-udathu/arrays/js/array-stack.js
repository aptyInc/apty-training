const stack = [];

function pushToStack() {
    const input = document.getElementById('stackInput').value;
    if (input) {
        stack.push(input);
        document.getElementById('output').textContent = `Pushed: ${input}\nStack: [${stack.join(', ')}]`;
        document.getElementById('stackInput').value = '';
    } else {
        document.getElementById('output').textContent = 'Please enter a value to push.';
    }
}

function popFromStack() {
    if (stack.length > 0) {
        const popped = stack.pop();
        document.getElementById('output').textContent = `Popped: ${popped}\nStack: [${stack.join(', ')}]`;
    } else {
        document.getElementById('output').textContent = 'Stack is empty. Nothing to pop.';
    }
}

function peekStack() {
    if (stack.length > 0) {
        document.getElementById('output').textContent = `Top Element: ${stack[stack.length - 1]}`;
    } else {
        document.getElementById('output').textContent = 'Stack is empty.';
    }
}