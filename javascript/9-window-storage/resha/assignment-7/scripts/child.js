document.getElementById("sendToParent").addEventListener("click", () => {
    window.parent.postMessage("Hello Parent, from Iframe!", "*");
});

document.getElementById("sendToTop").addEventListener("click", () => {
    window.top.postMessage("Hello Top Window, from Iframe!", "*");
});

window.addEventListener("message", (event) => {
    document.getElementById("iframeMsg").textContent = "Message from Parent/Top: " + event.data;
});
