const editableDiv = document.getElementById("editableDiv");

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const textarea = document.querySelector("textarea");
            if (textarea) {
                textarea.addEventListener("blur", () => {
                    const newText = textarea.value.trim() || "Default Text";
                    editableDiv.innerHTML = `${newText} <span class="icon">✏️</span>`;
                });
            }
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });

editableDiv.addEventListener("click", () => {
    const currentText = editableDiv.textContent.trim();
    editableDiv.innerHTML = `<textarea>${currentText
        .replace("✏️", "")
        .trim()}</textarea>`;
});
