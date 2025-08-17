const output = document.getElementById("fromChild");
const myFrame = document.getElementById("myFrame");
const send = document.getElementById("send");

send.addEventListener("click", () => {
    myFrame.contentWindow.postMessage("Hello from Parent!", "*");
});

window.addEventListener("message", (event) => {
    output.innerText = event.data;
});
