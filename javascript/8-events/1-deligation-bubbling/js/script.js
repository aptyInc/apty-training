const table = document.getElementById("myTable");

table.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "TD") {
        const cell = event.target;
        const row = cell.parentNode;
        const colIndex = [...row.children].indexOf(cell);

        // Highlight the row
        [...row.children].forEach((td) => td.classList.add("highlight"));

        // Highlight the column
        [...table.rows].forEach((tr) => tr.children[colIndex].classList.add("highlight"));
    }
});

table.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "TD") {
        const cell = event.target;
        const row = cell.parentNode;
        const colIndex = [...row.children].indexOf(cell);

        // Remove highlight from the row
        [...row.children].forEach((td) => td.classList.remove("highlight"));

        // Remove highlight from the column
        [...table.rows].forEach((tr) => tr.children[colIndex].classList.remove("highlight"));
    }
});
