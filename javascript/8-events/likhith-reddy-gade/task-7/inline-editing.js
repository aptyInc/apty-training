document.addEventListener("DOMContentLoaded", () => {
  // Function to handle making the div editable
  const makeEditable = (divElement) => {
    const textarea = document.createElement("textarea");
    textarea.value = divElement.firstChild.textContent.trim(); // Preserve the current text
    divElement.replaceWith(textarea);
    textarea.focus();

    // Add blur event listener to textarea
    textarea.addEventListener("blur", () => {
      const newDiv = document.createElement("div");
      newDiv.id = "editable-div";
      newDiv.innerHTML = `${textarea.value} <span>✏️</span>`;
      textarea.replaceWith(newDiv);

      // Trigger a mutation to add listeners
      document.body.appendChild(document.createElement("span")).remove();
    });
  };

  // Function to add listeners to new elements
  const addListeners = (node) => {
    if (node.id === "editable-div") {
      node.addEventListener("click", () => makeEditable(node));
    }
  };

  // Initial div reference and click listener
  const initialDiv = document.getElementById("editable-div");
  initialDiv.addEventListener("click", () => makeEditable(initialDiv));

  // MutationObserver to monitor additions to the DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Ensure it's an element
            addListeners(node);
          }
        });
      }
    });
  });

  // Start observing the body for child additions
  observer.observe(document.body, { childList: true, subtree: true });
});
