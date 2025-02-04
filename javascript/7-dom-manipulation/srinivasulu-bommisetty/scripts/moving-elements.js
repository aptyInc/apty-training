function moveRow(button, direction) {
  const row = button.closest("tr");
  const tbody = row.closest("tbody");

  const allRows = Array.from(tbody.querySelectorAll("tr"));
  const rowIndex = allRows.indexOf(row);

  if (direction === "up" && rowIndex > 0) {
    tbody.insertBefore(row, allRows[rowIndex - 1]);
  } else if (direction === "down" && rowIndex < allRows.length - 1) {
    tbody.insertBefore(allRows[rowIndex + 1], row);
  } else if (direction === "top" && rowIndex > 0) {
    tbody.insertBefore(row, allRows[0]);
  } else if (direction === "bottom" && rowIndex < allRows.length - 1) {
    tbody.appendChild(row);
  }
}
