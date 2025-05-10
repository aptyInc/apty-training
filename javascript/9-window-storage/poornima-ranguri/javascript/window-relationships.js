const iframe = document.getElementById("childIframe");
const sendToChildButton = document.getElementById("sendToChild");
const messageFromChild = document.getElementById("messageFromChild");

sendToChildButton.addEventListener("click", () => {
  iframe.contentWindow.postMessage("Hello from Parent!", "*");
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;
  messageFromChild.textContent = `Message from Child: ${event.data}`;
});
