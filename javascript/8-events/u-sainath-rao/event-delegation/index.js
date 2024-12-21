const table = document.querySelector("table");

for (let i = 0; i < 10; i++) {
	const row = table.insertRow();

	for (let j = 0; j < 10; j++) {
		const cell = row.insertCell();
		cell.textContent = `${i + 1}, ${j + 1}`;
	}
}

table.addEventListener("mouseover", (event) => {
	const cell = event.target;

	if (cell.tagName.toLowerCase() !== "td") return;

	const row = cell.parentNode.rowIndex;
	const column = cell.cellIndex;

	const table_rows = table.rows;

	for (let i = 0; i < table_rows.length; i++) {
		table_rows[i].cells[column].classList.add("highlight-column");
	}

	for (let i = 0; i < table_rows[row].cells.length; i++) {
		table_rows[row].cells[i].classList.add("highlight-row");
	}
});

table.addEventListener("mouseout", (event) => {
	const cell = event.target;

	if (cell.tagName.toLowerCase() !== "td") return;

	const row = cell.parentNode.rowIndex;
	const column = cell.cellIndex;

	const table_rows = table.rows;

	for (let i = 0; i < table_rows.length; i++) {
		table_rows[i].cells[column].classList.remove("highlight-column");
	}

	for (let i = 0; i < table_rows[row].cells.length; i++) {
		table_rows[row].cells[i].classList.remove("highlight-row");
	}
});
