const iframe = document.getElementById("childFrame");
const sendToIframeButton = document.getElementById("sendToIframe");
const parentMessageInput = document.getElementById("parentMessage");
const iframeMessageDisplay = document.getElementById("iframeMessage");

// Send message to iframe
sendToIframeButton.addEventListener("click", () => {
  const message = parentMessageInput.value;
  iframe.contentWindow.postMessage(message, "*");
});

// Receive message from iframe
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    console.warn("Received message from unknown origin:", event.origin);
    return;
  }
  iframeMessageDisplay.textContent = event.data;
});
