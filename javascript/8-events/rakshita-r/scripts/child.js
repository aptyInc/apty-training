// Send message to Parent
function sendMessageToParent() {
    const message = document.getElementById("messageToParent").value;
    if (!message) {
        alert("Please enter a message.");
        return;
    }
    window.parent.postMessage({ source: "Child", message: message }, "*");
    alert(`Message "${message}" sent to Parent.`);
}

// Listen for messages from Parent
window.addEventListener("message", (event) => {
    document.getElementById("messageFromParent").textContent = `Message from Parent: ${event.data}`;
});
