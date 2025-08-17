const reply = document.getElementById("reply");
const output = document.getElementById("fromParent");

window.addEventListener("message", (event) => {
    output.innerText = event.data;
});

reply.addEventListener("click", () => {
    window.parent.postMessage("Hello from Child Iframe!", "*");
});
