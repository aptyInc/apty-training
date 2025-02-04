
const table = document.getElementById("myTable");

// Create a 10x10 table dynamically
for (let i = 0; i < 10; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 10; j++) {
        const cell = row.insertCell();
        cell.textContent = `${i + 1},${j + 1}`; // Fill cells with row, column numbers
    }
}

// Add mouseover and mouseout event listeners
table.addEventListener("mouseover", (event) => {
    const cell = event.target;
    if (cell.tagName === "TD") {
        const rowIndex = cell.parentElement.rowIndex;
        const colIndex = cell.cellIndex;

        // Highlight the row
        const row = table.rows[rowIndex];
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].classList.add("highlight");
        }

        // Highlight the column
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[colIndex].classList.add("highlight");
        }
    }
});

table.addEventListener("mouseout", (event) => {
    const cell = event.target;
    if (cell.tagName === "TD") {
        const rowIndex = cell.parentElement.rowIndex;
        const colIndex = cell.cellIndex;

        // Remove highlight from the row
        const row = table.rows[rowIndex];
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].classList.remove("highlight");
        }

        // Remove highlight from the column
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[colIndex].classList.remove("highlight");
        }
    }
});
