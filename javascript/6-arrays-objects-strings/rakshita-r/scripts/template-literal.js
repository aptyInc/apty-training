function generateGreeting() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name.trim() === "" || age.trim() === "") {
    document.getElementById("output").textContent =
      "Please fill in all fields.";
    return;
  }

  const greetingMessage = `Hello, ${name}! You are ${age} years old.`;

  document.getElementById("output").textContent = greetingMessage;
}
