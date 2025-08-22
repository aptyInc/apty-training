function sendToIframe() {
  const iframe = document.getElementById("childFrame").contentWindow;
  const msg = document.getElementById("parentMsg").value;
  iframe.postMessage(msg, "*");
}

window.onmessage = function(event) {
  document.getElementById("parentOutput").innerText = "Message from iframe: " + event.data;
};
