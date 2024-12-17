const resultTable = document.getElementById("tableResult");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  row.innerHTML = `
                <td>Row ${i}</td>
                <td>
                    <button onclick="moveUp(this)">Up</button>
                    <button onclick="moveDown(this)">Down</button>
                    <button onclick="moveTop(this)">Top</button>
                    <button onclick="moveBottom(this)">Bottom</button>
                </td>
            `;
  resultTable.appendChild(row);
}

function moveUp(button) {
  const row = button.closest("tr");
  const prevRow = row.previousElementSibling;
  if (prevRow) {
    row.parentNode.insertBefore(row, prevRow);
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
  resultTable.insertBefore(row, tableBody.firstElementChild);
}

function moveBottom(button) {
  const row = button.closest("tr");
  const tableBody = row.parentNode;
  resultTable.appendChild(row);
}
