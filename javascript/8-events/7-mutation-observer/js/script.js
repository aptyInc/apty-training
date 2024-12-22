const editableDiv = document.getElementById("editable");
const editableText = document.getElementById("editableText");

function startEditing() {
    const currentText = editableText.innerText.replace("✏️", "").trim();
    editableText.innerHTML = `<textarea>${currentText}</textarea>`;
    const textarea = editableText.querySelector("textarea");
    textarea.focus();

    textarea.addEventListener("blur", handleBlur);
}

function handleBlur() {
    const textarea = editableText.querySelector("textarea");
    if (textarea) {
        const updatedText = textarea.value;
        editableText.innerHTML = `${updatedText} <span class="icon">✏️</span>`;
    }

    addEditListener();
}

function addEditListener() {
    const pencilIcon = editableDiv.querySelector(".icon");

    if (pencilIcon) {
        pencilIcon.addEventListener("click", startEditing);
    }
}

const callback = (mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            console.log("A child node was added or removed.");

            addEditListener();
        } else if (mutation.type === "attributes") {
            console.log(`An attribute '${mutation.attributeName}' was modified.`);
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(editableDiv, {
    childList: true,
    attributes: true,
    subtree: true,
});

addEditListener();