// HTML content for the table
const tableHTML = `
<html>
  <head>
    <style>
      table {
        width: 50%;
        border-collapse: collapse;
        margin: 20px 0;
      }

      th,
      td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
      }

      button {
        margin: 2px;
        padding: 5px 10px;
      }
    </style>
  </head>
  <body>
    <table id="myTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Row Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- 10 rows with buttons -->
        <script>
          for (let i = 1; i <= 10; i++) {
            document.write(\`
              <tr>
                <td>\${i}</td>
                <td>Row \${i}</td>
                <td>
                  <button onclick="moveUp(this)">Up</button>
                  <button onclick="moveDown(this)">Down</button>
                  <button onclick="moveToTop(this)">Top</button>
                  <button onclick="moveToBottom(this)">Bottom</button>
                </td>
              </tr>
            \`);
          }
        </script>
      </tbody>
    </table>
  </body>
</html>
`;

// Injecting HTML content into iframe
const iframe = document.getElementById('myIframe');
const iframeDocument = iframe.contentWindow.document;
iframeDocument.open();
iframeDocument.write(tableHTML);
iframeDocument.close();

// Function to move the row up
function moveUp(button) {
  const row = button.parentElement.parentElement;
  const previousRow = row.previousElementSibling;
  if (previousRow) {
    row.parentElement.insertBefore(row, previousRow);
  }
}

// Function to move the row down
function moveDown(button) {
  const row = button.parentElement.parentElement;
  const nextRow = row.nextElementSibling;
  if (nextRow) {
    row.parentElement.insertBefore(nextRow, row);
  }
}

// Function to move the row to the top
function moveToTop(button) {
  const row = button.parentElement.parentElement;
  const tbody = row.parentElement;
  tbody.insertBefore(row, tbody.firstChild);
}

// Function to move the row to the bottom
function moveToBottom(button) {
  const row = button.parentElement.parentElement;
  const tbody = row.parentElement;
  tbody.appendChild(row);
}

// Adding event listeners to buttons inside iframe
iframe.onload = function () {
  const iframeDoc = iframe.contentWindow.document;
  const buttons = iframeDoc.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const action = button.textContent.trim();
      switch(action) {
        case 'Up':
          moveUp(button);
          break;
        case 'Down':
          moveDown(button);
          break;
        case 'Top':
          moveToTop(button);
          break;
        case 'Bottom':
          moveToBottom(button);
          break;
      }
    });
  });
};
