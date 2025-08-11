const tableHTML = `
  <html>
  <head>
    <link rel="stylesheet" href="Styles/style.css">
  </head>
  <body>
    <table id="myTable">
      <thead>
        <tr>
          <th>Row Number</th>
        </tr>
      </thead>
      <tbody>
        ${Array.from(
          { length: 10 },
          (_, i) => `
          <tr>
            <td>Row ${i + 1}</td>
          </tr>
        `
        ).join("")}
      </tbody>
    </table>
  </body>
  </html>
`;

const iframe = document.getElementById("myFrame");
iframe.contentDocument.open();
iframe.contentDocument.write(tableHTML);
iframe.contentDocument.close();

const iframeDoc = iframe.contentDocument;
const tbody = iframeDoc.querySelector("#myTable tbody");

const rowSelect = document.getElementById("rowSelect");
for (let i = 1; i <= 10; i++) {
  const option = document.createElement("option");
  option.value = i - 1;
  option.textContent = `Row ${i}`;
  rowSelect.appendChild(option);
}

document.getElementById("upBtn").addEventListener("click", () => {
  const index = parseInt(rowSelect.value);
  const row = tbody.children[index];
  const prev = row.previousElementSibling;
  if (prev) tbody.insertBefore(row, prev);
});

document.getElementById("downBtn").addEventListener("click", () => {
  const index = parseInt(rowSelect.value);
  const row = tbody.children[index];
  const next = row.nextElementSibling;
  if (next) tbody.insertBefore(next, row);
});

document.getElementById("topBtn").addEventListener("click", () => {
  const index = parseInt(rowSelect.value);
  const row = tbody.children[index];
  tbody.insertBefore(row, tbody.firstElementChild);
});

document.getElementById("bottomBtn").addEventListener("click", () => {
  const index = parseInt(rowSelect.value);
  const row = tbody.children[index];
  tbody.appendChild(row);
});
