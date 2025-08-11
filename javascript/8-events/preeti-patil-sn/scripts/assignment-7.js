// Select the editable div
const editableDiv = document.getElementById("editableDiv");
const textSpan = document.getElementById("text");
const editIcon = document.getElementById("editIcon");

// Function to make div editable
function makeEditable() {
  // Create a textarea and set its value to the current text
  const textarea = document.createElement("textarea");
  textarea.value = textSpan.innerText.replace("✏️", "").trim();
  editableDiv.replaceChild(textarea, textSpan); // Replace text with textarea

  // Focus the textarea for editing
  textarea.focus();

  // Add blur event to save changes when user clicks outside
  textarea.addEventListener("blur", () => {
    textSpan.innerText = textarea.value + " ";
    const icon = document.createElement("span");
    icon.id = "editIcon";
    icon.innerText = "✏️";
    textSpan.appendChild(icon);
    editableDiv.replaceChild(textSpan, textarea); // Replace textarea with updated text
  });
}

// Add MutationObserver to watch for changes in the div
const observer = new MutationObserver(() => {
  const currentEditableDiv = document.getElementById("editableDiv");
  const currentTextSpan = currentEditableDiv.querySelector("span");

  if (currentTextSpan && !currentTextSpan.querySelector("textarea")) {
    // Add click event listener to make div editable when clicked
    currentTextSpan.addEventListener("click", makeEditable);
  }
});

// Observe changes in the child elements of editableDiv
observer.observe(editableDiv, {
  childList: true, // Observe addition/removal of child nodes
  subtree: true, // Observe the entire subtree
});

// Initial setup to make editable on click
editableDiv.addEventListener("click", makeEditable);
