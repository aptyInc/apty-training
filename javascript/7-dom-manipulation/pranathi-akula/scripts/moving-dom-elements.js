document.addEventListener("DOMContentLoaded", function () {
    // Create the shadow DOM
    const shadowHost = document.getElementById("shadowHost");
    const shadowRoot = shadowHost.attachShadow({ mode: "open" });
  
    // HTML and CSS for the shadow DOM
    const shadowContent = `
      <style>
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 5px 0;
          padding: 10px;
          border: 1px solid #ccc;
          display: flex;
          justify-content: space-between;
        }
        li.selected {
          background-color: #f0f0f0;
          border: 1px solid #000;
        }
      </style>
      <ul id="list">
        <li>Row 1</li>
        <li>Row 2</li>
        <li>Row 3</li>
        <li>Row 4</li>
        <li>Row 5</li>
      </ul>
    `;
  
    // Append content to the shadow DOM
    shadowRoot.innerHTML = shadowContent;
  
    // Get the list from the shadow DOM
    const shadowList = shadowRoot.getElementById("list");
    let selectedItem = null;
  
    // Add click listener to the list for selecting items
    shadowList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        selectedItem?.classList.remove("selected");
        selectedItem = event.target;
        selectedItem.classList.add("selected");
      }
    });
  
    // Add listeners to the buttons outside the shadow DOM
    const controls = document.getElementById("controls");
    controls.addEventListener("click", (event) => {
      if (!selectedItem) return;
  
      const buttonId = event.target.id;
      const parent = shadowList;
      switch (buttonId) {
        case "up":
          if (selectedItem.previousElementSibling) {
            parent.insertBefore(selectedItem, selectedItem.previousElementSibling);
          }
          break;
        case "down":
          if (selectedItem.nextElementSibling) {
            parent.insertBefore(selectedItem.nextElementSibling, selectedItem);
          }
          break;
        case "top":
          parent.insertBefore(selectedItem, parent.firstElementChild);
          break;
        case "bottom":
          parent.appendChild(selectedItem);
          break;
      }
    });
  });
  