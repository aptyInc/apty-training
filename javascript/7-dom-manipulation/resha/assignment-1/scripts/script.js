const table = document.getElementById('myTable');

for (let i = 0; i < 10; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 10; j++) {
        const cell = row.insertCell();
        cell.textContent = `R${i+1}C${j+1}`;
    }
}

table.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'TD') {
        const cell = e.target;
        const rowIndex = cell.parentNode.rowIndex;
        const colIndex = cell.cellIndex;

        table.rows[rowIndex].querySelectorAll('td').forEach(td => td.classList.add('highlight'));

        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[colIndex].classList.add('highlight');
        }
    }
});

table.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'TD') {
        table.querySelectorAll('td').forEach(td => td.classList.remove('highlight'));
    }
});
