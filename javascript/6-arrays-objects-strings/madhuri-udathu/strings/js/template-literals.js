function createGreeting(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

document.getElementById("greetButton").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const greetingMessage = createGreeting(name, age);
    document.getElementById("greetingOutput").textContent = greetingMessage;
});
