const container = document.getElementById("container");

function makeEditable(div) {
  div.addEventListener("click", () => {
    if (div.classList.contains("text")) {
      const textValue = div.querySelector("span").textContent;
      const textarea = document.createElement("textarea");
      textarea.value = textValue;
      div.replaceWith(textarea);
      textarea.focus();

      textarea.addEventListener("blur", () => {
        const newDiv = document.createElement("div");
        newDiv.id = "editable";
        newDiv.classList.add("text");
        newDiv.innerHTML = `<span>${textarea.value}</span> ✏️`;
        textarea.replaceWith(newDiv);
      });
    }
  });
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.id === "editable") {
        makeEditable(node);
      }
    });
  });
});

observer.observe(container, { childList: true, subtree: true });

makeEditable(document.getElementById("editable"));
