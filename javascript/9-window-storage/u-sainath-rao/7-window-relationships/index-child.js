document.getElementById("sendMessageToParent").addEventListener("click", () => {
	if (window.parent) {
		window.parent.postMessage("Hello from Child Window!", "*");
	}
});

window.addEventListener("message", (event) => {
	if (event.origin !== window.location.origin) {
		return;
	}
	document.getElementById(
		"messageFromParent"
	).textContent = `Message from Parent: ${event.data}`;
});
