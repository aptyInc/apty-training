const sendToParent = document.getElementById("sendToParent");
const iframeMessage = document.getElementById("iframeMessage");
const iframeReceivedMessage = document.getElementById("iframeReceivedMessage");

sendToParent.addEventListener("click", () => {
	const message = iframeMessage.value.trim();
	if (message) {
		window.parent.postMessage(message, "*");
	}
});

window.addEventListener("message", (event) => {
	iframeReceivedMessage.textContent = event.data;
});
