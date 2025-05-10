function moveUp(btn) {
    const row = btn.closest('tr');
    const prevRow = row.previousElementSibling;
    if (prevRow && prevRow.nodeName === "TR") {
        row.parentElement.insertBefore(row, prevRow);
    }
}

function moveDown(btn) {
    const row = btn.closest('tr');
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.nodeName === "TR") {
        row.parentElement.insertBefore(nextRow, row);
    }
}

function moveTop(btn) {
    const row = btn.closest('tr');
    const tbody = row.parentElement;
    tbody.insertBefore(row, tbody.firstElementChild);
}

function moveBottom(btn) {
    const row = btn.closest('tr');
    const tbody = row.parentElement;
    tbody.appendChild(row);
}