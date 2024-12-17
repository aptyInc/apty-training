const template = document.getElementById("host");
const result = document.getElementById("result");
const shadowRoot = result.attachShadow({ mode: "open" });
shadowRoot.appendChild(template.content.cloneNode(true));

function selectRow(rowId) {
  activeRowId = rowId;
}

let activeRowId = null;
const resultTable = shadowRoot.getElementById("tableResult");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  row.id = `row${i}`;
  row.innerHTML = `
    <td>Row ${i}</td>
    <td><button onclick="selectRow('${row.id}')">Select</button></td>
  `;
  resultTable.appendChild(row);
}

document.getElementById("upBtn").addEventListener("click", () => {
  if (activeRowId) {
    const activeRow = shadowRoot.getElementById(activeRowId);
    const prevRow = activeRow.previousElementSibling;
    if (prevRow) {
      activeRow.parentNode.insertBefore(activeRow, prevRow);
    }
  }
});

downBtn.addEventListener("click", () => {
  if (activeRowId) {
    const activeRow = shadowRoot.getElementById(activeRowId);
    const nextRow = activeRow.nextElementSibling;
    if (nextRow) {
      activeRow.parentNode.insertBefore(nextRow, activeRow);
    }
  }
});

topBtn.addEventListener("click", () => {
  if (activeRowId) {
    const activeRow = shadowRoot.getElementById(activeRowId);
    const tableBody = activeRow.parentNode;
    tableBody.insertBefore(activeRow, tableBody.firstChild);
  }
});

bottomBtn.addEventListener("click", () => {
  if (activeRowId) {
    const activeRow = shadowRoot.getElementById(activeRowId);
    const tableBody = activeRow.parentNode;
    tableBody.appendChild(activeRow);
  }
});
