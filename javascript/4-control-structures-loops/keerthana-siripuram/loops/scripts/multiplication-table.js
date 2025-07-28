function generateCell(content)
{
    const cell= document.createElement("td")
    cell.textContent=content
    return cell
}
function genMultiplicationTable() {
    let num = parseInt(document.getElementById("num").value)
    const tableBody = document.querySelector("tbody")
    for (let i = 1; i <= 10; i++) {
        const newRow = document.createElement("tr")
        newRow.appendChild(generateCell(num))
        newRow.appendChild(generateCell("*"))
        newRow.appendChild(generateCell(i))
        newRow.appendChild(generateCell("="))
        newRow.appendChild(generateCell(num*i))
        tableBody.appendChild(newRow)
    }
}