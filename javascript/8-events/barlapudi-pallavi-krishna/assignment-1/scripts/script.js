const table = document.getElementById("myTable");
for (let i = 0; i < 10; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 10; j++) {
    const cell = row.insertCell();
    cell.textContent = `${i},${j}`;
  }
}
table.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "TD") {
    const rowIndex = e.target.parentNode.rowIndex;
    const colIndex = e.target.cellIndex;
    for (let cell of table.rows[rowIndex].cells) {
      cell.classList.add("highlight");
    }
    for (let row of table.rows) {
      row.cells[colIndex].classList.add("highlight");
    }
  }
});
table.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "TD") {
    for (let row of table.rows) {
      for (let cell of row.cells) {
        cell.classList.remove("highlight");
      }
    }
  }
});