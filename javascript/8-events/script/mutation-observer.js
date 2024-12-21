
const container = document.getElementById('inlineEditor');

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.id === 'editableDiv') {
                    addClickListener(node);
                }
            });
        }
    }
});


function addClickListener(div) {
    div.addEventListener('click', () => {
        const currentText = div.textContent;
        const textarea = document.createElement('textarea');
        textarea.value = currentText;
        div.parentElement.replaceChild(textarea, div);

        textarea.addEventListener('blur', () => {
            const updatedText = textarea.value;
            const newDiv = document.createElement('div');
            newDiv.id = 'editableDiv';
            newDiv.textContent = updatedText;
            newDiv.className = 'editable';
            textarea.parentElement.replaceChild(newDiv, textarea);
        });
    });
}


observer.observe(container, { childList: true, subtree: true });

const editableDiv = document.getElementById('editableDiv');
addClickListener(editableDiv);
