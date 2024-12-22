const sendToParentButton = document.getElementById("sendToParent");
const iframeMessageInput = document.getElementById("iframeMessage");
const receivedFromParent = document.getElementById("receivedFromParent");

// Send message to parent window
sendToParentButton.addEventListener("click", () => {
  const message = iframeMessageInput.value;
  window.parent.postMessage(message, "*");
  iframeMessageInput.value = ""; // Clear input field
});

// Receive message from parent window
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return; // Ensure same origin
  receivedFromParent.textContent = `Message from parent: ${event.data}`;
});
