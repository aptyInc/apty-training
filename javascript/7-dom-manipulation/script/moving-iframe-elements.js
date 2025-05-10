

const iframe = document.getElementById('iframe').contentDocument;
console.log(iframe)

const tableBody = iframe.getElementById('tablebody');

for (let i = 1; i <= 10; i++) {

    const row = iframe.createElement('tr');
    row.setAttribute('id', `row-${i}`);
    row.innerHTML = `
        <td>Row ${i}</td>`
    tableBody.appendChild(row)

    function moveElement(action, rowNum) {
        const row = iframe.getElementById(`row-${rowNum}`);
        const allRows = Array.from(tableBody.rows);
        const rowIndex = allRows.indexOf(row);

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

document.getElementById('upBtn').addEventListener('click', () => moveElement('up', 1));
document.getElementById('downBtn').addEventListener('click', () => moveElement('down', 1));
document.getElementById('topBtn').addEventListener('click', () => moveElement('top', 1));
document.getElementById('bottomBtn').addEventListener('click', () => moveElement('bottom', 1));