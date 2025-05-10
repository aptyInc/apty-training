
// Function to get input value and display it
function displayInput() {
  // Get the value from the input field
  const userInput = document.getElementById("userInput").value;

  // Get the output div where we will display the result
  const outputDiv = document.getElementById("output");

  // Display the user input in the output div
  outputDiv.innerHTML = `<p>You entered: <strong>${userInput}</strong></p>`;
}
