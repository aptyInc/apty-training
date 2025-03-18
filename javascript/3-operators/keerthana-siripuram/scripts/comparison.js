function fetchInput() {
    let firstVal = document.getElementById("val1").value
    let secVal = document.getElementById("val2").value
    let type1 = document.getElementById("type1").value
    let type2 = document.getElementById("type2").value
    let inputArr = [firstVal, secVal, type1, type2]
    return inputArr
}
function convertValue(val, type) {
    switch (type) {
        case "Number": return Number(val)
        case "Boolean": return Boolean(val)
        case "Null": return null(val)
        case "Undefined": return undefined(val)
        case "Symbol": return Symbol(val)
        case "Object": return Object(val)
        default: return val
    }
}
function compareEqual() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 == convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareStrictEqual() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 === convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareNotEqual() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 != convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareStrictNotEqual() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 !== convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareGreaterThan() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 > convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareGreaterThanOrEqualTo() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 >= convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareLesserThan() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 < convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
function compareLesserThanOrEqualTo() {
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1 = convertValue(firstVal, type1)
    let convertedValue2 = convertValue(secVal, type2)
    let res = convertedValue1 <= convertedValue2
    document.getElementById("res").innerText = `Result:${res}`
}
