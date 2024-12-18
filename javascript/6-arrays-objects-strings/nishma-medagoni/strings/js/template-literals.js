function createGreeting(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

function processInput() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const greetingMessage = createGreeting(name, age);
    document.getElementById('greetingResult').innerText = greetingMessage;
}