const editableDiv = document.getElementById('editableDiv');

  const observer = new MutationObserver(() => {
    const textarea = document.querySelector('#editableDiv textarea');
    if (textarea) {
      textarea.addEventListener('blur', function () {
        const newText = this.value;
        editableDiv.innerHTML = `<span id="text">${newText}</span><span id="icon">✏️</span>`;
      });
    }
  });

  observer.observe(editableDiv, { childList: true });

  editableDiv.addEventListener('click', function () {
    const currentText = document.getElementById('text').textContent;
    editableDiv.innerHTML = `<textarea>${currentText}</textarea>`;
  });