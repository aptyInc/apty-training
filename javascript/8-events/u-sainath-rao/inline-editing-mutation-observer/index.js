const editableDiv = document.getElementById("editableDiv");

function enableEditing() {
	const currentText = editableDiv.textContent.replace("✏️", "").trim();
	editableDiv.innerHTML = `<textarea>${currentText}</textarea>`;
	const textarea = editableDiv.querySelector("textarea");
	textarea.focus();
	textarea.addEventListener("blur", disableEditing);
}

function disableEditing() {
	const textarea = editableDiv.querySelector("textarea");
	const newText = textarea.value.trim();
	editableDiv.innerHTML = `${newText} <span class="pencil-icon">✏️</span>`;
	const pencilIcon = editableDiv.querySelector(".pencil-icon");
	pencilIcon.addEventListener("click", enableEditing);
}

editableDiv.addEventListener("click", function (event) {
	if (event.target.classList.contains("pencil-icon")) {
		enableEditing();
	}
});

const observer = new MutationObserver(function (mutationsList) {
	for (let mutation of mutationsList) {
		if (mutation.type === "childList") {
			const pencilIcon = editableDiv.querySelector(".pencil-icon");
			if (pencilIcon) {
				pencilIcon.addEventListener("click", enableEditing);
			}
		}
	}
});

observer.observe(editableDiv, { childList: true });

editableDiv.addEventListener("click", function (event) {
	if (!event.target.closest("textarea")) {
		enableEditing();
	}
});
