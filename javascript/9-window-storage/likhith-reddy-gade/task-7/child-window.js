document.getElementById("send-to-parent-btn").addEventListener("click", () => {
  window.opener.postMessage("Hello from Child", "*");
});

window.addEventListener("message", (event) => {
  document.getElementById(
    "received-from-parent"
  ).textContent = `Message from Parent: ${event.data}`;
});
