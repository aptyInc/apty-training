const table = document.getElementById('highlightTable');

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = `${i + 1},${j + 1}`;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

table.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'TD') {
        const cell = e.target;
        const row = cell.parentElement;
        const columnIndex = Array.from(row.children).indexOf(cell); //take col index of event by make whole row to array

        row.querySelectorAll('td').forEach(td => td.classList.add('highlight')); //all td elements in clicked row

        table.querySelectorAll('tr').forEach(tr => {
            if (tr.children[columnIndex]) {
                tr.children[columnIndex].classList.add('highlight'); 
            }
        });
    }
});

table.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'TD') {
        const cell = e.target;
        const row = cell.parentElement;
        const columnIndex = Array.from(row.children).indexOf(cell);

        // Remove highlight from the row
        row.querySelectorAll('td').forEach(td => td.classList.remove('highlight'));

        // Remove highlight from the column
        table.querySelectorAll('tr').forEach(tr => {
            if (tr.children[columnIndex]) {
                tr.children[columnIndex].classList.remove('highlight');
            }
        });
    }
});