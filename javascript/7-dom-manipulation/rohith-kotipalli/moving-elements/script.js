for (let i = 1; i <= 10; i++) {
    document.getElementById('tablebody').innerHTML += (`
        <tr id="row${i}">
            <td>Row ${i}</td>
            <td>
                <button onclick="moveUp('row${i}')">Up</button>
                <button onclick="moveDown('row${i}')">Down</button>
                <button onclick="moveToTop('row${i}')">Top</button>
                <button onclick="moveToBottom('row${i}')">Bottom</button>
            </td>
        </tr>
    `);
}

function moveUp(identifier) {
    const row = document.getElementById(identifier)
    const previousRow = row.previousElementSibling;
    if (previousRow) {
        row.parentNode.insertBefore(row, previousRow);
    }
}

function moveDown(identifier) {
    const row = document.getElementById(identifier)
    const nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
    }
}

function moveToTop(identifier) {
    const row = document.getElementById(identifier)
    const tableBody = row.parentNode;
    tableBody.insertBefore(row, tableBody.firstElementChild);
}

function moveToBottom(identifier) {
    const row = document.getElementById(identifier)
    const tableBody = row.parentNode;
    tableBody.appendChild(row);
}