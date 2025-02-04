 // Function to create rows in the table with buttons
 function createTable() {
    let tableBody = document.querySelector('#myTable tbody');
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement('tr');
        row.id = 'row' + i;

        let cell1 = document.createElement('td');
        cell1.textContent = 'Row ' + i;

        let cell2 = document.createElement('td');
        cell2.innerHTML = `
            <button onclick="moveUp(${i})">Up</button>
            <button onclick="moveDown(${i})">Down</button>
            <button onclick="moveTop(${i})">Top</button>
            <button onclick="moveBottom(${i})">Bottom</button>
        `;

        row.appendChild(cell1);
        row.appendChild(cell2);

        tableBody.appendChild(row);
    }
}

// Function to move the row up (above the previous row)
function moveUp(rowNumber) {
    let row = document.getElementById('row' + rowNumber);
    let prevRow = row.previousElementSibling;
    if (prevRow) {
        row.parentNode.insertBefore(row, prevRow);
    }
}

// Function to move the row down (below the next row)
function moveDown(rowNumber) {
    let row = document.getElementById('row' + rowNumber);
    let nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
    }
}

// Function to move the row to the top (first row)
function moveTop(rowNumber) {
    let row = document.getElementById('row' + rowNumber);
    let tableBody = row.parentNode;
    tableBody.insertBefore(row, tableBody.firstChild);
}

// Function to move the row to the bottom (last row)
function moveBottom(rowNumber) {
    let row = document.getElementById('row' + rowNumber);
    let tableBody = row.parentNode;
    tableBody.appendChild(row);
}

// Initialize the table when the page loads
createTable();