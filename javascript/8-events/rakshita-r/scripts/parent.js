// Reference to the child iframe
const childFrame = document.getElementById("childFrame");

// Send message to the Top Window
function sendMessageToTop() {
    const message = document.getElementById("messageToTop").value;
    if (!message) {
        alert("Please enter a message.");
        return;
    }
    window.top.postMessage({ source: "Parent", message: message }, "*");
    alert(`Message "${message}" sent to Top.`);
}

// Send message to the Child Iframe
function sendMessageToChild() {
    const message = document.getElementById("messageToChild").value;
    if (!message) {
        alert("Please enter a message.");
        return;
    }
    childFrame.contentWindow.postMessage(message, "*");
    alert(`Message "${message}" sent to Child.`);
}

// Listen for messages from Top or Child
window.addEventListener("message", (event) => {
    if (event.data.source === "Top") {
        document.getElementById("messageFromTop").textContent = `Message from Top: ${event.data.message}`;
    } else {
        document.getElementById("messageFromChild").textContent = `Message from Child: ${event.data}`;
    }
});
