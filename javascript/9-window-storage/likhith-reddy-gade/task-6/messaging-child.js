document.getElementById("send-to-parent-btn").addEventListener("click", () => {
  const message = document.getElementById("child-message-input").value;
  window.parent.postMessage(message, "*");
});

window.addEventListener("message", (event) => {
  document.getElementById(
    "received-message"
  ).textContent = `Message from parent: ${event.data}`;
});
