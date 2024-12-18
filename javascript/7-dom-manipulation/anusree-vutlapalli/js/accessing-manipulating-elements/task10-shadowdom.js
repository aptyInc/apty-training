function createShadowDOM() {
    const shadowHost = document.getElementById('shadowHost');

    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

    const tableHTML = `
      <table>
        <thead>
          <tr>
              <th>Row</th>
              <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Row 1</td>
              <td>
                  <button class="up">Up</button>
                  <button class="down">Down</button>
                  <button class="top">Top</button>
                  <button class="bottom">Bottom</button>
              </td>
          </tr>
          <tr>
              <td>Row 2</td>
              <td>
                  <button class="up">Up</button>
                  <button class="down">Down</button>
                  <button class="top">Top</button>
                  <button class="bottom">Bottom</button>
              </td>
          </tr>
          <tr>
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
    `;

    shadowRoot.innerHTML = `
        <style>
          table {
              width: 100%;
              border-collapse: collapse;
          }
          th, td {
              border: 1px solid black;
              padding: 10px;
              text-align: center;
          }
          button {
              margin: 3px;
              padding: 5px 8px;
          }
        </style>
        ${tableHTML}
    `;

    shadowRoot.querySelectorAll('.up').forEach(button => {
        button.addEventListener('click', (e) => moveRow(e.target, 'up'));
    });
    shadowRoot.querySelectorAll('.down').forEach(button => {
        button.addEventListener('click', (e) => moveRow(e.target, 'down'));
    });
    shadowRoot.querySelectorAll('.top').forEach(button => {
        button.addEventListener('click', (e) => moveRow(e.target, 'top'));
    });
    shadowRoot.querySelectorAll('.bottom').forEach(button => {
        button.addEventListener('click', (e) => moveRow(e.target, 'bottom'));
    });

    function moveRow(button, direction) {
        const row = button.closest('tr');
        const tbody = row.parentElement;

        if (direction === 'up') {
            const prevRow = row.previousElementSibling;
            if (prevRow) tbody.insertBefore(row, prevRow);
        } else if (direction === 'down') {
            const nextRow = row.nextElementSibling;
            if (nextRow) tbody.insertBefore(nextRow, row);
        } else if (direction === 'top') {
            tbody.insertBefore(row, tbody.firstElementChild);
        } else if (direction === 'bottom') {
            tbody.appendChild(row);
        }
    }
}

createShadowDOM();