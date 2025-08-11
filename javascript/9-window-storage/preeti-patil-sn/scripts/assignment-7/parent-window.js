const iframe = document.getElementById("childFrame");
const sendToIframeButton = document.getElementById("sendToIframe");
const messageFromIframe = document.getElementById("messageFromIframe");

// Send a message to the iframe
sendToIframeButton.addEventListener("click", () => {
  iframe.contentWindow.postMessage("Hello from Parent!", "*");
});

// Listen for messages from the iframe
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    console.warn("Unknown origin:", event.origin);
    return;
  }
  messageFromIframe.textContent = event.data;
});
