const editor = document.getElementById('editor');

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.tagName === 'TEXTAREA') {
        node.addEventListener('blur', () => {
          const newText = node.value;
          editor.textContent = newText + ' ✏️';
        });
      }
    });
  });
});

observer.observe(editor, { childList: true, subtree: true });

editor.addEventListener('click', () => {
  const currentText = editor.textContent.replace(' ✏️', '');
  const textarea = document.createElement('textarea');
  textarea.value = currentText;
  editor.innerHTML = '';
  editor.appendChild(textarea);
  textarea.focus();
});
