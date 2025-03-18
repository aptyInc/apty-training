const table = document.querySelector("table")
table.addEventListener("mouseover", (event) => {
    if (event.target.tagName == "TD" || event.target.tagName == "TH") {
        const cell = event.target
        const row = cell.parentElement
        const colIndex = Array.from(row.children).indexOf(cell)
        row.style.backgroundColor = "red"
        for (const row of table.rows) {
            row.cells[colIndex].style.backgroundColor = "red"
        }
    }
})
table.addEventListener("mouseout", (event) => {
    if (event.target.tagName == "TD" || event.target.tagName == "TR") {
        const cell = event.target
        const row = cell.parentElement
        const colIndex = Array.from(row.children).indexOf(cell)
        row.style.backgroundColor = ""
        for (const row of table.rows) {
            row.cells[colIndex].style.backgroundColor = ""
        }
    }
})