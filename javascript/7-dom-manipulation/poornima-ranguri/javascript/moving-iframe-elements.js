const iframe = document.getElementById("tableIframe");

// Listen for messages from iframe to track the active row
let activeRowId = null;
window.addEventListener("message", (event) => {
  if (event.data.type === "setActiveRow") {
    activeRowId = event.data.rowId;
  }
});

// Wait for iframe to load
iframe.onload = function () {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const resultTable = iframeDoc.getElementById("tableResult");

  // Add rows to the table dynamically
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    row.id = `row${i}`;
    row.innerHTML = `
      <td>Row ${i}</td>
      <td><button onclick="parent.postMessage({ type: 'setActiveRow', rowId: 'row${i}' }, '*')">Select</button></td>
    `;
    resultTable.appendChild(row);
  }

  // Button functionality
  const upBtn = document.getElementById("upBtn");
  const downBtn = document.getElementById("downBtn");
  const topBtn = document.getElementById("topBtn");
  const bottomBtn = document.getElementById("bottomBtn");

  upBtn.addEventListener("click", () => {
    if (activeRowId) {
      const activeRow = iframeDoc.getElementById(activeRowId);
      const prevRow = activeRow.previousElementSibling;
      if (prevRow) {
        activeRow.parentNode.insertBefore(activeRow, prevRow);
      }
    }
  });

  downBtn.addEventListener("click", () => {
    if (activeRowId) {
      const activeRow = iframeDoc.getElementById(activeRowId);
      const nextRow = activeRow.nextElementSibling;
      if (nextRow) {
        activeRow.parentNode.insertBefore(nextRow, activeRow);
      }
    }
  });

  topBtn.addEventListener("click", () => {
    if (activeRowId) {
      const activeRow = iframeDoc.getElementById(activeRowId);
      const tableBody = activeRow.parentNode;
      tableBody.insertBefore(activeRow, tableBody.firstChild);
    }
  });

  bottomBtn.addEventListener("click", () => {
    if (activeRowId) {
      const activeRow = iframeDoc.getElementById(activeRowId);
      const tableBody = activeRow.parentNode;
      tableBody.appendChild(activeRow);
    }
  });
};
