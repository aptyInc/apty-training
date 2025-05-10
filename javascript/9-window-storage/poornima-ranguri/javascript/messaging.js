const iframe = document.getElementById("childIframe");
const sendToIframeButton = document.getElementById("sendToIframe");
const parentMessageInput = document.getElementById("parentMessage");
const receivedFromIframe = document.getElementById("receivedFromIframe");

sendToIframeButton.addEventListener("click", () => {
  const message = parentMessageInput.value;
  iframe.contentWindow.postMessage(message, "*");
  parentMessageInput.value = "";
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;
  receivedFromIframe.textContent = `Message from iframe: ${event.data}`;
});
