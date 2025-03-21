 class InlineEditor {
        constructor(container) {
          this.container = container;
          this.content = container.querySelector(".editable-content");
          this.initialText = this.content.textContent;

          this.setupEventListeners();
          this.setupMutationObserver();
        }

        setupEventListeners() {
          this.container.addEventListener("click", () => this.enableEditing());
        }

        setupMutationObserver() {
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                  // Element node
                  if (node.classList.contains("edit-textarea")) {
                    node.focus();
                    node.addEventListener("blur", () =>
                      this.disableEditing(node)
                    );
                  }
                }
              });
            });
          });

          observer.observe(this.container, {
            childList: true,
            subtree: true,
          });
        }

        enableEditing() {
          if (this.container.querySelector(".edit-textarea")) return;

          const currentText = this.content.textContent;
          this.content.style.display = "none";

          const textarea = document.createElement("textarea");
          textarea.className = "edit-textarea";
          textarea.value = currentText;

          textarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              textarea.blur();
            }
            if (e.key === "Escape") {
              textarea.value = this.initialText;
              textarea.blur();
            }
          });

          this.container.insertBefore(textarea, this.content);
        }

        disableEditing(textarea) {
          const newText = textarea.value.trim();
          this.content.textContent = newText || this.initialText;
          this.content.style.display = "block";
          textarea.remove();
        }
      }

      // Initialize the editor
      document.addEventListener("DOMContentLoaded", () => {
        const containers = document.querySelectorAll(".editable-container");
        containers.forEach((container) => new InlineEditor(container));
      });