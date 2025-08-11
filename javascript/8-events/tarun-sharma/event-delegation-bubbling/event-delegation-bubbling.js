
const table = document.getElementById('myTable');

  table.addEventListener('mouseover', (e) => {

    if (e.target.tagName === 'TD') {

      const row = e.target.parentNode;
      const colIndex = Array.from(row.children).indexOf(e.target);

      row.style.backgroundColor = 'orange';

      Array.from(table.rows).forEach((r) => r.cells[colIndex].style.backgroundColor = 'blue');


    }

  });


  table.addEventListener('mouseout', (e) => {

    if (e.target.tagName === 'TD') {
      const row = e.target.parentNode;

      const colIndex = Array.from(row.children).indexOf(e.target);

      row.style.backgroundColor = '';

      Array.from(table.rows).forEach((r) => r.cells[colIndex].style.backgroundColor = '');

    }


  });