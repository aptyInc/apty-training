const iframe = document.getElementById('table-iframe');
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

iframeDoc.open();
iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Table Inside Iframe</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;
          }
          .hidden {
            display: none;
          }
          .selected {
            background-color:rgb(86, 147, 200);
          }
        </style>
      </head>
      <body>
        <table id="dynamic-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Data</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Row 1</td>
              <td>
                <button class="up">Up</button>
                <button class="down">Down</button>
                <button class="top">Top</button>
                <button class="bottom">Bottom</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Row 2</td>
              <td>
                <button class="up">Up</button>
                <button class="down">Down</button>
                <button class="top">Top</button>
                <button class="bottom">Bottom</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Row 3</td>
              <td>
                <button class="up">Up</button>
                <button class="down">Down</button>
                <button class="top">Top</button>
                <button class="bottom">Bottom</button>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      </html>
    `);
iframeDoc.close();

// Function to move rows inside the iframe
function moveRow(action) {
    const tableBody = iframeDoc.querySelector('#dynamic-table tbody'); // The tbody of the table
    const selectedRow = tableBody.querySelector('tr.selected') || tableBody.firstElementChild;

    if (!selectedRow) return;

    if (action === 'up') {
        const previousRow = selectedRow.previousElementSibling;
        if (previousRow) {
            tableBody.insertBefore(selectedRow, previousRow);
        }
    } else if (action === 'down') {
        const nextRow = selectedRow.nextElementSibling;
        if (nextRow) {
            tableBody.insertBefore(nextRow, selectedRow);
        }
    } else if (action === 'top') {
        tableBody.insertBefore(selectedRow, tableBody.firstElementChild);
    } else if (action === 'bottom') {
        tableBody.appendChild(selectedRow);
    }
}

// Add click listener inside the iframe to select rows
iframe.addEventListener('load', () => {
    iframeDoc.addEventListener('click', (event) => {
        const clickedRow = event.target.closest('tr');
        if (clickedRow && clickedRow.parentElement.tagName === 'TBODY') {
            clickedRow.classList.add('selected');
        }
    });
});