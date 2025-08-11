document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("listIframe");
  const iframeContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          button {
            margin-left: 5px;
          }
        </style>
        <title>Iframe List</title>
      </head>
      <body>
        <ul id="list">
          <li>Row 1</li>
          <li>Row 2</li>
          <li>Row 3</li>
          <li>Row 4</li>
          <li>Row 5</li>
        </ul>
      </body>
    </html>
  `;

  iframe.contentDocument.open();
  iframe.contentDocument.write(iframeContent);
  iframe.contentDocument.close();

  const iframeList = iframe.contentDocument.getElementById("list");
  let selectedItem = null;

  iframeList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      selectedItem?.classList.remove("selected");
      selectedItem = event.target;
      selectedItem.classList.add("selected");
    }
  });

  const style = iframe.contentDocument.createElement("style");
  style.textContent = `
    .selected {
      background-color: #f0f0f0;
      border: 1px solid #000;
    }
  `;
  iframe.contentDocument.head.appendChild(style);

  const controls = document.getElementById("controls");

  controls.addEventListener("click", (event) => {
    if (!selectedItem) return;

    const buttonId = event.target.id;
    const parent = iframeList;
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
