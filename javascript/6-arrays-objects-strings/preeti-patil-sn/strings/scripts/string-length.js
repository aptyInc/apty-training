function calculateWordLengths(inputString) {
  if (!inputString.trim()) return "Please enter a valid string.";
  return inputString
    .split(" ") // Split into words
    .map((word) => word.length) // Get lengths
    .join(" "); // Combine lengths into a single string
}

document.getElementById("button").addEventListener("click", () => {
  const userInput = document.getElementById("inputString").value; // Get input
  const result = calculateWordLengths(userInput); // Call function
  document.getElementById("result").textContent = result; // Show result
});
