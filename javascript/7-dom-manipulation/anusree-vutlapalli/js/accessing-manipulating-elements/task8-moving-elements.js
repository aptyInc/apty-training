function moveUp(button) {
    let row = button.parentNode.parentNode; // Current row
    let previousRow = row.previousElementSibling; // Row above
    if (previousRow && previousRow.rowIndex > 0) { // Check if there's a row above
      row.parentNode.insertBefore(row, previousRow); // Move up
    }
  }

  function moveDown(button) {
    let row = button.parentNode.parentNode; // Current row
    let nextRow = row.nextElementSibling; // Row below
    if (nextRow) { // Check if there's a row below
      row.parentNode.insertBefore(nextRow, row); // Move down
    }
  }

  function moveToTop(button) {
    let row = button.parentNode.parentNode; // Current row
    let table = row.parentNode; // Table body
    table.insertBefore(row, table.firstElementChild.nextElementSibling); // Move to the top
  }

  function moveToBottom(button) {
    let row = button.parentNode.parentNode; // Current row
    let table = row.parentNode; // Table body
    table.appendChild(row); // Move to the bottom
  }