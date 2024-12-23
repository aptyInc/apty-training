const keydownDiv = document.getElementById('keydownDiv');
    const keyupDiv = document.getElementById('keyupDiv');

    function logEvent(div, eventType, event) {
      const modifiers = [];
      if (event.ctrlKey) modifiers.push('Ctrl');
      if (event.shiftKey) modifiers.push('Shift');
      if (event.altKey) modifiers.push('Alt');
      if (event.metaKey) modifiers.push('Meta'); // For Mac Command key

      const keyCombination = modifiers.length
        ? `${modifiers.join('+')}+${event.key}`
        : event.key;

      const logMessage = `<p><strong>${eventType}:</strong> ${keyCombination}</p>`;
      div.innerHTML += logMessage;

      // Auto-scroll to the bottom of the div
      div.scrollTop = div.scrollHeight;
    }

    window.addEventListener('keydown', (event) => logEvent(keydownDiv, 'Keydown', event));
    window.addEventListener('keyup', (event) => logEvent(keyupDiv, 'Keyup', event));