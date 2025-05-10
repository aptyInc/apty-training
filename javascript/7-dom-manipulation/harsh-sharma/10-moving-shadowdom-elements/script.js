document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
  
    const shadowRoot = container.attachShadow({ mode: "open" });
  
    const style = document.createElement("style");
  
    shadowRoot.appendChild(style);
  
    shadowRoot.innerHTML = `
      <header>
        <h1>Reorderable Table</h1>
      </header>
      <main>
        <section>
          <table id="reorderableTable">
            <thead>
              <tr>
                <th>Row</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="row-1">
                <td>Row 1</td>
                <td>
                  <button id="up-1">Up</button>
                  <button id="down-1">Down</button>
                  <button id="top-1">Top</button>
                  <button id="bottom-1">Bottom</button>
                </td>
              </tr>
              <tr id="row-2">
                <td>Row 2</td>
                <td>
                  <button id="up-2">Up</button>
                  <button id="down-2">Down</button>
                  <button id="top-2">Top</button>
                  <button id="bottom-2">Bottom</button>
                </td>
              </tr>
              <tr id="row-3">
                <td>Row 3</td>
                <td>
                  <button id="up-3">Up</button>
                  <button id="down-3">Down</button>
                  <button id="top-3">Top</button>
                  <button id="bottom-3">Bottom</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    `;
    
    function moveUp(button) {
      const row = button.closest("tr");
      const previousRow = row.previousElementSibling;
      if (previousRow) {
        row.parentNode.insertBefore(row, previousRow);
      }
    }
  
    function moveDown(button) {
      const row = button.closest("tr");
      const nextRow = row.nextElementSibling;
      if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
      }
    }
  
    function moveTop(button) {
      const row = button.closest("tr");
      const tableBody = row.parentNode;
      tableBody.insertBefore(row, tableBody.firstElementChild);
    }
  
    function moveBottom(button) {
      const row = button.closest("tr");
      const tableBody = row.parentNode;
      tableBody.appendChild(row);
    }
  
    const buttons = shadowRoot.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach((button) => {
      if (button.id.startsWith("up-")) {
        button.onclick = () => moveUp(button);
      } else if (button.id.startsWith("down-")) {
        button.onclick = () => moveDown(button);
      } else if (button.id.startsWith("top-")) {
        button.onclick = () => moveTop(button);
      } else if (button.id.startsWith("bottom-")) {
        button.onclick = () => moveBottom(button);
      }
    });
  });
  