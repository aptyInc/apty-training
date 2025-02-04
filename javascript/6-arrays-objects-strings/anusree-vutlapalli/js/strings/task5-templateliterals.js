function generateGreeting() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name.trim() === "" || age === "") {
        document.getElementById('greetingMessage').textContent = "Please enter both your name and age.";
        return;
    }

    const greeting = `Hello, ${name}! You are ${age} years old.`;
    document.getElementById('greetingMessage').textContent = greeting;
}
