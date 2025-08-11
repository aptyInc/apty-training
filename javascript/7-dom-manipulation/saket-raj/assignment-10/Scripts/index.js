const tableHTML = `
  <style>
    table {
      border-collapse: collapse;
      width: 60%;
      margin: auto;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
    }
  </style>
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
        <tr><td>Row ${i + 1}</td></tr>
      `
      ).join("")}
    </tbody>
  </table>
`;

const host = document.getElementById("shadow-host");
const shadowRoot = host.attachShadow({ mode: "open" });
shadowRoot.innerHTML = tableHTML;

const tbody = shadowRoot.querySelector("#myTable tbody");

function getRow(rowNum) {
  return tbody.children[rowNum - 1];
}

document.getElementById("upBtn").addEventListener("click", () => {
  const rowNum = parseInt(document.getElementById("rowNumber").value);
  const row = getRow(rowNum);
  if (row && row.previousElementSibling) {
    tbody.insertBefore(row, row.previousElementSibling);
  }
});

document.getElementById("downBtn").addEventListener("click", () => {
  const rowNum = parseInt(document.getElementById("rowNumber").value);
  const row = getRow(rowNum);
  if (row && row.nextElementSibling) {
    tbody.insertBefore(row.nextElementSibling, row);
  }
});

document.getElementById("topBtn").addEventListener("click", () => {
  const rowNum = parseInt(document.getElementById("rowNumber").value);
  const row = getRow(rowNum);
  if (row) {
    tbody.insertBefore(row, tbody.firstElementChild);
  }
});

document.getElementById("bottomBtn").addEventListener("click", () => {
  const rowNum = parseInt(document.getElementById("rowNumber").value);
  const row = getRow(rowNum);
  if (row) {
    tbody.appendChild(row);
  }
});
