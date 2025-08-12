const table = document.getElementById("myTable");

table.addEventListener("mouseover", (e) => {
  const cell = e.target.closest("td");
  if (!cell || !table.contains(cell)) return;

  const colIndex = cell.cellIndex;
  const row = cell.parentElement;

  //highlithing the entire row
  for (let td of row.children) {
    td.classList.add("highlight");
  }

  //highlighting the entire col
  for (let tr of table.rows) {
    tr.cells[colIndex].classList.add("highlight");
  }
});

table.addEventListener("mouseout", (e) => {
  const cell = e.target.closest("td");
  if (!cell || !table.contains(cell)) return;

  const colIndex = cell.cellIndex;
  const row = cell.parentElement;

  //removing highlight from the entire row
  for (let td of row.children) {
    td.classList.remove("highlight");
  }

  //removing highlight from the entire col
  for (let tr of table.rows) {
    tr.cells[colIndex].classList.remove("highlight");
  }
});
