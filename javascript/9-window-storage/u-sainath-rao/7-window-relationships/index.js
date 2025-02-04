let childWindow;

// Open a new child window when the "Open Child Window" button is clicked
document.getElementById("openChildWindow").addEventListener("click", () => {
	childWindow = window.open(
		"index-child.html",
		"childWindow",
		"width=400,height=300"
	);
});

document.getElementById("sendMessageToChild").addEventListener("click", () => {
	if (childWindow) {
		childWindow.postMessage("Hello from Parent Window!", "*");
	}
});

window.addEventListener("message", (event) => {
	if (event.origin !== window.location.origin) {
		return;
	}
	document.getElementById(
		"messageFromChild"
	).textContent = `Message from Child: ${event.data}`;
});
