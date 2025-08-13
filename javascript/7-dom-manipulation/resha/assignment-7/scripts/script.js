const container = document.getElementById('editableDiv');

const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const textarea = container.querySelector('textarea');
            if (textarea) {
                textarea.focus();
                textarea.addEventListener('blur', function() {
                    const newText = textarea.value;
                    container.innerHTML = `<span class="text">${newText}</span><span class="icon">✏️</span>`;
                });
            }
        }
    }
});

observer.observe(container, { childList: true, subtree: true });

container.addEventListener('click', function() {
    const text = container.querySelector('.text').textContent;
    container.innerHTML = `<textarea>${text}</textarea>`;
});
