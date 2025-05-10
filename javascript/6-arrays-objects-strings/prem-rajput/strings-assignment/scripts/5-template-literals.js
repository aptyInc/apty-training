function generateGreeting() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    document.getElementById("greetingMessage").innerText = greeting;
}
