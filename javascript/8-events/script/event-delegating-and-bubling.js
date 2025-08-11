
const cols = 10;
const rows = 10;
const tableBody = document.getElementById('tablebody');

for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
        const td = document.createElement('td');
        td.innerText = `${i + 1}, ${j + 1}`;
        tr.appendChild(td)
    }

    tableBody.appendChild(tr)
}

const table = document.getElementById('table');

table.addEventListener('mouseover', evt => {
    const target = evt.target

    if (target.tagName === 'TD') {
        const rowIndex = target.parentElement.rowIndex;
        const colIndex = target.cellIndex

        const rowCells = tableBody.rows[rowIndex].cells;

        Array.from(rowCells).forEach(row => {
            row.classList.add('style-row');
        })

        for (let i = 0; i < tableBody.rows.length; i++) {
            tableBody.rows[i].cells[colIndex].classList.add('style-column');
        }

    }
});


table.addEventListener('mouseout', evt => {
    const target = evt.target

    if (target.tagName === 'TD') {
        const rowIndex = target.parentElement.rowIndex;
        const colIndex = target.cellIndex

        const rowCells = tableBody.rows[rowIndex].cells;

        Array.from(rowCells).forEach(row => {
            row.classList.remove('style-row');
        })

        for (let i = 0; i < tableBody.rows.length; i++) {
            tableBody.rows[i].cells[colIndex].classList.remove('style-column');
        }

    }
})



