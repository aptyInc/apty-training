function sendToParent() {
  const msg = document.getElementById("childMsg").value;
  parent.postMessage(msg, "*"); 
}

function sendToTop() {
  const msg = document.getElementById("childToTopMsg").value;
  top.postMessage(msg, "*"); 
}

window.onmessage = function(event) {
  document.getElementById("childOutput").innerText = "Message received in Child: " + event.data;
};
