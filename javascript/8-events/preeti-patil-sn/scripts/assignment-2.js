// References to the divs
const keydownDiv = document.getElementById("keydownDiv");
const keyupDiv = document.getElementById("keyupDiv");

// Helper function to format key combinations
function formatKeys(event) {
  const keys = [];
  if (event.ctrlKey) keys.push("Ctrl");
  if (event.shiftKey) keys.push("Shift");
  if (event.altKey) keys.push("Alt");
  keys.push(event.key); // Add the actual key
  return keys.join(" + ");
}

// Keydown event listener
window.addEventListener("keydown", (event) => {
  const keys = formatKeys(event);
  const p = document.createElement("p"); // Create a new paragraph
  p.textContent = `Keydown: ${keys}`;
  keydownDiv.appendChild(p); // Append the message to the keydown div
  keydownDiv.scrollTop = keydownDiv.scrollHeight; // Auto-scroll to the latest entry
});

// Keyup event listener
window.addEventListener("keyup", (event) => {
  const keys = formatKeys(event);
  const p = document.createElement("p"); // Create a new paragraph
  p.textContent = `Keyup: ${keys}`;
  keyupDiv.appendChild(p); // Append the message to the keyup div
  keyupDiv.scrollTop = keyupDiv.scrollHeight; // Auto-scroll to the latest entry
});
