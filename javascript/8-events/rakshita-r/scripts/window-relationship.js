// Reference to the parent iframe
const parentFrame = document.getElementById("parentFrame");

// Send message to the Parent Iframe
function sendMessageToParent() {
    const message = document.getElementById("messageToParent").value;
    if (!message) {
        alert("Please enter a message.");
        return;
    }
    parentFrame.contentWindow.postMessage(message, "*");
    alert(`Message "${message}" sent to Parent.`);
}

// Listen for messages from Parent or Child
window.addEventListener("message", (event) => {
    const sender = event.origin; // Optional: Check origin for security
    if (event.data.source === "Parent") {
        document.getElementById("messageFromParent").textContent = `Message from Parent: ${event.data.message}`;
    } else if (event.data.source === "Child") {
        document.getElementById("messageFromChild").textContent = `Message from Child: ${event.data.message}`;
    }
});
