function generateGreeting() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter both name and age.");
    return;
  }

  const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
  document.getElementById("output").textContent = greeting;
}
