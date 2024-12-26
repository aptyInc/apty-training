

const shadowHost = document.getElementById('shadow-host');

const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

const template = document.getElementById('shadow-template');

const templateClone = template.content.cloneNode(true);

shadowRoot.appendChild(templateClone)

const tableBody = shadowRoot.getElementById('tablebody');

for (let i = 1; i <= 10; i++) {

    const row = document.createElement('tr');
    row.setAttribute('id', `row-${i}`);
    row.innerHTML = `
        <td>Row ${i}</td>`

    tableBody.appendChild(row)

    function moveElement(action, rowNum) {
        const row = shadowRoot.getElementById(`row-${rowNum}`);
        const allRows = Array.from(tableBody.rows);
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

document.getElementById('upBtn').addEventListener('click', () => moveElement('up', 1));
document.getElementById('downBtn').addEventListener('click', () => moveElement('down', 1));
document.getElementById('topBtn').addEventListener('click', () => moveElement('top', 1));
document.getElementById('bottomBtn').addEventListener('click', () => moveElement('bottom', 1));