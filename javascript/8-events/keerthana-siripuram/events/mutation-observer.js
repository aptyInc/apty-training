function enableInlineEditing() {
    const editableDiv = document.getElementById("editableDiv");

    editableDiv.addEventListener("click", function () {
        const textarea = document.createElement("textarea");
        textarea.value = editableDiv.childNodes[0].nodeValue.trim(); 
        textarea.addEventListener("blur", function () {
            editableDiv.innerHTML = textarea.value + ' <span class="icon">✏️</span>';
        });

        editableDiv.replaceWith(textarea);
        textarea.focus();
    });
}


const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.id === "editableDiv") {
                enableInlineEditing();
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });


enableInlineEditing();