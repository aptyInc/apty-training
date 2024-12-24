document.getElementById("send-message-btn").addEventListener("click", () => {
  const message = document.getElementById("message-input").value;
  const childFrame = document.getElementById("child-frame").contentWindow;
  childFrame.postMessage(message, "*");
});

window.addEventListener("message", (event) => {
  document.getElementById(
    "received-message"
  ).textContent = `Message from child: ${event.data}`;
});
