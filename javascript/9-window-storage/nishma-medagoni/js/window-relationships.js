const childFrame = document.getElementById("childFrame").contentWindow;

// Function to send message to child iframe
function sendMessageToChild() {
  const msg = document.getElementById("parentMsgInput").value;
  childFrame.postMessage(msg, "*");
}

// Listen for messages from child iframe
window.addEventListener("message", (event) => {
  document.getElementById(
    "parentReceivedMsg"
  ).innerText = `Received from Child: ${event.data}`;
});
