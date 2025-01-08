const sendToParentButton = document.getElementById("sendToParent");
const iframeMessageInput = document.getElementById("iframeMessage");
const parentMessageDisplay = document.getElementById("parentMessage");

// Send message to parent
sendToParentButton.addEventListener("click", () => {
  const message = iframeMessageInput.value;
  window.parent.postMessage(message, "*");
});

// Receive message from parent
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    console.warn("Received message from unknown origin:", event.origin);
    return;
  }
  parentMessageDisplay.textContent = event.data;
});
