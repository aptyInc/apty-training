const editableDiv = document.getElementById("editableDiv")
const textContent = document.getElementById("textContent")
const editIcon = document.getElementById("editIcon")

let observer

function startEditing() {
  const textarea = document.createElement("textarea")
  textarea.value = textContent.textContent
  editableDiv.appendChild(textarea)
  textContent.style.display = "none" 

  textarea.focus()

  textarea.addEventListener("blur", function () {
    textContent.textContent = textarea.value
    editableDiv.removeChild(textarea)
    textContent.style.display = "block" 
  })
}

editIcon.addEventListener("click", function () {
  startEditing()
})

observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      const addedNode = mutation.addedNodes[0]
      if (addedNode.tagName === "TEXTAREA") {
        // Attach blur event listener to the textarea
        addedNode.addEventListener("blur", function () {
          textContent.textContent = addedNode.value
          editableDiv.removeChild(addedNode)
          textContent.style.display = "block"
        })
      }
    }
  })
})

observer.observe(editableDiv, {
  childList: true,
})
