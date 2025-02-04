document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("highlight-table");

  // Create 10x10 table
  for (let i = 0; i < 10; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 10; j++) {
      const cell = row.insertCell();
      cell.textContent = `${i + 1}, ${j + 1}`;
    }
  }

  // Add mouseover and mouseout event listeners
  table.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "TD") {
      highlightRowColumn(event.target, true);
    }
  });

  table.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "TD") {
      highlightRowColumn(event.target, false);
    }
  });

  function highlightRowColumn(cell, highlight) {
    const row = cell.parentElement;
    const table = row.parentElement;

    // Highlight row
    [...row.children].forEach((td) => {
      td.style.backgroundColor = highlight ? "#f0f8ff" : "";
    });

    // Highlight column
    const cellIndex = cell.cellIndex;
    [...table.rows].forEach((tr) => {
      tr.cells[cellIndex].style.backgroundColor = highlight ? "#f0f8ff" : "";
    });
  }
});
