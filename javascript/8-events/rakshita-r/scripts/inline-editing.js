
    const container = document.getElementById("editableContainer");

    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains("editable-div")) {
            addListenersToDiv(node);
          }
        });
      });
    });

    // Observer configuration
    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    // Add event listeners to an editable div
    function addListenersToDiv(div) {
      div.addEventListener("click", function () {
        const text = div.innerText.trim(); // Get current text from the div
        div.innerHTML = `<textarea>${text}</textarea>`; // Replace div content with textarea

        const textarea = div.querySelector("textarea");
        textarea.focus();

        // Add blur listener to save edited content and switch back to div
        textarea.addEventListener("blur", function () {
          const editedText = textarea.value.trim(); // Get edited text
          div.innerHTML = `${editedText} <span class="icon">✏️</span>`;
        });
      });
    }

    // Initialize the first editable div
    addListenersToDiv(document.getElementById("editableDiv"));
  