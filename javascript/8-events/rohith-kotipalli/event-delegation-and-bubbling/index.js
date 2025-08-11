const tableContainer = document.getElementById('table-container');
  const table = document.createElement('table');

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('td');
      cell.textContent = `${i + 1},${j + 1}`; 
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableContainer.appendChild(table);

  const resultDiv = document.getElementById('result');

  table.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'TD') {
      const cell = event.target;
      const row = cell.parentNode;
      const colIndex = Array.from(cell.parentNode.children).indexOf(cell);

      Array.from(row.children).forEach((cell) => cell.classList.add('highlight'));

      Array.from(table.rows).forEach((r) => r.children[colIndex].classList.add('highlight'));

      const rowIndex = Array.from(table.rows).indexOf(row) + 1;
      resultDiv.textContent = `Hovered on Row: ${rowIndex}, Column: ${colIndex + 1}`;
    }
  });

  table.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'TD') {
      const cell = event.target;
      const row = cell.parentNode;
      const colIndex = Array.from(cell.parentNode.children).indexOf(cell);
      Array.from(row.children).forEach((cell) => cell.classList.remove('highlight'));

      Array.from(table.rows).forEach((r) => r.children[colIndex].classList.remove('highlight'));

      resultDiv.textContent = 'Hover over a cell to see the row and column numbers.';
    }
  });