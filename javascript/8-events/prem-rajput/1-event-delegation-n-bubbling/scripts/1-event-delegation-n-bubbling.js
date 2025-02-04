const table = document.getElementById("myTable");

table.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "TD") {
        const colIndex = e.target.cellIndex;
        const rowIndex = e.target.parentNode.rowIndex;

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
        const colIndex = e.target.cellIndex;
        const rowIndex = e.target.parentNode.rowIndex;

        for (let cell of table.rows[rowIndex].cells) {
            cell.classList.remove("highlight");
        }

        for (let row of table.rows) {
            row.cells[colIndex].classList.remove("highlight");
        }
    }
});
