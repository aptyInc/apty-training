// Function to replace '\n' and '\t' with their escape sequences
function replaceEscapeSequences(input) {
  // Replace '\n' and '\t' with '\\n' and '\\t'
  return input.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
}

// Event listener for the button click
document.getElementById("processString").addEventListener("click", () => {
  // Get the input string from the user
  const input = document.getElementById("inputString").value;

  const result = replaceEscapeSequences(input);
  document.getElementById("result").textContent = result;
});
