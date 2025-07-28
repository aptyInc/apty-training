
const fromDtype = ["1", 1, true, undefined, null, { name: "Keerthana" }]
function performTypeCoercion() {
    const tableBody = document.querySelector("tbody")
    fromDtype.forEach((ele1) => {
        fromDtype.forEach((ele2) => {
            const newRow= document.createElement("tr")
            const values = [
                { value: ele1, dataType: typeof(ele1) },
                { value: ele2, dataType: typeof(ele2) },
                { value: ele1 + ele2, dataType: typeof(ele1 + ele2) },
            ]
            values.forEach((item) => {
                const cell = document.createElement("td")
                cell.innerHTML=`Dtype:${item.dataType}, value:${item.value}`
                newRow.append(cell)
            })
            tableBody.appendChild(newRow)

        })
    })
}
