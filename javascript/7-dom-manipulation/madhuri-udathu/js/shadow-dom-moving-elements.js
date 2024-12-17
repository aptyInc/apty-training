const tableHTML = `
      <table id="dynamic-table" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Index</th>
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
        .selected {
          background-color: #f0f8ff;
        }
      </style>
    `;

// Create Shadow DOM and inject HTML and CSS
const shadowContainer = document.getElementById('shadow-container');
const shadowRoot = shadowContainer.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = tableHTML;

// Add external button functionality
function moveRow(action) {
    const tableBody = shadowRoot.querySelector('#dynamic-table tbody');
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

// Add click listener inside Shadow DOM to select rows
shadowRoot.addEventListener('click', (event) => {
    const clickedRow = event.target.closest('tr');
    if (clickedRow && clickedRow.parentElement.tagName === 'TBODY') {
        shadowRoot.querySelectorAll('tr').forEach(row => row.classList.remove('selected'));
        clickedRow.classList.add('selected');
    }
});