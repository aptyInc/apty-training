// Function to get first and last characters of a string
function getFirstAndLast(inputString) {
  if (!inputString) return null; // Return null for empty strings
  return inputString[0] + " " + inputString[inputString.length - 1]; // First and last characters
}

// Attach button click event
document.getElementById("processButton").addEventListener("click", () => {
  const userInput = document.getElementById("inputString").value; // Get input
  const result = getFirstAndLast(userInput); // Call function
  document.getElementById("result").textContent = result || "null"; // Show result or "null"
});
