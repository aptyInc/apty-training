
const tableBody = document.getElementById('tablebody');

for (let i = 1; i <= 10; i++) {

    const row = document.createElement('tr');
    row.setAttribute('id', `row-${i}`);
    row.innerHTML = `
        <td>Row ${i}</td>
        <td>
            <button onclick = 'moveElement("up",${i})'>Up</button>
            <button onclick = 'moveElement("down",${i})'>Down</button>
            <button onclick = 'moveElement("top",${i})'>Top</button>
            <button onclick = 'moveElement("bottom",${i})'>Bottom</button>
        </td>
    `
    tableBody.appendChild(row)

    function moveElement(action, rowNum) {
        const row = document.getElementById(`row-${rowNum}`);
        const allRows = Array.from(tableBody.rows);
        console.log(allRows)
        const rowIndex = allRows.indexOf(row);

        console.log(rowIndex)
        switch (action) {
            case 'up':
                if (rowIndex > 0) {
                    tableBody.insertBefore(row, allRows[rowIndex - 1]);
                }
                break;
            case 'down':
                if (rowIndex < allRows.length - 1) {
                    tableBody.insertBefore(row, allRows[rowIndex + 2]);
                }
                break;
            case 'top':
                tableBody.insertBefore(row, allRows[0]);
                break;
            case 'bottom':
                tableBody.appendChild(row);
                break;
        }
    }
}