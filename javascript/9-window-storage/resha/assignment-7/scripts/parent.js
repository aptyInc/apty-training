const iframe = document.getElementById("childFrame");

document.getElementById("sendToIframe").addEventListener("click", () => {
    iframe.contentWindow.postMessage("Hello from Parent!", "*");
});

window.addEventListener("message", (event) => {
    document.getElementById("parentMsg").textContent = "Message from Iframe: " + event.data;
});
