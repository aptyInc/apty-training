function generateGreeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

document.getElementById("generateGreeting").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  const result = generateGreeting(name, age);

  document.getElementById("result").textContent = result;
});
