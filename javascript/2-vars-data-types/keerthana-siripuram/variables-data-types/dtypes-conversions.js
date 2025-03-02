
function convertValue(val, type) {
    switch (type) {
        case "Number": return Number(val)
        case "Boolean": return Boolean(val)
        case "Null": return null(val)
        case "Object": return Object(val)
        default: return val
    }
}
const fromDtype = ["1", 1, true, undefined, { name: "Keerthana" }]
const conversionTo = ["String", "Number", "Boolean", "Undefined", "Object"]
function performTypeConversion() {
    const tableBody = document.querySelector("tbody")
    fromDtype.forEach((ele) => {
        conversionTo.forEach((type) => {
            const row = document.createElement('tr')
            const convertedValue = convertValue(ele, type)
            const cell1 = document.createElement('td')
            cell1.textContent = ele
            const cell2 = document.createElement('td')
            cell2.textContent = typeof (ele)
            const cell3 = document.createElement('td')
            cell3.textContent = convertedValue
            const cell4 = document.createElement('td')
            cell4.textContent = type
            row.appendChild(cell1)
            row.appendChild(cell2)
            row.appendChild(cell3)
            row.appendChild(cell4)
            tableBody.appendChild(row)
        })

    })
}