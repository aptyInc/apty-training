function makeEditable() {
    const editableDiv = document.getElementById('editableDiv');
    const textContent = document.getElementById('textContent');
    const editIcon = document.getElementById('editIcon');

    editableDiv.addEventListener('click', function() {
      if (editableDiv.contains(document.querySelector('textarea'))) {
        return; 
      }

      const textarea = document.createElement('textarea');
      textarea.value = textContent.textContent.replace(' ✏️', ''); 
      textContent.innerHTML = ''; 

      textContent.appendChild(textarea);
      textarea.focus();
      
      editIcon.style.display = 'none';

      textarea.addEventListener('blur', function() {
        textContent.textContent = textarea.value + ' ✏️'; 
        textContent.appendChild(editIcon); 
        makeEditable(); 
      });
    });
  }

  const observer = new MutationObserver(function(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        makeEditable();
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  makeEditable();