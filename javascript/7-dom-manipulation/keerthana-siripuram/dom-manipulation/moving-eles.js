// Function to move the row up
function moveUp(button) {
    const row = button.parentElement.parentElement;
    const previousRow = row.previousElementSibling;
    if (previousRow) {
        row.parentElement.insertBefore(row, previousRow);
    }
}

// Function to move the row down
function moveDown(button) {
    const row = button.parentElement.parentElement;
    const nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentElement.insertBefore(nextRow, row);
    }
}

// Function to move the row to the top
function moveToTop(button) {
    const row = button.parentElement.parentElement;
    const tbody = row.parentElement;
    tbody.insertBefore(row, tbody.firstChild);
}

// Function to move the row to the bottom
function moveToBottom(button) {
    const row = button.parentElement.parentElement;
    const tbody = row.parentElement;
    tbody.appendChild(row);
}