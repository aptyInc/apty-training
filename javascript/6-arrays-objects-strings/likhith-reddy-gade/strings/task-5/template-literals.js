function generateGreeting() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const result = `Hello, my name is ${name} and I am ${age} years old.`;
  document.getElementById("result").innerText = result;
}
