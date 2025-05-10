const sendToParentButton = document.getElementById("sendToParent");
const sendToTopButton = document.getElementById("sendToTop");
const messageFromParent = document.getElementById("messageFromParent");

// Send a message to the parent window
sendToParentButton.addEventListener("click", () => {
  parent.postMessage("Hello from Iframe to Parent!", "*");
});

// Send a message to the topmost window in the hierarchy
sendToTopButton.addEventListener("click", () => {
  top.postMessage("Hello from Iframe to Top!", "*");
});

// Listen for messages from parent or top window
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    console.warn("Unknown origin:", event.origin);
    return;
  }
  messageFromParent.textContent = event.data;
});
