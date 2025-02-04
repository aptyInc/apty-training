const table = document.getElementById('highlight-table');

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = `${i},${j}`;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

table.addEventListener('mouseover', function(event) {
    const cell = event.target;
    if (cell.tagName === 'TD') {
        const row = cell.parentElement;
        const columnIndex = cell.cellIndex;
        row.classList.add('highlight-row');
        Array.from(table.rows).forEach(row => row.cells[columnIndex].classList.add('highlight-column'));
    }
});

table.addEventListener('mouseout', function(event) {
    const cell = event.target;
    if (cell.tagName === 'TD') {
        const row = cell.parentElement;
        const columnIndex = cell.cellIndex;
        row.classList.remove('highlight-row');
        Array.from(table.rows).forEach(row => row.cells[columnIndex].classList.remove('highlight-column'));
    }
});
