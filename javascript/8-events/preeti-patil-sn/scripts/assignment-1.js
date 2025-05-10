// Reference to the table
const table = document.getElementById("myTable");

// Function to create a 10x10 table
function createTable(rows, cols) {
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = `R${i + 1}C${j + 1}`; // Fill each cell with row-column info
    }
  }
}

// Function to highlight the row and column
function highlightRowAndColumn(event) {
  if (event.target.tagName === "TD") {
    const cell = event.target;
    const rowIndex = cell.parentNode.rowIndex;
    const colIndex = cell.cellIndex;

    // Highlight the row
    for (const cell of table.rows[rowIndex].cells) {
      cell.style.backgroundColor = "yellow";
    }

    // Highlight the column
    for (const row of table.rows) {
      row.cells[colIndex].style.backgroundColor = "yellow";
    }
  }
}

// Function to remove the highlight
function removeHighlight() {
  for (const row of table.rows) {
    for (const cell of row.cells) {
      cell.style.backgroundColor = "";
    }
  }
}

// Attach mouseover and mouseout listeners
table.addEventListener("mouseover", highlightRowAndColumn);
table.addEventListener("mouseout", removeHighlight);

// Create the table
createTable(10, 10);
