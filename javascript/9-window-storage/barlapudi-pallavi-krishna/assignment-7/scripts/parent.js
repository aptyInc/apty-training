function sendToChild() {
  const child = document.getElementById("childFrame").contentWindow;
  const msg = document.getElementById("parentMsg").value;
  child.postMessage(msg, "*");
}

function sendToTop() {
  const msg = document.getElementById("parentToTopMsg").value;
  top.postMessage(msg, "*"); 
}

window.onmessage = function(event) {
  document.getElementById("parentOutput").innerText = "Message received in Parent: " + event.data;
};
