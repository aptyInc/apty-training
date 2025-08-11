function processString(input, callback) {
  return callback(input);
}

function toUpperCase(input = "default string") {
  return input.toUpperCase();
}

function process() {
  const userInput = document.getElementById("input").value;
  const result = processString(userInput, toUpperCase);
  document.getElementById("output").textContent = `Result: Processed String: ${result}`;
}
