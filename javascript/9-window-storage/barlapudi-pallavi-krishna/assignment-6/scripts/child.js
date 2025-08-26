function sendToParent() {
  const msg = document.getElementById("childMsg").value;
  window.parent.postMessage(msg, "*");
}

window.onmessage = function(event) {
  document.getElementById("childOutput").innerText = "Message from parent: " + event.data;
};
