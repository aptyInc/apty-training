const keydownDiv = document.getElementById("keydown");
const keyupDiv = document.getElementById("keyup");

let activeModifiers = {
	ctrl: false,
	shift: false,
	alt: false,
};

window.addEventListener("keydown", (event) => {
	if (event.ctrlKey) activeModifiers.ctrl = true;
	if (event.shiftKey) activeModifiers.shift = true;
	if (event.altKey) activeModifiers.alt = true;

	let keyString = buildKeyString(event, "keydown");

	keydownDiv.querySelector("p").textContent = keyString;
});

window.addEventListener("keyup", (event) => {
	if (event.key === "Control") activeModifiers.ctrl = false;
	if (event.key === "Shift") activeModifiers.shift = false;
	if (event.key === "Alt") activeModifiers.alt = false;

	let keyString = buildKeyString(event, "keyup");

	keyupDiv.querySelector("p").textContent = keyString;
});

function buildKeyString(event, eventType) {
	console.log(eventType);

	let keyString = "";

	if (activeModifiers.ctrl) keyString += "Ctrl+";
	if (activeModifiers.shift) keyString += "Shift+";
	if (activeModifiers.alt) keyString += "Alt+";

	keyString += event.key;

	return keyString;
}
