const tableBody = document.querySelector('#myTable tbody');

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr'); // Create a table row
    row.innerHTML = `
        <td>${i}</td>
        <td>Row ${i}</td>
        <td>
          <button class="up">Up</button>
          <button class="down">Down</button>
          <button class="top">Top</button>
          <button class="bottom">Bottom</button>
        </td>
      `;
    tableBody.appendChild(row);
}


tableBody.addEventListener('click', (event) => {
    const clickedElement = event.target; // The exact element that was clicked

    if (clickedElement.tagName === 'BUTTON') {
        const row = clickedElement.closest('tr'); // Find the row of the clicked button
        const table = row.parentElement; // The parent (table body) of the row

        if (clickedElement.className == 'up') {
            // Move row up
            const previousRow = row.previousElementSibling;
            if (previousRow) {
                table.insertBefore(row, previousRow);
            }
        } else if (clickedElement.classList.contains('down')) {
            // Move row down
            const nextRow = row.nextElementSibling;
            if (nextRow) {
                table.insertBefore(nextRow, row);
            }
        } else if (clickedElement.classList.contains('top')) {
            // Move row to the top
            table.insertBefore(row, table.firstElementChild);
        } else if (clickedElement.classList.contains('bottom')) {
            // Move row to the bottom
            table.appendChild(row);
        }
    }
});