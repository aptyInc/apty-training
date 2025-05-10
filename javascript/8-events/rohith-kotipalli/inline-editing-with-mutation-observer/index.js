const logContainer = document.getElementById('logContainer');

    function logMessage(message) {
      const logItem = document.createElement('p');
      logItem.textContent = message;
      logContainer.appendChild(logItem);

      logContainer.scrollTop = logContainer.scrollHeight;
    }

    function setupEditableDiv(div) {
      const textContent = div.querySelector('#textContent');
      div.addEventListener('click', () => {
        logMessage('Editable div clicked.');
        
        const textarea = document.createElement('textarea');
        textarea.value = textContent.textContent;
        textarea.rows = 3;
        div.innerHTML = ''; 
        div.appendChild(textarea);
        textarea.focus();

   
        textarea.addEventListener('blur', () => {
          logMessage('Textarea lost focus. Updating content.');

          textContent.textContent = textarea.value.trim() || 'Click here to edit this text.';
          div.innerHTML = '';
          div.appendChild(textContent);
          div.appendChild(document.createElement('span')).textContent = '✏️';
          div.lastChild.className = 'icon';
        });
      });
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.id === 'editableDiv') {
            logMessage('Editable div added to DOM.');
            setupEditableDiv(node);
          }
        });
      });
    });


    const container = document.getElementById('container');
    observer.observe(container, { childList: true });

    setupEditableDiv(document.getElementById('editableDiv'));