document.getElementById("addRow").addEventListener("click", () => {
  const table = document.getElementById("dynamicTable").querySelector("tbody");
  const rowCount = table.rows.length + 1;
  const newRow = table.insertRow();
  newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><button class="removeRow">Remove</button></td>
    `;
});

document.getElementById("dynamicTable").addEventListener("click", (event) => {
  if (event.target.classList.contains("removeRow")) {
    const row = event.target.closest("tr");
    row.remove();
  }
});
