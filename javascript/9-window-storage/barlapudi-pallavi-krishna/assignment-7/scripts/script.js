function sendToParent() {
  const iframe = document.getElementById("parentFrame").contentWindow;
  const msg = document.getElementById("topMsg").value;
  iframe.postMessage(msg, "*");
}

window.onmessage = function(event) {
  document.getElementById("topOutput").innerText = "Message received in Top: " + event.data;
};
