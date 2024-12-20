const form = document.getElementById("scrollForm");
const scrollUpButton = document.getElementById("scrollUp");
const scrollDownButton = document.getElementById("scrollDown");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const x = parseInt(document.getElementById("xPosition").value, 10);
	const y = parseInt(document.getElementById("yPosition").value, 10);
	window.scrollTo(x, y);
});

scrollUpButton.addEventListener("click", () => {
	window.scrollBy(0, -10);
});

scrollDownButton.addEventListener("click", () => {
	window.scrollBy(0, 10);
});
