const rows = 10
const cols = 10

const table = document.getElementById('dynamicTable')
for (let i = 0; i < rows; i++){
    const row = table.insertRow()
    for (let j = 0; j < cols; j++){
        const cell = row.insertCell()
        cell.textContent = `${i+1},${j+1}`
    }
}

table.addEventListener('mouseover', function (event) {
    const target = event.target
    if (target.tagName === 'TD') {
      const cellIndex = target.cellIndex
      const rowIndex = target.parentNode.rowIndex

      const row = table.rows[rowIndex]
      for (let cell of row.cells) {
        cell.classList.add('highlight')
      }

      for (let row of table.rows) {
        row.cells[cellIndex].classList.add('highlight')
      }
    }
})

table.addEventListener('mouseout', function (event) {
    const target = event.target
    if (target.tagName === 'TD') {
      const cellIndex = target.cellIndex
      const rowIndex = target.parentNode.rowIndex

      const row = table.rows[rowIndex]
      for (let cell of row.cells) {
        cell.classList.remove('highlight')
      }

      for (let row of table.rows) {
        row.cells[cellIndex].classList.remove('highlight')
      }
    }
})
